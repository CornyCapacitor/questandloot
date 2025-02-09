import { Player } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

export const Avatar = ({ player }: { player: Player }) => {
  return (
    <div className="w-full relative">
      <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" unoptimized />
      <Link href="/game/settings/portrait" className="absolute p-1 z-10 bottom-2 right-2 cursor-pointer group">
        <div className="absolute inset-0 bg-black rounded-md opacity-50 group-hover:opacity-75 transition"></div>
        <Image src="/edit.svg" width={50} height={50} alt="Edit button" className="relative" />
      </Link>
    </div>
  )
}