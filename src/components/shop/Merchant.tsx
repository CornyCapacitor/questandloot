import { refreshShop } from "@/app/functions/refreshShop";
import { useSocket } from "@/app/middleware/SocketContext";
import { Player, Shops } from "@/app/types";
import Image from "next/image";
import { useEffect } from "react";
import { ItemFrame } from "../items/ItemFrame";
import { RefreshButton } from "./RefreshButton";

export const Merchant = ({ player, shop }: { player: Player, shop: Shops }) => {
  const { updatePlayer } = useSocket()

  const shouldRefreshShop = (shop: Shops): boolean => {
    if (!player) return false
    if (player.shop[shop].lastRefresh === null) return true

    const lastRefreshDate = new Date(player.shop[shop].lastRefresh)
    const today = new Date()

    // Setting hours, minutes, seconds and milliseconds to 0 in order to compare dates
    lastRefreshDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    return today > lastRefreshDate
  }

  useEffect(() => {
    if (!player) return

    if (shouldRefreshShop(shop)) {
      refreshShop(updatePlayer, player, shop)
    }

  }, [player, shop])

  return (
    <>
      <Image src={`/assets/merchants/${shop}.png`} width={256} height={256} alt="Merchant" unoptimized />
      <div className="grid gap-5 grid-cols-3 p-2">
        {player.shop[shop].items.map((item, index) =>
          item !== null ? (
            <ItemFrame key={index} itemData={item} shop={shop} isClickable={true} isEquipped={false} width={100} height={100} />
          ) : (
            <Image key={index} src="/placeholderItem.svg" alt="Empty slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized width={100} height={100} />
          )
        )}
      </div>
      <RefreshButton updatePlayer={updatePlayer} player={player} shop={shop} />
    </>
  )
}