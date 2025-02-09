import { Items } from "@/app/types"
import Image from "next/image"
import { ItemFrame } from "../items/ItemFrame"

export const Result = ({ gold, experience, loot }: { gold: number | null, experience: number | null, loot: Items[] }) => {
  return (
    <div className="flex flex-col p-5">
      <h1>Loot:</h1>
      <h1 className="flex gap-1 justify-center">
        Gold: {gold ?? 0}
        <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized />
      </h1>
      <h1 className="flex gap-1 justify-center">
        Exp: {experience ?? 0}
        <Image width={20} height={20} src="/experience.svg" alt="Experience" unoptimized />
      </h1>
      <div className="flex gap-2 w-full justify-center pt-5 flex-wrap">
        {loot.map((item, index) => (
          <ItemFrame key={index} itemData={item} isClickable={false} isEquipped={false} width={100} height={100} />
        ))}
      </div>
    </div>
  )
}