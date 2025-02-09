import { Player } from "@/app/types";
import { ActivePotion } from "./ActivePotion";
import { Stat } from "./Stat";

export const AttributesTab = ({ player }: { player: Player }) => {
  return (
    <section className="flex-grow py-2 pl-2 flex flex-col items-between">
      <div className="flex h-full w-full">
        <div className="flex flex-col gap-2 flex-1">
          <Stat stat="strength" player={player} />
          <Stat stat="agility" player={player} />
          <Stat stat="intellect" player={player} />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Stat stat="stamina" player={player} />
          <Stat stat="luck" player={player} />
          <Stat stat="armor" player={player} />
        </div>
      </div>
      <div className="flex flex-grow justify-end items-end px-3 py-1">
        <div className="max-w-[70px]">
          <ActivePotion player={player} />
        </div>
      </div>
    </section>
  )
}