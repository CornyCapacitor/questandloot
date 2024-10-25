'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { dummyPlayer } from "./dummies";
import { playerAtom } from "./state/atoms";

export default function Home() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [, setPlayer] = useAtom(playerAtom)
  const router = useRouter()

  const dummyLogin = 'login'
  const dummyPassword = 'password'

  const handleLogin = (login: string, password: string) => {
    if (login === dummyLogin && password === dummyPassword) {
      alert('Authenticated. Logging in...')
      setPlayer(dummyPlayer)
      router.push('/game')
      return
    } else {
      alert('Invalid credentials.')
      return
    }
  }

  return (
    <div className="flex items-center justify-start h-screen">
      <section className="h-full p-10 min-w-[350px] max-w-[600px] flex flex-col gap-2 items-center justify-center border-r bg-slate-800 border-slate-700">
        <h1>Welcome to Quest & Loot!</h1>
        <span>In order to access the game you need to be logged in. (login and password are credentials)</span>
        <label htmlFor="nickname" className="self-start text-sm text-slate-200">Login</label>
        <Input id="Login" placeholder="Login" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={login} onChange={(e) => setLogin(e.target.value)} />
        <label htmlFor="nickname" className="self-start text-sm text-slate-200">Password</label>
        <Input id="password" type="password" placeholder="Password" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => handleLogin(login, password)}>Login</Button>
        <span>No account? Create one right now!</span>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Signup</Button>
      </section>
      <section className="h-full p-2 flex flex-grow items-center justify-center">
        <Image src="/logo_enlarged.png" width={700} height={700} alt="Quest & Loot logo" />
      </section>
    </div>
  );
}