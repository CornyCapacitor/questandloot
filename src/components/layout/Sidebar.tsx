'use state'

import { playerAtom } from "@/app/state/atoms"
import { useAtom } from "jotai"
import Image from "next/image"
import GameButton from "./GameButton"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <aside className="w-full max-w-[300px] h-full flex flex-col gap-4 px-2 py-4 items-center justify-between border-r bg-slate-800 border-slate-700">
      <div className=" flex flex-col gap-4 w-[90%]">
        <h1 className="flex gap-1 justify-center">Gold: {player.gold} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        <GameButton path="/game/character" className="py-4">Character</GameButton>
        <GameButton path="/game/journey" className="py-4">Journey</GameButton>
        <GameButton path="/game/shop" className="py-4">Merchants</GameButton>
        <GameButton path="/game/crafting" className="py-4">Crafting</GameButton>
        <GameButton path="/game/dungeon" className="py-4">Dungeon</GameButton>
      </div>
      <LogoutButton />
    </aside>
  )
}

export default Sidebar
