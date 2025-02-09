import { useSocket } from "@/app/middleware/SocketContext"
import { Player } from "@/app/types"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { successToast } from "@/components/ui/toasts"
import { useState } from "react"

export const HeroTab = ({ player }: { player: Player }) => {
  const [playerDescription, setPlayerDescription] = useState(player.description)
  const { updatePlayer } = useSocket()

  const handleChangePlayerDescription = () => {
    if (!player) return

    updatePlayer({
      ...player,
      description: playerDescription ? playerDescription : null
    })

    successToast({
      text: 'Description changed succesfully',
    })
  }

  return (
    <div className="p-2 h-full gap-2 flex flex-col items-between">
      <span className="font-semibold text-orange-300 self-center">Description:</span>
      <div className="flex h-full w-full">
        <Textarea placeholder="Describe who is your hero. Other player may read this on your player profile." value={playerDescription ? playerDescription : ''} className="border-slate-700 focus-visible:ring-orange-400 resize-none h-full" onChange={(e) => setPlayerDescription(e.target.value)} />
      </div>
      <Button className="text-white rounded-t-sm py-1 px-2 bg-slate-600 border-slate-700 transition hover:bg-slate-700" onClick={() => handleChangePlayerDescription()}>Save</Button>
    </div>
  )
}