import IconSpinner from '@/components/layout/IconSpinner'
import { Button } from '@/components/ui/button'
import { useAtom } from 'jotai'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { playerAtom } from './state/atoms'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const [player] = useAtom(playerAtom)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    if (player) {
      if (timeout) {
        clearTimeout(timeout)
      }
      return
    } else {
      timeout = setTimeout(() => {
        setShowMessage(true)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [player])

  if (!player) {
    return (
      <div className="w-full h-full flex gap-2 flex-col items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
        {showMessage &&
          <div className="flex flex-col gap-2 mt-10 items-center justify-center message-slow-appear">
            <h1>No user found, please log in</h1>
            <Link href="/">
              <Button>Login page</Button>
            </Link>
          </div>
        }
      </div>
    )
  }

  return <>{children}</>
}

export default RequireAuth
