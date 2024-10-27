import Link from "next/link"
import { Button } from "../ui/button"

const Sidebar = () => {
  return (
    <aside className="w-full max-w-[300px] h-full flex flex-col gap-4 px-2 py-4 items-center border-r bg-slate-800 border-slate-700">
      <Link href="/game/character" className="w-full h-16">
        <Button className="w-full h-16">Character</Button>
      </Link>
      <Link href="/game/journey" className="w-full h-16">
        <Button className="w-full h-16">Journey</Button>
      </Link>
      <Button className="w-full h-16">Marketplace</Button>
      <Button className="w-full h-16">Crafting</Button>
      <Button className="w-full h-16">Dungeon</Button>
    </aside>
  )
}

export default Sidebar
