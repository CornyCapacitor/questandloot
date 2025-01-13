'use client'

import { portraits } from "@/app/db/availablePortraits"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { useAtom } from "jotai"
import Image from "next/image"

const PortraitPage = () => {
  const [player] = useAtom(playerAtom)
  const { updatePlayer } = useSocket()

  const handleChangePortrait = (race: string, portrait: string) => {
    if (!player) return
    const finalPath = `${race}/${portrait}`

    updatePlayer({
      ...player,
      image: finalPath
    })
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-2 gap-4 overflow-y-auto">
      {Object.entries(portraits).map(([race, portraits]) => (
        <div key={race} className="w-full">
          <h1 className="font-semibold text-white">{race}</h1>
          <div className="flex content-start flex-wrap gap-4 p-2">
            {portraits.map((portrait) => (
              <Image
                key={portrait.name}
                src={`/assets/portraits/${portrait.race}/${portrait.path}`}
                alt={portrait.name}
                width={250}
                height={250}
                className="pixel-art border rounded-sm hover:bg-slate-700 hover:ring hover:ring-orange-500 transition cursor-pointer"
                onClick={() => handleChangePortrait(race, portrait.path)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortraitPage
