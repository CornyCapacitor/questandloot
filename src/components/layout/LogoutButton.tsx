import { useSocket } from '@/app/middleware/SocketContext'
import { useRouter } from 'next/navigation'
import GameButton from './GameButton'

const LogoutButton = () => {
  const { disconnectSocket } = useSocket()
  const router = useRouter()

  const handleLogout = () => {
    disconnectSocket()
    router.push('/')
  }

  return (
    <GameButton onClick={() => handleLogout()} className="py-4 w-[80%]">Logout</GameButton>
  )
}

export default LogoutButton
