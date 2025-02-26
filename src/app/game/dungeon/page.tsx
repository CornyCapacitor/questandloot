'use client'

import { playerAtom } from "@/app/state/atoms"
import { DungeonKey } from "@/app/types"
import { DungeonCard } from "@/components/dungeon/DungeonCard"
import { useAtom } from "jotai"

const DungeonPage = () => {
  const [player] = useAtom(playerAtom)
  const dungeons: { name: string, image: string, difficulty: DungeonKey }[] = [
    {
      name: 'Toxic sewers',
      image: 'dungeon.png',
      difficulty: 'dungeon1'
    },
    {
      name: 'Frozen something',
      image: 'dungeon2.png',
      difficulty: 'dungeon2'
    },
    {
      name: 'Volcano',
      image: 'dungeon3.png',
      difficulty: 'dungeon3'
    },
    {
      name: 'Spider cave',
      image: 'dungeon4.png',
      difficulty: 'dungeon4'
    },
    // {
    //   name: 'dungeon5',
    //   image: 'dungeon.png'
    // },
    // {
    //   name: 'dungeon6',
    //   image: 'dungeon.png'
    // },
    // {
    //   name: 'dungeon7',
    //   image: 'dungeon.png'
    // },
    // {
    //   name: 'dungeon8',
    //   image: 'dungeon.png'
    // },
    // {
    //   name: 'dungeon9',
    //   image: 'dungeon.png'
    // },
    // {
    //   name: 'dungeon10',
    //   image: 'dungeon.png'
    // },
  ]

  if (player && !player.activeJourney) return (
    <div className="w-full h-full flex flex-wrap justify-center content-start p-2 gap-2 overflow-y-auto">
      {dungeons.map((dungeon, index) => (
        <DungeonCard key={index} dungeon={dungeon} />
      ))}
    </div>
  )

  return (
    <div className="w-full h-full flex flex-col flex-wrap justify-center items-center p-2 gap-2 overflow-y-auto">
      <h1>You are already on a journey. Come back whenever you return.</h1>
    </div>
  )
}

export default DungeonPage