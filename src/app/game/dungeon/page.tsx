'use client'

import { config } from "@/app/config"
import { formatTime } from "@/app/functions/time"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { CompletedBossesKey, DungeonKey } from "@/app/types"
import ExperienceIcon from "@/components/layout/ExperienceIcon"
import GameButton from "@/components/layout/GameButton"
import GoldIcon from "@/components/layout/GoldIcon"
import { questionAlert } from "@/components/ui/alerts"
import { errorToast, successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

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

export const DungeonCard = ({ dungeon }: { dungeon: { name: string, image: string, difficulty: DungeonKey } }) => {
  const [player] = useAtom(playerAtom)
  const [currentDungeonProgress, setCurrentDungeonProgress] = useState<CompletedBossesKey>(0)
  const { updatePlayer } = useSocket()
  const [refreshTime, setRefreshTime] = useState<number>(0)
  // Doing this instead of just extracting index from dungeon cards mapping to ensure it has proper index
  const dungeonIndex = Number(dungeon.difficulty.replace("dungeon", ""))

  useEffect(() => {
    if (!player) return
    setCurrentDungeonProgress(player.dungeon.dungeonProgress[dungeon.difficulty])

    const timer: NodeJS.Timeout | null = null

    if (player.dungeon.refreshDate) {
      const endTime = new Date(player.dungeon.refreshDate).getTime()
      const interval = setInterval(() => {
        const currentTime = Date.now()
        const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000))

        if (timeLeft === 0) {
          clearInterval(interval)
          setRefreshTime(0)
          // Testing alert
          successToast({ text: 'Dungeon ready!' })
        } else {
          setRefreshTime(timeLeft)
        }
      }, 1000)

      return () => clearInterval(interval)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [player])

  const startDungeon = (bossLevel: number) => {
    if (!player) return

    successToast({ text: `Fight with ${bossLevel} boss should start now!` })

    updatePlayer({
      ...player,
      dungeon: {
        dungeonProgress: {
          ...player.dungeon.dungeonProgress,
          [dungeon.difficulty]: currentDungeonProgress + 1
        },
        refreshDate: new Date(Date.now() + 1000 * 20) // 20 seconds
      }
    })
  }

  const handleStartDungeon = (dungeonName: string) => {
    if (!player || currentDungeonProgress === 10) return

    const currentDungeonBossLevel = (config.dungeon.baseLevelMultiplier * dungeonIndex) + (currentDungeonProgress === 7 ? config.dungeon.bossLevel.thirdFromEnd : currentDungeonProgress === 8 ? config.dungeon.bossLevel.secondFromEnd : currentDungeonProgress === 9 ? config.dungeon.bossLevel.last : currentDungeonProgress)


    if (refreshTime) {
      errorToast({ text: `You need some rest before entering again. You will be ready in ${formatTime(refreshTime).uniText}` })
    } else {
      questionAlert({
        text: `Are you sure you want to start a fight with next ${dungeonName} boss? Current boss level: ${currentDungeonBossLevel}`,
        confirmFunction: () => {
          startDungeon(currentDungeonBossLevel)
        },
        cancelFunction: () => {
          return
        }
      })
    }
  }

  return (
    <div
      className={`p-2 flex flex-col w-[350px] h-[350px] bg-slate-800 gap-2 items-center justify-between rounded-sm relative overflow-hidden ${currentDungeonProgress === 10 ? 'grayscale' : ''}`}
      style={{
        backgroundImage: `url(/assets/dungeons/${dungeon.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <h1 className="font-semibold text-orange-400 z-10">{dungeon.name}</h1>
      <div className="flex flex-col gap-1 w-[50%] z-10">
        <GameButton onClick={() => handleStartDungeon(dungeon.name)} disabled={currentDungeonProgress === 10}>
          Start dungeon <GoldIcon /> <ExperienceIcon />
        </GameButton>
      </div>
    </div>
  )
}

export default DungeonPage