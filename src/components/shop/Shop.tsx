import { Player, Shops } from "@/app/types"
import { Merchant } from "./Merchant"

export const Shop = ({ shop, player }: { shop: Shops, player: Player }) => {
  return (
    <section className="flex content-start flex-grow h-full gap-2 border-slate-700 overflow-y-auto flex-col justify-center items-center p-2">
      <Merchant player={player} shop={shop} />
    </section>
  )
}