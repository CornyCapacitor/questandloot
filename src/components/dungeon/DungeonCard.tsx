import { formatTime } from "@/app/functions/time"
import { calculateDungeonMonsterLevel } from "@/app/generators/generateMonster"
import { useSocket } from "@/app/middleware/SocketContext"
import { combatTypeAtom, playerAtom } from "@/app/state/atoms"
import { CompletedBossesKey, DungeonKey } from "@/app/types"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { questionAlert } from "../ui/alerts"
import ExperienceIcon from "../ui/ExperienceIcon"
import GameButton from "../ui/GameButton"
import GoldIcon from "../ui/GoldIcon"
import { errorToast, pendingToast, successToast } from "../ui/toasts"

export const DungeonCard = ({ dungeon }: { dungeon: { name: string, image: string, difficulty: DungeonKey } }) => {
  const [player, setPlayer] = useAtom(playerAtom)
  const [combatType, setCombatType] = useAtom(combatTypeAtom)
  const [currentDungeonProgress, setCurrentDungeonProgress] = useState<CompletedBossesKey>(0)
  const { updatePlayer } = useSocket()
  const [refreshTime, setRefreshTime] = useState<number>(0)
  const [isDungeonReady, setIsDungeonReady] = useState(false)
  const router = useRouter()

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
          setIsDungeonReady(true)
          updatePlayer({
            ...player,
            dungeon: {
              dungeonProgress: player.dungeon.dungeonProgress,
              refreshDate: null
            }
          })
          // Testing alert
          successToast({ text: 'Dungeon ready!' })
        } else {
          setRefreshTime(timeLeft)
        }
      }, 1000)

      return () => clearInterval(interval)
    } else {
      setIsDungeonReady(true)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player])

  const startDungeon = (bossLevel: number) => {
    if (!player || combatType) return

    successToast({ text: `Fight with ${bossLevel} boss should start soon!` })

    setIsDungeonReady(false)
    setCombatType(dungeon.difficulty)
    pendingToast({ text: 'Starting combat...' })
    router.push('/game/dungeon/combat')
  }

  const handleStartDungeon = (dungeonName: string) => {
    if (!player || currentDungeonProgress === 10) return

    const currentDungeonBossLevel = calculateDungeonMonsterLevel(player, dungeon.difficulty)

    if (!isDungeonReady) {
      errorToast({ text: `You need some rest before entering again. You will be ready in ${formatTime(refreshTime).uniText}` })
    } else {
      questionAlert({
        text: `Are you sure you want to start a fight with next ${dungeonName} boss? Current boss level: ${currentDungeonBossLevel}`,
        confirmFunction: () => {
          const date = new Date(Date.now() + 1000 * 60 * 60) // date now + 60 minutes
          updatePlayer({
            ...player,
            dungeon: {
              dungeonProgress: player.dungeon.dungeonProgress,
              refreshDate: date
            }
          })
          setPlayer({
            ...player,
            dungeon: {
              dungeonProgress: player.dungeon.dungeonProgress,
              refreshDate: date
            }
          })
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