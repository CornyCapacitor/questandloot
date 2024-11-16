import { useSocket } from '@/app/middleware/SocketContext'
import { useRouter } from 'next/navigation'
import { pendingToast } from '../ui/toasts'
import GameButton from './GameButton'

const LogoutButton = () => {
  const { disconnectSocket } = useSocket()
  const router = useRouter()

  const handleLogout = () => {
    pendingToast({ text: 'Logging out...', position: 'top' })
    disconnectSocket()
    router.push('/')
  }

  return (
    <GameButton onClick={() => handleLogout()} className="py-4 w-[80%]">Logout</GameButton>
  )
}

export default LogoutButton
