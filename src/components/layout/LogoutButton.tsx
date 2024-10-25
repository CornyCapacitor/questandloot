import { playerAtom } from '@/app/state/atoms'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const LogoutButton = () => {
  const [, setPlayer] = useAtom(playerAtom)

  const router = useRouter()

  const handleLogout = () => {
    setPlayer(null)
    router.push('/')
  }

  return (
    <Button className="w-48 h-16" onClick={handleLogout}>Logout</Button>
  )
}

export default LogoutButton
