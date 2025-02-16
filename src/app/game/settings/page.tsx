'use client'

import { useSocket } from "@/app/middleware/SocketContext"
import GameButton from "@/components/ui/GameButton"
import { successToast } from "@/components/ui/toasts"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

const SettingPage = () => {
  const { disconnectSocket } = useSocket()
  const router = useRouter()
  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_REST

  const handleLogout = async () => {
    disconnectSocket()
    successToast({ text: 'See you soon!', position: 'top' })
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

        try {
          const token = await authorize(username, password)

          try {
            const response = await fetch(`${SERVER_URI}/api/users/`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
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

  const handleDeleteUser = () => {
    Swal.fire({
      title: 'Are you sure you want to delete your account? This change cannot be undone!',
      background: '#0f172a',
      color: 'rgb(239 68 68)',
      showCancelButton: true,
      cancelButtonColor: '#0047b9',
      cancelButtonText: 'Cancel',
      focusCancel: true,
      confirmButtonColor: '#0f172a',
      confirmButtonText: "Delete account",
    }).then((result) => {
      if (result.isConfirmed) {
        authorizationSwal()
      } else {
        return
      }
    })
  }

  return (
    <div className="w-full h-full flex flex-col flex-wrap justify-center items-center p-2 gap-2 overflow-y-auto">
      <div className="w-[350px] flex flex-col gap-2 rounded-md p-2 border bg-slate-800 border-slate-700">
        <Link href="/game/settings/portrait">
          <GameButton className="w-full">Change portrait</GameButton>
        </Link>
        <Link href="/game/settings/password-reset">
          <GameButton className="w-full">Reset password</GameButton>
        </Link>
        <GameButton className="w-full text-red-500" onClick={() => handleDeleteUser()}>Delete account</GameButton>
      </div>
    </div>
  )
}

export default SettingPage
