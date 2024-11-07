import Link from "next/link"
import { Button } from "../ui/button"

const GameButton = ({ children, path, onClick, className }: { children: React.ReactNode, path?: string, onClick?: () => void, className?: string }) => {
  return path ? (
    <Link className={`flex text-white items-between justify-center w-full bg-black py-1 px-2 rounded-md hover:bg-gray-700 ${className}`} href={path} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <Button className={`flex text-white items-between justify-center w-full bg-black py-1 px-2 rounded-md hover:bg-gray-700 ${className}`} onClick={onClick}>
      {children}
    </Button>
  )
}

export default GameButton
