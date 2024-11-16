'use client'

import { Tailspin } from "@/components/layout/Tailspin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { errorToast, pendingToast, successToast } from "@/components/ui/toasts";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSocket } from "./middleware/SocketContext";
import { playerAtom } from "./state/atoms";

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [player] = useAtom(playerAtom)
  const { socket, connectSocket } = useSocket()

  const router = useRouter()

  const handleLogin = async (username: string, password: string) => {
    setLoading(true)
    pendingToast({ text: 'Logging in...', position: 'top' })

    try {
      const response = await fetch('http://localhost:3333/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        errorToast({ text: 'Invalid credentials', position: 'top' })
        return
      }

      const data = await response.json();
      const token = data.token;

      console.log(token)

      return token;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      errorToast({ text: 'Failed to log in', position: 'top' })
      setLoading(false)
      return null;
    }
  }

  const handleConnect = async (username: string, password: string) => {
    const token = await handleLogin(username, password)

    if (!token) {
      setLoading(false)
      return
    }

    if (!socket) {
      connectSocket(token)
    }
  }

  useEffect(() => {
    if (socket?.connected) {
      console.log('Socket connected.')
    }

    if (player) {
      console.log('Player set.')
    }

    if (socket?.connected && player) {
      successToast({ text: 'Hello again!', position: 'top' })
      console.log('Congrats! You can play now!')
      router.push('/game')
    }
  }, [socket, player, router])

  return (
    <div className="flex items-center justify-start h-screen">
      <section className="h-full p-10 min-w-[350px] max-w-[600px] flex flex-col gap-2 items-center justify-center border-r bg-slate-800 border-slate-700">
        <h1>Welcome to Quest & Loot!</h1>
        <span>In order to access the game you need to be logged in. (login and password are credentials)</span>
        <label htmlFor="username" className="self-start text-sm text-slate-200">Username</label>
        <Input id="username" autoFocus placeholder="Username" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={username} disabled={loading} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password" className="self-start text-sm text-slate-200">Password</label>
        <Input id="password" type="password" placeholder="Password" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} disabled={loading} onChange={(e) => setPassword(e.target.value)} />
        <Button className="bg-blue-500 hover:bg-blue-600 text-white" disabled={loading} onClick={() => handleConnect(username, password)}>{loading ? (<Tailspin size={30} />) : 'Login'}</Button>
        <span>No account? Create one right now!</span>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white" disabled={loading}>{loading ? (<Tailspin size={30} />) : 'Signup'}</Button>
      </section>
      <section className="h-full p-2 flex flex-grow items-center justify-center">
        <Image src="/logo_enlarged.png" width={700} height={700} alt="Quest & Loot logo" />
      </section>
    </div>
  );
}