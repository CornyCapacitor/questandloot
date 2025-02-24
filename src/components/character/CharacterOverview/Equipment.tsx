import { Player } from "@/app/types";
import { Avatar } from "./Avatar";
import { EquipmentSlot } from "./EquipmentSlot";
import { ExperienceBar } from "./ExperienceBar";

export const Equipment = ({ player }: { player: Player }) => {
  return (
    <div className="self-center flex aspect-square w-full">

      {/* Left */}
      <div className="flex flex-[1] flex-col justify-between">
        <EquipmentSlot player={player} slot="head" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="neck" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="hands" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="ring" className="flex-[1] h-full p-2" />
      </div>

      {/* Middle */}
      <div className="h-full flex flex-[2] flex-col">
        {/* Up */}
        <div className="h-full flex flex-[3] flex-col border">
          <span className="flex items-center w-full justify-center p-2 border-b flex-shrink-0 font-semibold text-orange-300">
            {player.name}
          </span>
          <Avatar player={player} className="relative flex-grow" />
          <ExperienceBar className="flex bg-blue-400" />
        </div>

        {/* Down */}
        <div className="flex flex-[1] flex-row items-center">
          <EquipmentSlot player={player} slot="weapon" className="flex-[1] h-full p-2" />
          {player.profession === 'warrior' && (
            <EquipmentSlot player={player} slot="shield" className="flex-[1] h-full p-2" />
          )}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-[1] flex-col justify-between">
        <EquipmentSlot player={player} slot="chest" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="belt" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="legs" className="flex-[1] h-full p-2" />
        <EquipmentSlot player={player} slot="feet" className="flex-[1] h-full p-2" />
      </div>
    </div>
  )
}