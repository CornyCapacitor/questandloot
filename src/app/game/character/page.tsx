'use client'

import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import { Overview } from "@/components/character/CharacterOverview/Overview"
import { Inventory } from "@/components/character/InventoryManagement/Inventory"
import IconSpinner from "@/components/ui/IconSpinner"
import { useAtom } from "jotai"

const CharacterPage = () => {
  const [player] = useAtom<Player | null>(playerAtom)

  if (!player) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
      </div>
    )
  }

  return (
    <div className="w-full h-full flex">
      <Overview player={player} />
      <Inventory player={player} />
    </div>
  )
}


export default CharacterPage
