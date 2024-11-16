'use client'

import { config } from "@/app/config"
import { generateRandomEquipment } from "@/app/generators/generateEquipment"
import { generateRandomPotion } from "@/app/generators/generatePotion"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { Shops } from "@/app/types"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect } from "react"
import { calculateQuality } from "../journey/combat/combatCalculations"

const Shop = ({ className, shop }: { className?: string, shop: Shops }) => {
  const [player] = useAtom(playerAtom)
  const { updatePlayer } = useSocket()

  // Refresh shop checker
  const shouldRefreshShop = (viewedShop: Shops): boolean => {
    if (!player) return false

    switch (viewedShop) {
      case 'blacksmith': {
        if (player.shop.blacksmith.lastRefresh === null) return true

        const lastRefreshDate = new Date(player.shop.blacksmith.lastRefresh)
        const today = new Date()

        // Setting hours, minutes, seconds and milliseconds to 0 in order to compare dates
        lastRefreshDate.setHours(0, 0, 0, 0)
        today.setHours(0, 0, 0, 0)

        return today > lastRefreshDate
      }

      case 'alchemist': {
        if (player.shop.alchemist.lastRefresh === null) return true

        const lastRefreshDate = new Date(player.shop.alchemist.lastRefresh)
        const today = new Date()

        // Setting hours, minutes, seconds and milliseconds to 0 in order to compare dates
        lastRefreshDate.setHours(0, 0, 0, 0)
        today.setHours(0, 0, 0, 0)

        return today > lastRefreshDate
      }

      default: {
        return false
      }
    }
  }

  // Refresh shop function
  const refreshShop = (shop: Shops, payment?: number) => {
    if (!player) return

    switch (shop) {
      case 'alchemist': {
        const newItems = []
        const totalShopItems = config.itemsInShop

        for (let itemCount = 0; itemCount < totalShopItems; itemCount++) {
          const roll = Math.floor(Math.random() * 11)

          // Potion
          if (roll === 10) {
            const newItem = generateRandomPotion(player.level)
            newItems.push(newItem)
          } else {
            // Necklace || Ring
            const newItem = generateRandomEquipment(player.level, player.profession, calculateQuality(), 'alchemist')
            newItems.push(newItem)
          }
        }

        // console.log(totalShopItems) ????????????????????????????????
        if (newItems.length === totalShopItems) {
          const newShop = {
            lastRefresh: new Date().toISOString(),
            items: newItems
          }

          updatePlayer({
            ...player,
            shop: {
              alchemist: newShop,
              blacksmith: player.shop.blacksmith
            },
            gold: payment ? (player.gold - payment) : player.gold
          })
        }

        break
      }

      case 'blacksmith': {
        const newItems = []
        const totalShopItems = config.itemsInShop

        for (let itemCount = 0; itemCount < totalShopItems; itemCount++) {
          const newItem = generateRandomEquipment(player.level, player.profession, calculateQuality(), 'blacksmith')

          newItems.push(newItem)
        }

        if (newItems.length === totalShopItems) {
          const newShop = {
            lastRefresh: new Date().toISOString(),
            items: newItems
          }

          updatePlayer({
            ...player,
            shop: {
              alchemist: player.shop.alchemist,
              blacksmith: newShop
            },
            gold: payment ? (player.gold - payment) : player.gold
          })
        }
        break
      }
      default: {
        return
      }
    }
  }

  const purchaseShopRefreshment = (shop: Shops) => {
    if (!player) return

    const refreshPrice = player.level * config.refreshPriceMultiplier

    if (refreshPrice > player.gold) {
      alert('Not enough gold')
      return
    }

    refreshShop(shop, refreshPrice)
  }

  useEffect(() => {
    if (!player) return

    if (shouldRefreshShop(shop)) {
      console.log('Player should refresh the shop:', shop)
      refreshShop(shop)
    }

  }, [player, shop])

  const BlacksmithSection = ({ shop }: { shop: Shops }) => {
    if (!player || !player?.shop?.blacksmith?.items || !player?.shop?.blacksmith?.lastRefresh) return

    return (
      <section className={`flex content-start flex-grow h-full gap-2 border-slate-700 overflow-y-auto flex-col justify-center items-center p-2 ${className}`}>
        <Image src="/assets/portraits/blacksmith.png" width={256} height={256} alt="Merchant" className="p-2" />
        <div className="grid gap-5 grid-cols-3 p-2">
          {player.shop.blacksmith.items.map((item, index) =>
            item !== null ? (
              <ItemFrame key={index} itemData={item} shop={shop} isClickable={true} isEquipped={false} width={100} height={100} />
            ) : (
              <Image key={index} src="/placeholderItem.svg" width={100} height={100} alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )
          )}
        </div>
        <button className="flex gap-1 items-center" onClick={() => purchaseShopRefreshment(shop)}>Refresh shop: {player.level * config.refreshPriceMultiplier} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></button>
      </section>
    )
  }

  const AlchemistSection = ({ shop }: { shop: Shops }) => {
    if (!player || !player?.shop?.alchemist?.items || !player?.shop?.alchemist?.lastRefresh) return

    return (
      <section className={`flex content-start flex-grow h-full gap-2 border-slate-700 overflow-y-auto flex-col justify-center items-center p-2 ${className}`}>
        <Image src="/assets/portraits/alchemist.png" width={256} height={256} alt="Merchant" className="p-2" />
        <div className="grid gap-5 grid-cols-3 p-2">
          {player.shop.alchemist.items.map((item, index) =>
            item !== null ? (
              <ItemFrame key={index} itemData={item} shop={shop} isClickable={true} isEquipped={false} width={100} height={100} />
            ) : (
              <Image key={index} src="/placeholderItem.svg" width={100} height={100} alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )
          )}
        </div>
        <button className="flex gap-1 items-center" onClick={() => purchaseShopRefreshment(shop)}>Refresh shop: {player.level * config.refreshPriceMultiplier} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></button>
      </section>
    )
  }

  // if (!player || !player?.shop?.alchemist?.items || !player?.shop?.blacksmith?.items || !player?.shop?.alchemist?.lastRefresh || !player?.shop?.blacksmith?.lastRefresh) {
  //   return (
  //     <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
  //       <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
  //     </div>
  //   )
  // }

  return (
    <>
      {shop === 'blacksmith' ? (
        <BlacksmithSection shop={shop} />
      ) : shop === 'alchemist' ? (
        <AlchemistSection shop={shop} />
      ) : (
        null
      )}
    </>
  )
}

export default Shop
