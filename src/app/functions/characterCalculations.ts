import { ActivePotion, Attributes, Equipment, Material, Potion } from "@/app/types"

export const calculatePlayerAttributes = (equipment: Equipment, attributes: Attributes, activePotion: ActivePotion): Attributes => {
  const playerAttributes: Attributes = { ...attributes }

  if (equipment) {
    for (const item of Object.values(equipment)) {
      if (item && 'attributes' in item) {
        for (const stat in item.attributes) {
          if (stat in playerAttributes) {
            const _stat = stat as keyof Attributes
            playerAttributes[_stat] += item.attributes[_stat]
          }
        }
      }
    }
  }

  const isPotion = (item: Potion | Material | string): item is Potion => {
    return typeof item === 'object' && 'type' in item && item.type === 'potion'
  }

  if (activePotion) {
    const { potion } = activePotion

    if (!isPotion(potion)) {
      alert('Something went wrong applying a potion buff.')
      return playerAttributes
    }

    if (activePotion.expiringDate < new Date()) {
      alert('Potion expried, running nullifying function..')
      return playerAttributes
    }

    const potionStat = potion.enchancing.attribute as keyof Attributes
    const potionStrength = potion.enchancing.value
    const potionValue = (potionStrength / 100) * playerAttributes[potionStat]

    playerAttributes[potionStat] = (playerAttributes[potionStat] ?? 0) + potionValue
  }

  return playerAttributes
}