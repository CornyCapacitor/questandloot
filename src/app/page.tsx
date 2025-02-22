'use client'

import { Tailspin } from "@/components/ui/Tailspin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { errorToast, pendingToast, successToast } from "@/components/ui/toasts";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import validator from 'validator';
import { useSocket } from "./middleware/SocketContext";
import { playerAtom } from "./state/atoms";
import { Profession } from "./types";

export default function Home() {
  const [player] = useAtom(playerAtom)
  const { socket, connectSocket } = useSocket()
  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_REST

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [characterName, setCharacterName] = useState('')
  const [profession, setProfession] = useState<Profession | null>(null)
  const [signup, setSignup] = useState(false)
  const [loading, setLoading] = useState(false)

  const availableProfessions: Profession[] = ['warrior', 'hunter', 'mage']

  const router = useRouter()

  const handleLogin = async (username: string, password: string) => {
    setLoading(true)

    pendingToast({ text: 'Logging in...', position: 'top' })

    const errTopToast = (text: string) => {
      errorToast({ text: text, position: 'top' })
      setLoading(false)
    }

    if (!username) {
      errTopToast('Username is required')
      return
    }

    if (!password) {
      errTopToast('Password is required')
      return
    }

    try {
      const response = await fetch(`${SERVER_URI}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        errTopToast(data.error)
        return
      }

      const data = await response.json();
      const token = data.token;

      if (token && !socket) connectSocket(token)
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

  const handleSignup = async (username: string, password: string, passwordRepeat: string, characterName: string, profession: Profession | null) => {
    setLoading(true)

    pendingToast({ text: 'Creating new account...', position: 'top' })

    const errTopToast = (text: string) => {
      errorToast({ text: text, position: 'top' })
      setLoading(false)
    }

    const validateCharacterName = (name: string) => {
      const pattern = /^[A-Z][a-z]{3,15}$/
      return pattern.test(name)
    }

    if (username.length < 4 || username.length > 32) {
      errTopToast('Username must be within 4-32 characters')
      return
    }

    if (password !== passwordRepeat) {
      errTopToast('Passwords do not match')
      return
    }

    if (!validator.isStrongPassword(password)) {
      errTopToast('Password is not strong enough')
      return
    }

    if (!validateCharacterName(characterName)) {
      errTopToast('Character name must be within 4-16 letter-characters and start with uppercase letter')
      return
    }

    if (!profession) {
      errTopToast('You must pick a profession')
      return
    }

    try {
      const response = await fetch(`${SERVER_URI}/api/signup/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, name: characterName, profession }),
      });

      if (!response.ok) {
        const data = await response.json()
        errTopToast(data.error)
        return
      }

      const data = await response.json();
      const token = data.token;

      if (token) {
        connectSocket(token)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log(error)
      errorToast({ text: 'Failed to create an account', position: 'top' })
      setLoading(false)
      return null;
    }
  }

  const handleChange = () => {
    setUsername('')
    setPassword('')
    setPasswordRepeat('')
    setCharacterName('')
    setSignup(!signup)
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
      <section className="h-full w-full p-10 lg:max-w-[600px] flex flex-col gap-2 items-center justify-center border-r bg-slate-800 border-slate-700">
        {/* Tu trzeba ponaprawiać dużo, bo brzydko się skaluje to wszystko */}
        {signup ? (
          <>
            <h2 className="w-full">Username and character name are different properties. You will use your username only to log into the game.</h2>
            <label htmlFor="username" className="self-start text-sm text-slate-200">Username</label>
            <Input id="username" autoFocus placeholder="Username" className="w-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={username} disabled={loading} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password" className="self-start text-sm text-slate-200">Password</label>
            <Input id="password" type="password" placeholder="Password" className="-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={password} disabled={loading} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="passwordRepeat" className="self-start text-sm text-slate-200">Repeat password</label>
            <Input id="passwordRepeat" type="password" placeholder="Repeat password" className="-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={passwordRepeat} disabled={loading} onChange={(e) => setPasswordRepeat(e.target.value)} />
            <label htmlFor="characterName" className="self-start text-sm text-slate-200">Character name</label>
            <Input id="characterName" placeholder="Character name" className="-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={characterName} disabled={loading} onChange={(e) => setCharacterName(e.target.value)} />
            <label htmlFor="profession" className="self-start text-sm text-slate-200">Profession</label>
            <Select disabled={loading} onValueChange={(value) => setProfession(value as Profession)}>
              <SelectTrigger className="w-full border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700 transition" >
                <SelectValue placeholder="Select profession" />
              </SelectTrigger>
              <SelectContent>
                {availableProfessions.map((option) => (
                  <SelectItem className="transition" key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" disabled={loading} onClick={() => handleSignup(username, password, passwordRepeat, characterName, profession)}>{loading ? (<Tailspin size={30} />) : 'Signup'}</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" disabled={loading} onClick={() => handleChange()}>{loading ? (<Tailspin size={30} />) : 'Back to login'}</Button>
          </>
        ) : (
          <>
            <h1>Welcome to Quest & Loot!</h1>
            <h2 className="w-full">In order to access the game you need to be logged in. (login and password are credentials)</h2>
            <label htmlFor="username" className="self-start text-sm text-slate-200">Username</label>
            <Input id="username" autoFocus placeholder="Username" className="-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={username} disabled={loading} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password" className="self-start text-sm text-slate-200">Password</label>
            <Input id="password" type="password" placeholder="Password" className="-full border border-slate-600 rounded-md hover:bg-gray-700 transition focus-visible:ring-blue-500" value={password} disabled={loading} onChange={(e) => setPassword(e.target.value)} />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" disabled={loading} onClick={() => handleConnect(username, password)}>{loading ? (<Tailspin size={30} />) : 'Login'}</Button>
            <span>No account? Create one right now!</span>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full" disabled={loading} onClick={() => handleChange()}>{loading ? (<Tailspin size={30} />) : 'Signup'}</Button>
          </>
        )
        }
      </section >
      <section className="h-full p-2 flex-grow items-center justify-center relative hidden lg:flex">
        <Image src="/logo_enlarged.png" fill className="object-contain" alt="Game logo" unoptimized />
      </section>
    </div >
  );
}