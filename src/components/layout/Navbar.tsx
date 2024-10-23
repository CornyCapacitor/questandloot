import Link from "next/link"
import { Button } from "../ui/button"
import { Logo } from "./Logo"

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-2 items-center justify-center border-b bg-slate-800 border-slate-700">
      <section className="flex flex-1 justify-end">
        <Button>Example button</Button>
      </section>
      <section className="flex justify-center">
        <Link href="/game">
          <Logo size={128} />
        </Link>
      </section>
      <section className="flex flex-1 gap-5 justify-start">
        <Button>Example button</Button>
        <Link href="/">
          <Button>Logout</Button>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar
