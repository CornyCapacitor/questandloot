import { useSocket } from '@/app/middleware/SocketContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { pendingToast } from '../ui/toasts'

const LogoutButton = ({ className }: { className?: string }) => {
  const { disconnectSocket } = useSocket()
  const router = useRouter()

  const handleLogout = () => {
    pendingToast({ text: 'Logging out...', position: 'top' })
    disconnectSocket()
    router.push('/')
  }

  return (
    <button className={`${className} bg-black rounded-md hover:bg-gray-700 cursor-pointer w-full flex items-center justify-center`}>
      <Image src="/assets/sidebar/logout.svg" width={40} height={40} alt="logout button" onClick={() => handleLogout()} />
    </button>
  )
}

export default LogoutButton
