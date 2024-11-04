'use client'

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

    let valueMultiplier = 50

    switch (time) {
      case 30:
        valueMultiplier = 50
        break
      case 60:
        valueMultiplier = 100
        break
      case 120:
        valueMultiplier = 190
        break
      case 240:
        valueMultiplier = 360
        break
      case 360:
        valueMultiplier = 510
        break
      case 480:
        valueMultiplier = 640
        break
      case 600:
        valueMultiplier = 750
        break
      case 720:
        valueMultiplier = 840
        break
      default:
        valueMultiplier = 50
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
