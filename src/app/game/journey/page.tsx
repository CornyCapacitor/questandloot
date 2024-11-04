'use client'

import { config } from "@/app/config"
import { combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Journey, Player } from "@/app/types"
import { useAtom } from "jotai"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { JourneyCard } from "./JourneyComponents"

const JourneyPage = () => {
  const [player, setPlayer] = useAtom<Player | null>(playerAtom)
  const [, setIsCombatReady] = useAtom(combatReadyAtom)
  const [remainingTime, setRemainingTime] = useState<number | null>(null)
  const journeys: { name: string, image: string }[] = [
    {
      name: 'Dark Forest',
      image: 'placeholder.svg'
    },
    {
      name: 'High mountains',
      image: 'placeholder.svg'
    },
    {
      name: 'Volcano',
      image: 'placeholder.svg'
    },
    {
      name: 'Something',
      image: 'placeholder.svg'
    },
    {
      name: 'Something',
      image: 'placeholder.svg'
    },
    {
      name: 'Something',
      image: 'placeholder.svg'
    },
    {
      name: 'Something',
      image: 'placeholder.svg'
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
          alert('Journey ended, entering combat...')
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
  }, [player, setPlayer, router, setIsCombatReady]);

  const startJourney = (location: string, time: number) => {
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
      // Temporary returnDate function (testing)
      returnDate: new Date(Date.now() + time * 1000 / 10)
      // Actually good returnDate function (build)
      // returnDate: new Date(Date.now() + time * 1000 * 60) // date now + time * minutes
    }

    alert('Activating journey, sending date to database...')
    setPlayer({
      ...player,
      activeJourney: journey
    })
  }

  if (player?.activeJourney) {
    return (
      <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
        <h1>Journey in progress..</h1>
        {remainingTime !== null && (
          <h2>Remaining time: {Math.floor(remainingTime / 60)}m {remainingTime % 60}s</h2>
        )}
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-wrap justify-center content-start p-2 gap-2 overflow-y-auto">
      {journeys.map((journey, index) => (
        <JourneyCard key={index} journey={journey} startJourney={startJourney} />
      ))}
    </div>
  )
}

export default JourneyPage
