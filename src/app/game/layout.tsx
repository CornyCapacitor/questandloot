'use client'

import Navbar from "@/components/layout/Navbar"
import Sidebar from "@/components/layout/Sidebar"

const GameLayout = ({ children }: { children: React.ReactNode }) => {
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
