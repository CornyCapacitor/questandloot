import { Equipment, Player } from "@/app/types";
import { ItemFrame } from "@/components/items/ItemFrame";
import Image from "next/image";

export const EquipmentSlot = ({ player, slot, className }: { player: Player, slot: keyof Equipment, className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {player.equipment[slot] ? (
        <ItemFrame itemData={player.equipment[slot]} isClickable={true} isEquipped={true} width={0} height={0} />
      ) : (
        <Image src={`/assets/equipment/slots/${slot}.svg`} fill alt={`${slot} slot`} className="p-2 grayscale border-slate-700" />
      )}
    </div>
  )
}