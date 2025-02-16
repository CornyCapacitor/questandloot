'use client'

import { useSocket } from "@/app/middleware/SocketContext"
import { errorAlert } from "@/components/ui/alerts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { successToast } from "@/components/ui/toasts"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

const PasswordReset = () => {
  const { disconnectSocket } = useSocket()
  const router = useRouter()
  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_REST

  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const handleLogout = async () => {
    disconnectSocket()
    successToast({ text: 'Password changed succesfully! Please log in again', position: 'top' })
    router.push('/')
  }

  const authorize = async (username: string, password: string) => {
    const response = await fetch(`${SERVER_URI}/api/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })

    if (!response.ok) {
      const data = await response.json()
      Swal.showValidationMessage(data.error)
      return
    }

    const data = await response.json()
    return data.token
  }

  const authorizationSwal = async () => {
    Swal.fire({
      title: 'Authorization Required',
      text: 'Please enter your username and password to authorize',
      icon: 'warning',
      html: `
      <input id="username-input" class="swal2-input" placeholder="username">
      <input id="password-input" class="swal2-input" type="password" placeholder="password">
    `,
      background: '#0f172a',
      color: '#ffffff',
      focusConfirm: false,
      preConfirm: async () => {
        console.log('Inside preConfirm')
        const usernameInput = document.getElementById("username-input") as HTMLInputElement
        const passwordInput = document.getElementById("password-input") as HTMLInputElement
        const username = usernameInput.value
        const password = passwordInput.value

        if (!username || !password) {
          Swal.showValidationMessage('Please enter both username and password')
          return
        }

        if (password === newPassword) {
          Swal.showValidationMessage('New password must be different')
          return
        }

        try {
          const token = await authorize(username, password)

          try {
            const response = await fetch(`${SERVER_URI}/api/users/`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({ newPassword, repeatNewPassword })
            })

            if (!response.ok) {
              const data = await response.json()
              Swal.showValidationMessage(data.error)
              return false
            }

            handleLogout()
          } catch (error) {
            return error
          }
        } catch (error) {
          return error
        }
      }
    })
  }

  const handleChangePassword = (newPassword: string, repeatNewPassword: string) => {
    if (!newPassword) {
      errorAlert({ text: 'You need to type a new password' })
      return
    }

    if (newPassword !== repeatNewPassword) {
      errorAlert({ text: 'Passwords are not equal' })
      return
    }

    authorizationSwal()
  }

  return (
    <div className="w-full h-full flex flex-col flex-wrap justify-center items-center p-2 gap-2 overflow-y-auto">
      <div className="w-[350px] flex flex-col gap-2 rounded-md p-2 border bg-slate-800 border-slate-700">
        <Input placeholder="New password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <Input placeholder="Repeat new password" type="password" value={repeatNewPassword} onChange={(e) => setRepeatNewPassword(e.target.value)} />
        <Button onClick={() => handleChangePassword(newPassword, repeatNewPassword)}>Submit change</Button>
      </div>
    </div>
  )
}

export default PasswordReset
