import { config } from "@/app/config"
import { Zone } from "@/app/types"
import { useState } from "react"
import ExperienceIcon from "../ui/ExperienceIcon"
import GameButton from "../ui/GameButton"
import GoldIcon from "../ui/GoldIcon"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const JourneyCard = ({ zone, startJourney }: { zone: Zone, startJourney: (zone: Zone, time: number) => void }) => {
  const [time, setTime] = useState('30')
  const [availableTimeOptions] = useState(config.availableTimeOptions.options)

  return (
    <div
      key={zone.name}
      className="p-2 flex flex-col w-[350px] h-[350px] bg-slate-800 gap-2 items-center justify-between rounded-sm relative overflow-hidden"
      style={{
        backgroundImage: `url(/assets/journeys/${zone.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      <h1 className="font-semibold text-orange-400 z-10">{zone.name}</h1>
      <div className="flex flex-col gap-1 w-[50%] z-10">
        <Select onValueChange={(value) => setTime(value)}>
          <SelectTrigger className="w-full focus:outline-none focus:ring-2 focus:ring-orange-400 hover:bg-gray-700 transition">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {availableTimeOptions.map((option) => (
              <SelectItem
                className="transition"
                key={option}
                value={option}
              >{`${Number(option) / 60}h`}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <GameButton onClick={() => startJourney(zone, Number(time))}>
          Start journey <GoldIcon />
          <ExperienceIcon />
        </GameButton>
      </div>
    </div>
  )
}