import Link from "next/link"
import { Button } from "../ui/button"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[300px] h-full flex flex-col gap-4 px-2 py-4 items-center border-r bg-slate-800 border-slate-700">
      <Link href="/game/character" className="w-full h-16">
        <Button className="w-full h-16">Character</Button>
      </Link>
      <Link href="/game/journey" className="w-full h-16">
        <Button className="w-full h-16">Journey</Button>
      </Link>
      <Link href="/game/shop" className="w-full h-16">
        <Button className="w-full h-16">Merchants</Button>
      </Link>
      <Button className="w-full h-16">Crafting</Button>
      <Button className="w-full h-16">Dungeon</Button>
      <LogoutButton />
    </aside>
  )
}

export default Sidebar
