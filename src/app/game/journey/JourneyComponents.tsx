import { config } from "@/app/config"
import ExperienceIcon from "@/components/layout/ExperienceIcon"
import GameButton from "@/components/layout/GameButton"
import GoldIcon from "@/components/layout/GoldIcon"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { useState } from "react"

type Journey = {
  name: string,
  image: string
}

export const JourneyCard = ({ journey, startJourney }: { journey: Journey, startJourney: (journeyName: string, time: number) => void }) => {
  const [time, setTime] = useState('30')
  const [availableTimeOptions] = useState(config.availableTimeOptions)

  return (
    <div key={journey.name} className="flex flex-col w-[350px] h-[350px] bg-slate-800 gap-2 items-center justify-center rounded-sm">
      <h1 className="font-semibold text-orange-400">{journey.name}</h1>
      <Image width={200} height={200} alt="Journey image" src={`/assets/journeys/${journey.image}`} className="rounded-md" />
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
        <GameButton onClick={() => startJourney(journey.name, Number(time))}>Start journey <GoldIcon /><ExperienceIcon /></GameButton>
      </div>
    </div>
  )
}