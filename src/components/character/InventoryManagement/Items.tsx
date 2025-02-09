import { Player } from "@/app/types"
import { ItemFrame } from "@/components/items/ItemFrame"

export const Items = ({ player }: { player: Player }) => {
  return (
    <section className='flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto'>
      {player.inventory.length ? player.inventory.map((item, index) => (
        <ItemFrame key={index} itemData={item.item} isClickable={true} isEquipped={false} width={128} height={128} />
      )) : (
        <p>You currently have no items to browse</p>
      )}
    </section>
  )
}