import { Player } from "@/app/types"
import { Equipment } from "./Equipment"
import { Information } from "./Information"

export const Overview = ({ player, className }: { player: Player, className?: string }) => {
  return (
    <section className={`${className} h-full md:w-[500px] flex-col flex-shrink-0 border-r border-slate-700 overflow-y-auto`}>
      <Equipment player={player} />
      <Information player={player} />
    </section>
  )
}