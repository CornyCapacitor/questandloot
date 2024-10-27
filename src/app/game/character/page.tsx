'use client'

import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import IconSpinner from "@/components/layout/IconSpinner"
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
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-col gap-2">
        <h1>Gold: {player.gold}</h1>
        <h1>Items:</h1>
        {player.items &&
          <div>
            {player.items.map((item) => (
              <div key={item.item.id} className="flex flex-col">
                <span>Name: {item.item.name}</span>
                <span>Quantity: {item.quantity}</span>
              </div>
            ))}
          </div>
        }
        <h1>Materials:</h1>
        {player.materials &&
          <div>
            {player.materials.map((material) => (
              <div key={material.material.id} className="flex flex-col">
                <span>Name: {material.material.name}</span>
                <span>Quantity: {material.quantity}</span>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default CharacterPage
