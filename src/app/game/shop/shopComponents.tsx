'use client'

import { generateRandomEquipment } from "@/app/generators/generateEquipment"
import { playerAtom } from "@/app/state/atoms"
import { Items } from "@/app/types"
import IconSpinner from "@/components/layout/IconSpinner"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { calculateQuality } from "../journey/combat/combatCalculations"

const Shop = ({ className }: { className?: string }) => {
  const [player, setPlayer] = useAtom(playerAtom)

  const shouldRefreshShop = (): boolean => {
    if (!player) return false

    if (player?.shop.lastRefresh === null) return true

    const lastRefreshDate = new Date(player.shop.lastRefresh)
    const today = new Date()

    // Setting hours, minutes, seconds and milliseconds to 0 in order to compare dates
    lastRefreshDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    return today > lastRefreshDate
  }

  const refreshShop = () => {
    if (!player) return

    const newItems: Items[] = []
    const totalShopItems = 9

    for (let itemCount = 0; itemCount < totalShopItems; itemCount++) {
      const newItem = generateRandomEquipment(player.level, player.profession, calculateQuality())

      newItems.push(newItem)
    }

    if (newItems.length === totalShopItems) {
      const newShop = {
        lastRefresh: new Date().toISOString(),
        items: newItems
      }

      setPlayer((prevPlayer) => {
        if (!prevPlayer) return null

        return {
          ...prevPlayer,
          shop: newShop
        }
      })
    }
  }

  useEffect(() => {
    if (!player) return

    if (shouldRefreshShop()) {
      refreshShop()
    }

  }, [player])

  if (!player?.shop.items || !player?.shop.lastRefresh) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
      </div>
    )
  }

  return (
    <section className={`${className}`}>
      {player.shop.items.map((item, index) => (
        <ItemFrame key={index} itemData={item} isClickable={true} isDisabled={false} isEquipped={false} width={100} height={100} />
      ))}
    </section>
  )
}

export default Shop
