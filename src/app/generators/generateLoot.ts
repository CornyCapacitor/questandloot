import { item_list } from "../db/itemList"
import { Items, Profession } from "../types"
import { generateRandomEquipment } from "./generateEquipment"
import { generateRandomPotion } from "./generatePotion"

export const generateLoot = (loot: number[] | null, profession: Profession, level: number): Items[] => {
  if (!loot) return []

  const finalLoot: Items[] = []

  for (let i = 0; i < loot.length; i++) {
    const itemId = loot[i]
    const item = item_list[itemId]

    switch (item) {
      case "RANDOM_COMMON_ITEM":
        finalLoot.push(generateRandomEquipment(level, profession, 'common'))
        break
      case "RANDOM_UNCOMMON_ITEM":
        finalLoot.push(generateRandomEquipment(level, profession, 'uncommon'))
        break
      case "RANDOM_RARE_ITEM":
        finalLoot.push(generateRandomEquipment(level, profession, 'rare'))
        break
      case "RANDOM_EPIC_ITEM":
        finalLoot.push(generateRandomEquipment(level, profession, 'epic'))
        break
      case "RANDOM_UNCOMMON_POTION":
        finalLoot.push(generateRandomPotion(level, 'uncommon'))
        break
      case "RANDOM_RARE_POTION":
        finalLoot.push(generateRandomPotion(level, 'rare'))
        break
      case "RANDOM_EPIC_POTION":
        finalLoot.push(generateRandomPotion(level, 'epic'))
        break
      default:
        finalLoot.push(item)
        break
    }
  }

  return finalLoot
}