'use state'

import { playerAtom } from "@/app/state/atoms"
import { useAtom } from "jotai"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Drawer } from "vaul"
import GameButton from "../ui/GameButton"
import LogoutButton from "./LogoutButton"

const Navigation = () => {
  const [player] = useAtom(playerAtom)
  const [open, setOpen] = useState(false)

  if (player) return (
    <>
      <aside className="w-full lg:max-w-[300px] h-full hidden xl:flex flex-col gap-4 px-2 py-4 items-center justify-between border-r bg-slate-800 border-slate-700 overflow-y-auto">
        <div className="flex flex-col gap-4 w-[90%]">
          <h1 className="flex gap-1 justify-center">Gold: {player.gold} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
          <GameButton path="/game/character" className="flex items-center justify-between px-8 py-2">Character <Image src={`/assets/portraits/${player.image}`} height={40} width={40} alt="character icon" /></GameButton>
          <GameButton path="/game/journey" className="flex items-center justify-between px-8 py-2">Journey <Image src="/assets/sidebar/journey.png" height={40} width={40} alt="journey icon" /></GameButton>
          <GameButton path="/game/shop" className="flex items-center justify-between px-8 py-2">Merchants <Image src="/assets/sidebar/merchants.png" height={40} width={40} alt="merchants icon" /></GameButton>
          <GameButton path="/game/crafting" className="flex items-center justify-between px-8 py-2">Crafting <Image src="/assets/sidebar/crafting.png" height={40} width={40} alt="crafting icon" /></GameButton>
          <GameButton path="/game/dungeon" className="flex items-center justify-between px-8 py-2">Dungeon <Image src="/assets/sidebar/dungeon.png" height={40} width={40} alt="dungeon icon" /></GameButton>
          <GameButton path="/game/leaderboards" className="flex items-center justify-between px-8 py-2">Leaderboards <Image src="/assets/sidebar/leaderboards.png" height={40} width={40} alt="leaderboards icon" /></GameButton>
        </div>
        <div className=" flex gap-4 w-[90%]">
          <Link href="/game/settings" className="bg-black rounded-md hover:bg-gray-700 cursor-pointer w-full flex items-center justify-center py-2">
            <Image src="/assets/sidebar/settings.svg" width={40} height={40} alt="settings button" />
          </Link>
          <LogoutButton className="py-2" />
        </div>
      </aside>
      <nav className="xl:hidden flex w-full bg-slate-800 border-slate-700 py-2 px-2 justify-end">
        <div className="flex w-full justify-between">
          <h1 className="flex gap-1 justify-center items-center">Gold: {player.gold} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
          <Image src="/hamburger.svg" width="50" height="50" alt="navigation button" onClick={() => setOpen(true)} className="cursor-pointer" />
        </div>
        <Drawer.Root open={open} onOpenChange={setOpen} direction="right">
          <Drawer.Overlay className="fixed inset-0 bg-black/75 z-[1000]" />
          <Drawer.Portal>
            <Drawer.Content className="fixed right-0 top-0 h-full w-[350px] bg-slate-800 border-slate-700 shadow-lg transition-transform duration-300 ease-in-out z-[1001]">
              <div className="flex h-full flex-col w-full px-2 py-4 items-center justify-between border-l gap-4">
                <div className="flex flex-col gap-4 w-full">
                  <GameButton path="/game/character" className="flex items-center justify-between px-8 py-2">Character <Image src={`/assets/portraits/${player.image}`} height={40} width={40} alt="character icon" /></GameButton>
                  <GameButton path="/game/journey" className="flex items-center justify-between px-8 py-2">Journey <Image src="/assets/sidebar/journey.png" height={40} width={40} alt="journey icon" /></GameButton>
                  <GameButton path="/game/shop" className="flex items-center justify-between px-8 py-2">Merchants <Image src="/assets/sidebar/merchants.png" height={40} width={40} alt="merchants icon" /></GameButton>
                  <GameButton path="/game/crafting" className="flex items-center justify-between px-8 py-2">Crafting <Image src="/assets/sidebar/crafting.png" height={40} width={40} alt="crafting icon" /></GameButton>
                  <GameButton path="/game/dungeon" className="flex items-center justify-between px-8 py-2">Dungeon <Image src="/assets/sidebar/dungeon.png" height={40} width={40} alt="dungeon icon" /></GameButton>
                  <GameButton path="/game/leaderboards" className="flex items-center justify-between px-8 py-2">Leaderboards <Image src="/assets/sidebar/leaderboards.png" height={40} width={40} alt="leaderboards icon" /></GameButton>
                </div>
                <div className=" flex gap-4 w-full">
                  <Link href="/game/settings" className="bg-black rounded-md hover:bg-gray-700 cursor-pointer w-full flex items-center justify-center py-2">
                    <Image src="/assets/sidebar/settings.svg" width={40} height={40} alt="settings button" />
                  </Link>
                  <LogoutButton className="py-2" />
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </nav>
    </>
  )
}

export default Navigation
