import { v4 as uuidv4 } from 'uuid'
import { config } from "../config"
import { potionList } from "../db/potionList"
import { random } from "../game/journey/combat/combatCalculations"
import { Attributes, Potion, PotionQuality } from "../types"
import { randomizePrice } from './generateEquipment'

const randomizePotionStrength = (specificQuality?: PotionQuality): { quality: PotionQuality, strength: number } => {
  const roll = random(1, 100)

  if (specificQuality) {
    return { quality: config.potionStrength[specificQuality].quality, strength: config.potionStrength[specificQuality].strength }
  }

  if (roll >= config.potionStrength.epic.chance) {
    return { quality: config.potionStrength.epic.quality, strength: config.potionStrength.epic.strength }
  } else if (roll >= config.potionStrength.rare.chance) {
    return { quality: config.potionStrength.rare.quality, strength: config.potionStrength.rare.strength }
  } else {
    return { quality: config.potionStrength.uncommon.quality, strength: config.potionStrength.uncommon.strength }
  }
}

const randomizeAttribute = (): keyof Attributes => {
  const attributes: (keyof Attributes)[] = ['strength', 'agility', 'intellect', 'stamina', 'luck']
  return attributes[Math.floor(Math.random() * attributes.length)]
}

export const generateRandomPotion = (level: number, specificQuality?: PotionQuality): Potion => {
  const { quality, strength } = randomizePotionStrength(specificQuality)
  const attribute = randomizeAttribute()
  const enchancing = { attribute, value: strength }
  const { name, description, image } = potionList[attribute][strength === config.potionStrength.epic.strength ? 2 : strength === config.potionStrength.rare.strength ? 1 : 0]
  const sellPrice = randomizePrice(level)

  return {
    id: uuidv4(),
    name,
    description,
    enchancing,
    image,
    type: 'potion',
    quality,
    sellPrice
  }
}