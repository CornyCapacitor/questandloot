'use client'

import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import IconSpinner from "@/components/layout/IconSpinner"
import { useAtom } from "jotai"
import { CharacterEquipmentSection, CharacterTabs } from "./characterComponents"

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
      <CharacterEquipmentSection className="h-full flex flex-col flex-shrink-0 border-r border-slate-700" />
      <CharacterTabs />
    </div>
  )
}


export default CharacterPage
