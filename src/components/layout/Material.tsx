import { Material, Player } from "@/app/types"
import DynamicItemFrame from "./DynamicItemFrame"

export const MaterialRow = ({ material, player, width, height }: { material: { material: Material, quantity: number }, player: Player, width: number, height: number }) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3">
        <DynamicItemFrame itemData={material.material} player={player} height={height} width={width} />
        <p>{material.material.name}</p>
      </div>
      <p className="w-[80px] text-center">{material.quantity}</p>
    </div>
  )
}