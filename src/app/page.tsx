'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { io, Socket } from 'socket.io-client';
import { playerAtom } from "./state/atoms";

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, setPlayer] = useAtom(playerAtom)
  const [socket, setSocket] = useState<Socket | null>(null)
  const router = useRouter()

  const handleLogin = async (username: string, password: string) => {
    try {
      // Wysłanie POST do serwera REST
      const response = await fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Sprawdzanie odpowiedzi serwera
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      // Jeśli odpowiedź jest OK, pobieramy token
      const data = await response.json();
      const token = data.token;

      console.log(token)

      // Zwracamy token
      return token;
    } catch (error) {
      console.error('Error during login:', error);
      return null;
    }
  }

  const handleConnect = async (username: string, password: string) => {
    console.log()
    const token = await handleLogin(username, password)

    const ws = io('http://localhost:3334', {
      query: { token }
    })

    setSocket(ws)

    ws.on('connect', () => {
      console.log('Connected to websocket server:', ws.id)
    })
  }

  return (
    <div className="flex items-center justify-start h-screen">
      <section className="h-full p-10 min-w-[350px] max-w-[600px] flex flex-col gap-2 items-center justify-center border-r bg-slate-800 border-slate-700">
        <h1>Welcome to Quest & Loot!</h1>
        <span>In order to access the game you need to be logged in. (login and password are credentials)</span>
        <label htmlFor="username" className="self-start text-sm text-slate-200">Username</label>
        <Input id="username" autoFocus placeholder="Username" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password" className="self-start text-sm text-slate-200">Password</label>
        <Input id="password" type="password" placeholder="Password" className="w-full p-3 bg-slate-700 text-slate-100 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={() => handleConnect(username, password)}>Login</Button>
        <span>No account? Create one right now!</span>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Signup</Button>
      </section>
      <section className="h-full p-2 flex flex-grow items-center justify-center">
        <Image src="/logo_enlarged.png" width={700} height={700} alt="Quest & Loot logo" />
      </section>
    </div>
  );
}