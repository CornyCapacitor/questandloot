'use client'

import { config } from "@/app/config"
import { useSocket } from "@/app/middleware/SocketContext"
import { combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Journey, Location, Player } from "@/app/types"
import { pendingToast, successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { JourneyCard, JourneyDisplay } from "./JourneyComponents"

const JourneyPage = () => {
  const [player] = useAtom<Player | null>(playerAtom)
  const { updatePlayer } = useSocket()
  const [, setIsCombatReady] = useAtom(combatReadyAtom)
  const [remainingTime, setRemainingTime] = useState<number | null>(null)
  const locations: { name: string, image: string }[] = [
    {
      name: 'Dark Forest',
      image: 'dark_forest.png'
    },
    {
      name: 'Pirate cove',
      image: 'pirate_cove.png'
    },
    {
      name: 'Abandoned mines',
      image: 'abandoned_mines.png'
    },
    {
      name: 'Abandoned wizard tower',
      image: 'abandoned_wizard_tower.png'
    }
  ]

  const router = useRouter()

  useEffect(() => {
    if (!player) return

    const timer: NodeJS.Timeout | null = null;

    if (player.activeJourney && player.activeJourney.returnDate) {
      const endTime = new Date(player.activeJourney.returnDate).getTime();
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000));

        if (timeLeft === 0) {
          clearInterval(interval);
          setRemainingTime(null);
          setIsCombatReady(true)
          // Testing alert
          pendingToast({ text: 'Starting combat...' })
          router.push('/game/journey/combat')
        } else {
          setRemainingTime(timeLeft);
        }
      }, 1000);

      return () => clearInterval(interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    }
  }, [player, router, setIsCombatReady]);

  const startJourney = (location: Location, time: number) => {
    if (!player) return

    let valueMultiplier = config.availableTimeOptions.multipliers[0]

    switch (time) {
      case Number(config.availableTimeOptions.options[0]):
        valueMultiplier = config.availableTimeOptions.multipliers[0]
        break
      case Number(config.availableTimeOptions.options[1]):
        valueMultiplier = config.availableTimeOptions.multipliers[1]
        break
      case Number(config.availableTimeOptions.options[2]):
        valueMultiplier = config.availableTimeOptions.multipliers[2]
        break
      case Number(config.availableTimeOptions.options[3]):
        valueMultiplier = config.availableTimeOptions.multipliers[3]
        break
      case Number(config.availableTimeOptions.options[4]):
        valueMultiplier = config.availableTimeOptions.multipliers[4]
        break
      case Number(config.availableTimeOptions.options[5]):
        valueMultiplier = config.availableTimeOptions.multipliers[5]
        break
      case Number(config.availableTimeOptions.options[6]):
        valueMultiplier = config.availableTimeOptions.multipliers[6]
        break
      case Number(config.availableTimeOptions.options[7]):
        valueMultiplier = config.availableTimeOptions.multipliers[7]
        break
      default:
        valueMultiplier = config.availableTimeOptions.multipliers[0]
        break
    }

    const journey: Journey = {
      location,
      valueMultiplier,
      startDate: new Date(Date.now()),
      returnDate: new Date(Date.now() + time * 1000 * 60) // date now + time * minutes
    }

    successToast({ text: 'Journey started' })
    updatePlayer({
      ...player,
      activeJourney: journey
    })
  }

  if (player?.activeJourney) {
    return (
      <JourneyDisplay remainingTime={remainingTime} />
    )
  }

  return (
    <div className="w-full h-full flex flex-wrap justify-center content-start p-2 gap-2 overflow-y-auto">
      {locations.map((location, index) => (
        <JourneyCard key={index} location={location} startJourney={startJourney} />
      ))}
    </div>
  )
}

export default JourneyPage
