import { Player } from "@/app/types"
import { MaterialRow } from "@/components/items/Material"
import Image from "next/image"

export const Materials = ({ player }: { player: Player }) => {
  return (
    <section className="flex-col flex content-start flex-grow flex-wrap h-full border-slate-700 overflow-y-auto">
      <div className="border-b border-slate-700 flex justify-between items-center p-2 w-full">
        <div className="flex gap-3 items-center">
          <Image src="/question_mark.png" width={50} height={50} alt="question mark" className="border rounded-md border-slate-700" unoptimized />
          <p>Material name</p>
        </div>
        <p className="w-[80px] text-center">Quantity</p>
      </div>
      <div className="p-2 flex flex-col gap-2 w-full">
        {player.materials.length ? player.materials.map((material, index) => (
          <MaterialRow material={material} player={player} height={50} width={50} key={index} />
        )) : (
          <p>You currently have no materials to browse</p>
        )}
      </div>
    </section>
  )
}