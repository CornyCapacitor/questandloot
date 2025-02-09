import { formatTime } from "@/app/functions/time"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import GameButton from "@/components/ui/GameButton"
import { questionAlert } from "@/components/ui/alerts"
import { Progress } from "@/components/ui/progress"
import { successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

export const JourneyDisplay = ({ remainingTime }: { remainingTime: number | null }) => {
  const [timePercentage, setTimePercentage] = useState(100)
  const [player] = useAtom(playerAtom)
  const { updatePlayer } = useSocket()

  const handleCancelJourney = () => {
    if (!player || !player.activeJourney) return

    questionAlert({
      text: 'Are you sure you want to cancel this journey progress?',
      confirmFunction: async () => {
        updatePlayer({
          ...player,
          activeJourney: null
        })
        return
      },
      cancelFunction: () => {
        return
      }
    })
  }

  const handleSpeedupJourney = () => {
    if (!player || !player.activeJourney) return

    updatePlayer({
      ...player,
      activeJourney: {
        ...player.activeJourney,
        returnDate: new Date(Date.now() + 1000 * 3)
      }
    })
    successToast({ text: 'Journey sped up' })
  }

  useEffect(() => {
    if (!remainingTime || !player?.activeJourney) return
    const startDate = new Date(player.activeJourney.startDate).getTime() / 1000
    const endDate = new Date(player.activeJourney.returnDate).getTime() / 1000
    const totalDuration = endDate - startDate
    const newTimePercentage = (remainingTime / totalDuration) * 100
    setTimePercentage(newTimePercentage)
  }, [remainingTime, player])

  if (player && player.activeJourney) return (
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/assets/journeys/${player.activeJourney.zone.image})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <h1 className="z-10 text-white font-bold text-2xl">{player.activeJourney.zone.name}</h1>
      <div className="relative z-10 w-[80%] h-8 flex items-center">
        <Progress
          value={timePercentage}
          indicatorColor="bg-green-600"
          className="rounded-none h-full bg-slate-900"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
          {remainingTime !== null && <>{formatTime(remainingTime).uniText}</>}
        </span>
      </div>
      <GameButton
        className="bg-white w-32 text-black z-10"
        onClick={() => handleCancelJourney()}
      >
        Cancel journey
      </GameButton>
      <GameButton
        className="bg-white w-48 text-black z-10"
        onClick={() => handleSpeedupJourney()}
      >
        Speed up journey
      </GameButton>
    </div>
  )
}