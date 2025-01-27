'use client'

import { playerAtom } from "@/app/state/atoms"
import ExperienceIcon from "@/components/layout/ExperienceIcon"
import GameButton from "@/components/layout/GameButton"
import GoldIcon from "@/components/layout/GoldIcon"
import { successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"

const DungeonPage = () => {
  const [player] = useAtom(playerAtom)
  const dungeons: { name: string, image: string }[] = [
    {
      name: 'Toxic sewers',
      image: 'dungeon.png'
    },
    {
      name: 'Frozen something',
      image: 'dungeon2.png'
    },
    {
      name: 'Volcano',
      image: 'dungeon3.png'
    },
    {
      name: 'Spider cave',
      image: 'dungeon4.png'
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

export const DungeonCard = ({ dungeon }: { dungeon: { name: string, image: string } }) => {
  const startDungeon = (dungeonName: string) => {
    successToast({ text: `Dungeon ${dungeonName} should start now!` })
  }

  return (
    <div
      className="p-2 flex flex-col w-[350px] h-[350px] bg-slate-800 gap-2 items-center justify-between rounded-sm relative overflow-hidden"
      style={{
        backgroundImage: `url(/assets/dungeons/${dungeon.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <h1 className="font-semibold text-orange-400 z-10">{dungeon.name}</h1>
      <div className="flex flex-col gap-1 w-[50%] z-10">
        <GameButton onClick={() => startDungeon(dungeon.name)}>
          Start dungeon <GoldIcon /> <ExperienceIcon />
        </GameButton>
      </div>
    </div>
  )
}

export default DungeonPage