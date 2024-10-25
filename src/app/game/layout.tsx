'use client'

import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import Link from "next/link"
import { playerAtom } from "../state/atoms"

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  const [player] = useAtom(playerAtom)

  if (!player) {
    return (
      <div className="w-full h-full flex gap-2 flex-col items-center justify-center">
        <h1>No user found, please log in</h1>
        <Link href="/">
          <Button>Login page</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <main className="flex flex-grow">
          {children}
        </main>
      </div>
    </div>
  )
}

export default GameLayout
