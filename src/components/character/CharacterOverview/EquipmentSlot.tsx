import { Equipment, Player } from "@/app/types";
import { ItemFrame } from "@/components/items/ItemFrame";
import Image from "next/image";

export const EquipmentSlot = ({ player, slot }: { player: Player, slot: keyof Equipment }) => {
  return (
    <div className="w-[100px] h-[100px] rounded-md relative">
      {player.equipment[slot] ? (
        <ItemFrame itemData={player.equipment[slot]} isClickable={true} isEquipped={true} width={100} height={100} />
      ) : (
        <Image src={`/assets/equipment/slots/${slot}.svg`} layout="fill" alt="Head slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
      )}
    </div>
  )
}