import { playerAtom } from '@/app/state/atoms'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import GameButton from './GameButton'

const LogoutButton = () => {
  const [, setPlayer] = useAtom(playerAtom)

  const router = useRouter()

  const handleLogout = () => {
    setPlayer(null)
    router.push('/')
  }

  return (
    <GameButton onClick={() => handleLogout()} className="py-4 w-[80%]">Logout</GameButton>
  )
}

export default LogoutButton
