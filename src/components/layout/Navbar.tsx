import Link from "next/link"
import { Button } from "../ui/button"
import AvatarFrame from "./AvatarFrame"
import { Logo } from "./Logo"

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-2 items-center justify-center border-b bg-slate-800 border-slate-700">
      <section className="flex flex-1 justify-between items-center">
        <Link href="/game/equipment" className="ml-5">
          <AvatarFrame size={65} image="/assets/portraits/skull.png" inverted={false} />
        </Link>
        <Button className="w-48 h-16">Example button</Button>
      </section>
      <section className="flex justify-center">
        <Link href="/game">
          <Logo size={128} />
        </Link>
      </section>
      <section className="flex flex-1 gap-5 justify-start items-center">
        <Button className="w-48 h-16">Example button</Button>
        <Link href="/">
          <Button className="w-48 h-16">Logout</Button>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar
