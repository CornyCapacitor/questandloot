import { Armor, Items, Jewelery, Material, Potion, Shield, Weapon } from "../types"

export const isPotion = (item: Items): item is Potion => {
  return item.type === 'potion'
}

export const isMaterial = (item: Items): item is Material => {
  return item.type === 'material'
}

export const isJewelery = (item: Items): item is Jewelery => {
  return item.type === 'jewelery'
}

export const isArmor = (item: Items): item is Armor => {
  return item.type === 'armor'
}

export const isWeapon = (item: Items): item is Weapon => {
  return item.type === 'weapon'
}

export const isShield = (item: Items): item is Shield => {
  return item.type === 'shield'
}