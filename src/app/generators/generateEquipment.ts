import { v4 as uuidv4 } from 'uuid'
import { config } from '../config'
import { heavyArmors, jewelery, lightArmors, mediumArmors, shields, weapons } from "../db/equipmentList"
import { random } from "../game/journey/combat/combatCalculations"
import { Armor, ArmorProficiency, ArmorSlot, Attributes, Jewelery, JewelerySlot, Profession, Quality, Shield, Weapon, WeaponFamily } from "../types"

const randomizeAttributes = (level: number, qualityMultiplier: number): Attributes => {
  const getRandomAttributes = (count: number) => {
    const chosenAttributes: (keyof Attributes)[] = []
    const attributes: (keyof Attributes)[] = ['strength', 'agility', 'intellect', 'stamina', 'luck']

    for (let i = 0; i < count; i++) {
      const randomIndex = random(0, attributes.length - 1)
      chosenAttributes.push(attributes[randomIndex])
      attributes.splice(randomIndex, 1)
    }

    return chosenAttributes
  }

  const attributes: Attributes = {
    strength: 0,
    agility: 0,
    intellect: 0,
    stamina: 0,
    luck: 0
  }

  const attributesCount = random(config.itemAttributesCount.min, config.itemAttributesCount.max)
  const chosenAttributes: (keyof Attributes)[] = getRandomAttributes(attributesCount)
  chosenAttributes.forEach(attribute => {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = Math.floor(((1 * level) * qualityMultiplier) / chosenAttributes.length)
    }
  })

  return attributes
}

const weaponFamilies: { [key in Profession]: WeaponFamily[] } = {
  'warrior': ['sword', 'axe', 'mace'],
  'hunter': ['bow', 'crossbow'],
  'mage': ['fire', 'frost', 'arcane', 'earth', 'air']
}

const randomizeWeaponFamily = (profession: Profession): WeaponFamily => {
  const array = weaponFamilies[profession]
  return array[random(0, array.length - 1)]
}

const randomizePrice = (level: number) => {
  return random(Math.floor(config.sellPrice.min * level), Math.floor(config.sellPrice.max * level))
}

const generateWeapon = (level: number, profession: Profession, quality: Quality): Weapon => {
  const qualityMultiplier = config.qualityMultipliers.damage[quality]
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const professionMultiplier = config.professionMultipliers.weaponDamage[profession]
  const family = randomizeWeaponFamily(profession)
  const itemArray = weapons[family]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem
  const sellPrice = randomizePrice(level)

  // Randoms item damage based on level;
  // Basics is range min: 3-5, max: 5-7,
  // And every level scales things up +
  // Profession damage multiplier is added
  const damage = {
    min: random(Math.floor(config.baseWeaponDamage.min.min * level * professionMultiplier * qualityMultiplier), Math.floor(config.baseWeaponDamage.min.max * level * professionMultiplier * qualityMultiplier)),
    max: random(Math.floor(config.baseWeaponDamage.max.min * level * professionMultiplier * qualityMultiplier), Math.floor(config.baseWeaponDamage.max.max * level * professionMultiplier * qualityMultiplier))
  }

  return {
    id: uuidv4(),
    name,
    description,
    level,
    profession,
    slot: 'weapon',
    damage,
    attributes,
    image,
    quality,
    family,
    type: 'weapon',
    sellPrice
  }
}

const generateArmor = (level: number, profession: Profession, quality: Quality, slot: ArmorSlot): Armor => {
  const qualityMultiplier = config.qualityMultipliers.armor[quality]
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const professionMultiplier = config.professionMultipliers.armor[profession]
  const proficiency: ArmorProficiency = config.armorProficiency[profession]
  const armor = random((config.baseArmor.min * level * qualityMultiplier * professionMultiplier), (config.baseArmor.max * level * qualityMultiplier * professionMultiplier))
  const itemArray = proficiency === 'heavy' ? heavyArmors[slot] : proficiency === 'medium' ? mediumArmors[slot] : lightArmors[slot]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem
  const sellPrice = randomizePrice(level)

  return {
    id: uuidv4(),
    name,
    description,
    level,
    profession,
    slot,
    armor,
    attributes,
    image,
    quality,
    proficiency,
    type: 'armor',
    sellPrice
  }
}

const generateShield = (level: number, profession: Profession, quality: Quality): Shield => {
  const qualityMultiplier = config.qualityMultipliers.armor[quality]
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const professionMultiplier = config.professionMultipliers.armor.warrior
  const armor = random((config.baseArmor.min * level * qualityMultiplier * professionMultiplier), (config.baseArmor.max * level * qualityMultiplier * professionMultiplier))
  const randomItem = shields[random(0, shields.length - 1)]
  const { name, description, image } = randomItem
  const sellPrice = randomizePrice(level)

  return {
    id: uuidv4(),
    name,
    description,
    level,
    profession: 'warrior',
    slot: 'shield',
    armor,
    attributes,
    image,
    quality,
    type: 'shield',
    sellPrice
  }
}

const generateJewelery = (level: number, quality: Quality, slot: JewelerySlot): Jewelery => {
  const qualityMultiplier = config.qualityMultipliers.armor[quality]
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const itemArray = jewelery[slot]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem
  const sellPrice = randomizePrice(level)

  return {
    id: uuidv4(),
    name,
    description,
    level,
    slot,
    attributes,
    image,
    quality,
    type: 'jewelery',
    sellPrice
  }
}

const randomizeItemType = (profession: Profession): string => {
  const genericDrop = ['weapon', 'head', 'chest', 'hands', 'legs', 'feet', 'neck', 'ring']

  const availableItems: { [key in Profession]: string[] } = {
    'warrior': [...genericDrop, 'shield'],
    'hunter': genericDrop,
    'mage': genericDrop
  }

  const array = availableItems[profession]
  return array[random(0, array.length - 1)]
}

export const generateRandomEquipment = (level: number, profession: Profession, quality: Quality): Weapon | Shield | Armor | Jewelery => {
  const slot = randomizeItemType(profession)

  if (slot === 'weapon') {
    const weapon = generateWeapon(level, profession, quality)
    return weapon
  } else if (slot === 'shield') {
    const shield = generateShield(level, profession, quality)
    return shield
  } else if (slot === 'ring' || slot === 'neck') {
    const jewelery = generateJewelery(level, quality, slot)
    return jewelery
  } else if (slot === 'head' || slot === 'chest' || slot === 'hands' || slot === 'legs' || slot === 'feet') {
    const armor = generateArmor(level, profession, quality, slot)
    return armor
  } else {
    throw new Error(`Invalid slot: ${slot}`)
  }
}