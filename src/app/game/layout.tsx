'use client'

// import Navbar from "@/components/layout/Navbar";
import Navigation from "@/components/layout/Navigation";
import RequireAuth from "../middleware/RequireAuth";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RequireAuth>
      <div className="w-full h-screen overflow-x-hidden">
        <div className="flex h-full flex-col xl:flex-row">
          <Navigation />
          <main className="flex flex-grow">
            {children}
          </main>
        </div>
      </div>
    </RequireAuth>
  )
}

export default GameLayout
