import { formatTime } from "@/app/functions/time"
import { useSocket } from "@/app/middleware/SocketContext"
import { Player } from "@/app/types"
import { questionAlert } from "@/components/ui/alerts"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import { useEffect, useState } from "react"

export const ActivePotion = ({ player }: { player: Player }) => {
  const { updatePlayer } = useSocket()
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  const removePotion = () => {
    if (!player) return

    updatePlayer({
      ...player,
      activePotion: null
    })
  }

  useEffect(() => {
    if (!player || !player.activePotion) {
      setTimeLeft(null)
      return
    }

    const updateRemainingTime = () => {
      if (!player.activePotion) return
      const expiringDate = new Date(player.activePotion.expiringDate).getTime()
      const timeLeft = (expiringDate - Date.now()) / 1000
      if (timeLeft < 0) removePotion()
      setTimeLeft(timeLeft > 0 ? timeLeft : 0)
    }

    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => clearInterval(intervalId)
  }, [player.activePotion]);

  const handleRemovePotion = () => {
    if (!player || !player.activePotion || !timeLeft) return
    questionAlert({
      text: `Are you sure you want to cancel the effect of ${player.activePotion.potion.name}? You still have ${formatTime(timeLeft).uniText} left of it.`,
      confirmFunction: () => {
        return updatePlayer({
          ...player,
          activePotion: null
        })
      },
      cancelFunction: () => {
        return
      }
    })
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={() => handleRemovePotion()}>
          {/* This is awful, I know, but tried different approaches and it had multiple problems everytime, so I went straightforward with jsx */}
          <Image src={`/assets/potions/${player.activePotion ? player.activePotion.potion.image : 'strength_potion.png'}`} alt="Player potion" width={70} height={70} className={`rounded-full bg-slate-600 ring ${player.activePotion ? `${player.activePotion.potion.enchancing.attribute === 'strength' ? 'ring-red-500' : player.activePotion.potion.enchancing.attribute === 'agility' ? 'ring-green-500' : player.activePotion.potion.enchancing.attribute === 'intellect' ? 'ring-blue-500' : player.activePotion.potion.enchancing.attribute === 'stamina' ? 'ring-purple-500' : 'ring-yellow-500'}` : 'ring-orange-500'} hover:bg-slate-700 transition p-1 ${player.activePotion ? '' : 'grayscale'}`} />
        </TooltipTrigger>
        <TooltipContent>
          {player.activePotion ? (
            <div className="flex flex-col items-start">
              <h1 className="text-orange-500 font-semibold">{player.activePotion.potion.name}</h1>
              <h2 className="max-w-[250px]">{player.activePotion.potion.description}</h2>
              <h3 className="">Time left: {formatTime((new Date(player.activePotion.expiringDate).getTime() - Date.now()) / 1000).uniText}</h3>
            </div>
          ) : (
            <div className="max-w-[250px]">Here you can preview your active potion. You can buy potions straight from an alchemist or find one during your journeys.</div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}