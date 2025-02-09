import { Player } from "@/app/types";
import { Avatar } from "./Avatar";
import { EquipmentSlot } from "./EquipmentSlot";
import { ExperienceBar } from "./ExperienceBar";

export const Equipment = ({ player }: { player: Player }) => {
  return (
    <div className="flex flex-shrink-0 w-[500px] h-[500px] border-slate-700">

      {/* Left */}
      <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">
        <EquipmentSlot player={player} slot='head' />
        <EquipmentSlot player={player} slot='neck' />
        <EquipmentSlot player={player} slot='chest' />
        <EquipmentSlot player={player} slot='ring' />
      </div>

      {/* Middle */}
      <div className="flex flex-col flex-grow border-r border-l border-slate-700">
        <div className="flex flex-col flex-grow">
          <div className="w-full flex flex-shrink-0 items-center border-b h-8 justify-center bg-slate-900 text-orange-400 font-semibold text-lg text-center">{player.name}</div>
          <div className="flex flex-grow">
            <Avatar player={player} />
          </div>
          <div className="w-full items-center h-8 flex flex-shrink-0 justify-center">
            <ExperienceBar />
          </div>
        </div>

        <div className="flex items-center justify-around gap-2 p-2 flex-shrink-0 border-t border-slate-700">
          <EquipmentSlot player={player} slot='weapon' />
          {/* Shield (requires being warrior) */}
          {player.profession === 'warrior' && (
            <EquipmentSlot player={player} slot='shield' />
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">
        <EquipmentSlot player={player} slot='hands' />
        <EquipmentSlot player={player} slot='belt' />
        <EquipmentSlot player={player} slot='legs' />
        <EquipmentSlot player={player} slot='feet' />
      </div>
    </div>
  )
}