'use state'

import { playerAtom } from "@/app/state/atoms"
import { useAtom } from "jotai"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <aside className="w-full max-w-[300px] h-full flex flex-col gap-4 px-2 py-4 items-center border-r bg-slate-800 border-slate-700">
      <h1 className="flex gap-1 justify-center">Gold: {player.gold} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
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
