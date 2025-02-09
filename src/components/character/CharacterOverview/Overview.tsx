import { Player } from "@/app/types"
import { Equipment } from "./Equipment"
import { Information } from "./Information"

export const Overview = ({ player }: { player: Player }) => {
  return (
    <section className="h-full flex flex-col flex-shrink-0 border-r border-slate-700">
      <Equipment player={player} />
      <Information player={player} />
    </section>
  )
}