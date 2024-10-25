import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'
import Link from 'next/link'
import React from 'react'
import { playerAtom } from './state/atoms'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
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

  return <>{children}</>
}

export default RequireAuth
