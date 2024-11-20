'use state'

import { playerAtom } from "@/app/state/atoms"
import { useAtom } from "jotai"
import Image from "next/image"
import Link from "next/link"
import GameButton from "./GameButton"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <aside className="w-full max-w-[300px] h-full flex flex-col gap-4 px-2 py-4 items-center justify-between border-r bg-slate-800 border-slate-700">
      <div className=" flex flex-col gap-4 w-[90%]">
        <h1 className="flex gap-1 justify-center">Gold: {player.gold} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        <GameButton path="/game/character" className="flex items-center justify-between px-8 py-2">Character <Image src={`/assets/portraits/${player.image}`} height={40} width={40} alt="character icon" /></GameButton>
        <GameButton path="/game/journey" className="flex items-center justify-between px-8 py-2">Journey <Image src="/assets/sidebar/journey.svg" height={40} width={40} alt="journey icon" /></GameButton>
        <GameButton path="/game/shop" className="flex items-center justify-between px-8 py-2">Merchants <Image src="/assets/sidebar/merchants.svg" height={40} width={40} alt="merchants icon" /></GameButton>
        <GameButton path="/game/crafting" className="flex items-center justify-between px-8 py-2">Crafting <Image src="/assets/sidebar/crafting.svg" height={40} width={40} alt="character icon" /></GameButton>
        <GameButton path="/game/dungeon" className="flex items-center justify-between px-8 py-2">Dungeon <Image src="/assets/sidebar/dungeon.svg" height={40} width={40} alt="character icon" /></GameButton>
      </div>
      <div className=" flex gap-4 w-[90%]">
        <Link href="/game/settings" className="bg-black rounded-md hover:bg-gray-700 cursor-pointer w-full flex items-center justify-center py-2">
          <Image src="/assets/sidebar/settings.svg" width={40} height={40} alt="settings button" />
        </Link>
        <LogoutButton className="py-2" />
      </div>
    </aside>
  )
}

export default Sidebar
