import { config } from "@/app/config"
import { refreshShop } from "@/app/functions/refreshShop"
import { Player, Shops } from "@/app/types"
import Image from "next/image"
import { errorToast } from "../ui/toasts"

export const RefreshButton = ({ updatePlayer, player, shop }: { updatePlayer: (player: Player) => void, player: Player, shop: Shops }) => {
  const purchaseShopRefreshment = (shop: Shops) => {
    if (!player) return

    const refreshPrice = player.level * config.refreshPriceMultiplier

    if (refreshPrice > player.gold) {
      errorToast({ text: 'Not enough gold' })
      return
    }

    refreshShop(updatePlayer, player, shop, refreshPrice)
  }

  return (
    <button className="flex gap-1 items-center" onClick={() => purchaseShopRefreshment(shop)}>Refresh shop: {player.level * config.refreshPriceMultiplier} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></button>
  )
}