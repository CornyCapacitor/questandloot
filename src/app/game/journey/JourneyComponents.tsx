import { config } from "@/app/config"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { Location } from "@/app/types"
import ExperienceIcon from "@/components/layout/ExperienceIcon"
import GameButton from "@/components/layout/GameButton"
import GoldIcon from "@/components/layout/GoldIcon"
import { questionAlert } from "@/components/ui/alerts"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"

export const JourneyCard = ({ location, startJourney }: { location: Location, startJourney: (location: Location, time: number) => void }) => {
  const [time, setTime] = useState('30')
  const [availableTimeOptions] = useState(config.availableTimeOptions.options)

  return (
    <div key={location.name} className="p-2 flex flex-col w-[350px] h-[350px] bg-slate-800 gap-2 items-center justify-between rounded-sm">
      <h1 className="font-semibold text-orange-400">{location.name}</h1>
      <Image width={200} height={200} alt="Journey image" src={`/assets/journeys/${location.image}`} className="rounded-md" />
      <div className="flex flex-col gap-1 w-[50%]">
        <Select onValueChange={(value) => setTime(value)}>
          <SelectTrigger className="w-full focus:outline-none focus:ring-2 focus:ring-orange-400 hover:bg-gray-700 transition" >
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {availableTimeOptions.map((option) => (
              <SelectItem className="transition" key={option} value={option}>{`${Number(option) / 60}h`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <GameButton onClick={() => startJourney(location, Number(time))}>Start journey <GoldIcon /><ExperienceIcon /></GameButton>
      </div>
    </div>
  )
}

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
    <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
      <Image src={`/assets/journeys/${player.activeJourney.location.image}`} width={300} height={300} alt={player.activeJourney.location.name} />
      <h1>{player.activeJourney.location.name}</h1>
      <div className="relative w-[80%] h-8 flex items-center">
        <Progress
          value={timePercentage}
          indicatorColor="bg-green-600"
          className="rounded-none h-full bg-slate-900"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
          {remainingTime !== null && (
            <>Remaining time: {Math.floor(remainingTime / 60)}m {remainingTime % 60}s</>
          )}
        </span>
      </div>
      <GameButton className="bg-white w-32 text-black" onClick={() => handleCancelJourney()}>Cancel journey</GameButton>
      <GameButton className="bg-white w-48 text-black" onClick={() => handleSpeedupJourney()}>Speed up journey</GameButton>
    </div>
  )
}