import { Material, Player } from "@/app/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import DynamicItemFrame from "./DynamicItemFrame"

export const MaterialRow = ({ material, player, width, height }: { material: { material: Material, quantity: number }, player: Player, width: number, height: number }) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DynamicItemFrame itemData={material.material} player={player} height={height} width={width} />
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex flex-col items-start">
                <h1 className="text-orange-500 font-semibold">{material.material.name}</h1>
                <h2 className="max-w-[250px]">{material.material.description}</h2>
                <h3 className="flex gap-2">Quantity: <span className="text-orange-500 font-semibold">{material.quantity}</span></h3>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className={`${material.quantity === 0 ? 'text-gray-400 grayscale' : ''}`}>{material.material.name}</p>
      </div>
      <p className={`w-[80px] text-center ${material.quantity === 0 ? 'text-red-700' : ''}`}>{material.quantity}</p>
    </div>
  )
}