import { Armor, DungeonKey, Items, Jewelery, Material, Potion, Shield, Weapon } from "../types"

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

export const isDungeonKey = (key: DungeonKey | 'journey'): key is DungeonKey => {
  return ["dungeon1", "dungeon2", "dungeon3", "dungeon4", "dungeon5", "dungeon6", "dungeon7", "dungeon8", "dungeon9", "dungeon10"].includes(key as DungeonKey);
};

export const isJourney = (key: DungeonKey | 'journey'): key is 'journey' => {
  return key === 'journey'
}