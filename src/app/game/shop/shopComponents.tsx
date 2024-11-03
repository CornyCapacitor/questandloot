'use client'

import { generateRandomEquipment } from "@/app/generators/generateEquipment"
import { playerAtom } from "@/app/state/atoms"
import { Items } from "@/app/types"
import IconSpinner from "@/components/layout/IconSpinner"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import Image from "next/image"
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

  const refreshShop = (payment?: number) => {
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
          shop: newShop,
          gold: payment ? (prevPlayer.gold - payment) : prevPlayer.gold
        }
      })
    }
  }

  const purchaseShopRefreshment = () => {
    if (!player) return

    const refreshPrice = player.level * 100

    if (refreshPrice > player.gold) {
      alert('Not enough gold')
      return
    }

    refreshShop(refreshPrice)
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
    <section className={`flex content-start flex-grow h-full gap-2 border-slate-700 overflow-y-auto flex-col justify-center items-center p-2 ${className}`}>
      <Image src="/assets/portraits/merchant.png" width={256} height={256} alt="Merchant" className="p-2" />
      <div className="grid gap-5 grid-cols-3 p-2">
        {player.shop.items.map((item, index) =>
          item !== null ? (
            <ItemFrame key={index} itemData={item} inShop={true} isClickable={true} isEquipped={false} width={100} height={100} />
          ) : (
            <Image key={index} src="/assets/equipment/slots/beltslot.svg" width={100} height={100} alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
          )
        )}
      </div>
      <button className="flex gap-1 items-center" onClick={() => purchaseShopRefreshment()}>Refresh shop: {player.level * 100} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></button>
    </section>
  )
}

export default Shop
