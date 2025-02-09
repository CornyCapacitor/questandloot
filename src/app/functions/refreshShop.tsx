import { config } from "../config"
import { generateRandomEquipment } from "../generators/generateEquipment"
import { generateRandomPotion } from "../generators/generatePotion"
import { Player, Shops } from "../types"
import { calculateQuality } from "./combatCalculations"

export const refreshShop = (updatePlayer: (player: Player) => void, player: Player, shop: Shops, payment?: number) => {
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