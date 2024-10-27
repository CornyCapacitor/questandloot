'use client'

import { combatReadyAtom, playerAtom } from "@/app/state/atoms"
import { Journey, Player } from "@/app/types"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const JourneyPage = () => {
  const [player, setPlayer] = useAtom<Player | null>(playerAtom)
  const [, setIsCombatReady] = useAtom(combatReadyAtom)
  const [time, setTime] = useState(30)
  const [remainingTime, setRemainingTime] = useState<number | null>(null)
  const journeyOptions = [30, 60, 120, 240, 360, 480, 600, 720]
  const journeys: { name: string, image: string }[] = [
    {
      name: 'Dark Forest',
      image: 'jungle.png'
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
      case 60:
        valueMultiplier = 100
      case 120:
        valueMultiplier = 190
      case 240:
        valueMultiplier = 360
      case 360:
        valueMultiplier = 510
      case 480:
        valueMultiplier = 640
      case 600:
        valueMultiplier = 750
      case 720:
        valueMultiplier = 840
      default:
        valueMultiplier = 50
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
    <div className="w-full h-full flex justify-center items-center">
      {journeys.map((journey) => (
        <div key={journey.name} className="flex flex-col gap-2 items-center justify-center p-4 bg-slate-800 border rounded-md">
          <h1>{journey.name}</h1>
          <Image width={200} height={200} alt="Journey image" src={`/assets/journeys/${journey.image}`} className="rounded-md" />
          <select className="text-black" value={time} onChange={(e) => setTime(Number(e.target.value))}>
            {journeyOptions.map((option) => (
              <option key={option} value={option}>{`${option / 60}h`}</option>
            ))}
          </select>
          <Button onClick={() => startJourney(journey.name, time)}>Start journey</Button>
        </div>
      ))}
    </div>
  )
}

export default JourneyPage
