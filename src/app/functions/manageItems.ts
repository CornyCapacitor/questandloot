import { Items, Material, Player } from "../types";

type PlayerItems = {
  item: Items,
  quantity: number
}[]

type PlayerMaterials = {
  material: Material,
  quantity: number
}[]

export const addItem = (addedItem: Items, currentItems: PlayerItems): PlayerItems => {
  const updatedItems = [...currentItems]

  const existingItemIndex = updatedItems.findIndex((entry) => entry.item.id === addedItem.id)

  if (existingItemIndex !== -1) {
    updatedItems[existingItemIndex].quantity += 1
  } else {
    updatedItems.push({ item: addedItem, quantity: 1 })
  }

  return updatedItems
}

export const removeItem = (removedItemId: number, currentItems: PlayerItems): PlayerItems => {
  const updatedItems = [...currentItems]

  const removedItemIndex = updatedItems.findIndex((entry) => entry.item.id === removedItemId)

  if (removedItemIndex !== -1) {
    const itemQuantity = updatedItems[removedItemIndex].quantity

    if (itemQuantity > 1) {
      updatedItems[removedItemIndex].quantity -= 1
    } else {
      updatedItems.splice(removedItemIndex, 1)
    }
  } else {
    throw new Error('Cannot find item with given id.')
  }

  return updatedItems
}

export const addMaterial = (addedMaterial: Material, currentMaterials: PlayerMaterials): PlayerMaterials => {
  const updatedMaterials = [...currentMaterials]

  const existingMaterialIndex = updatedMaterials.findIndex((entry) => entry.material.id === addedMaterial.id)

  if (existingMaterialIndex !== -1) {
    updatedMaterials[existingMaterialIndex].quantity += 1
  } else {
    updatedMaterials.push({ material: addedMaterial, quantity: 1 })
  }

  return updatedMaterials
}

export const removeMaterial = (removedMaterialId: number, currentMaterials: PlayerMaterials): PlayerMaterials => {
  const updatedMaterials = [...currentMaterials]

  const removedMaterialIndex = updatedMaterials.findIndex((entry) => entry.material.id === removedMaterialId)

  if (removedMaterialIndex !== -1) {
    const itemQuantity = updatedMaterials[removedMaterialIndex].quantity

    if (itemQuantity > 1) {
      updatedMaterials[removedMaterialIndex].quantity -= 1
    } else {
      updatedMaterials.splice(removedMaterialIndex, 1)
    }
  } else {
    throw new Error('Cannot find material with given id.')
  }

  return updatedMaterials
}

export const applyLoot = (loot: Items[], player: Player): { items: PlayerItems, materials: PlayerMaterials, } => {
  const updatedPlayer = { ...player }

  for (let i = 0; i < loot.length; i++) {
    const element = loot[i];
    if (element.type === 'material') {
      updatedPlayer.materials = addMaterial(element, updatedPlayer.materials)
    } else {
      updatedPlayer.items = addItem(element, updatedPlayer.items)
    }
  }

  return {
    items: updatedPlayer.items,
    materials: updatedPlayer.materials
  }
}