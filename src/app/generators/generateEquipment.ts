import { random } from "../combat/combatCalculations"
import { Armor, ArmorProficiency, ArmorSlot, Attributes, Jewelery, JewelerySlot, Profession, Quality, Shield, Weapon, WeaponFamily } from "../types"
import { heavyArmors, jewelery, lightArmors, mediumArmors, shields, weapons } from "./equipmentList"

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

  const attributesCount = random(1, 3)
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

const generateWeapon = (level: number, profession: Profession, quality: Quality): Weapon => {
  const qualityMultiplier = quality === 'common' ? 1.0 : quality === 'uncommon' ? 1.1 : quality === 'rare' ? 1.3 : quality === 'epic' ? 1.5 : 1.0
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const damageMultiplier = profession === 'warrior' ? 1.2 : profession === 'hunter' ? 1.7 : profession === 'mage' ? 2.0 : 0.0
  const family = randomizeWeaponFamily(profession)
  const itemArray = weapons[family]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem

  // Randoms item damage based on level;
  // Basics is range min: 3-5, max: 5-7,
  // And every level scales things up +
  // Profession damage multiplier is added
  const damage = {
    min: random(Math.floor(3 * level * damageMultiplier), Math.floor(5 * level * damageMultiplier)),
    max: random(Math.floor(5 * level * damageMultiplier), Math.floor(7 * level * damageMultiplier))
  }

  return {
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
    type: 'weapon'
  }
}

const generateArmor = (level: number, profession: Profession, quality: Quality, slot: ArmorSlot): Armor => {
  const qualityMultiplier = quality === 'uncommon' ? 1.1 : quality === 'rare' ? 1.3 : quality === 'epic' ? 1.5 : 1.0
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const armorMultiplier = profession === 'warrior' ? 3.0 : profession === 'hunter' ? 2.0 : profession === 'mage' ? 1.0 : 0.0
  const proficiency: ArmorProficiency = profession === 'warrior' ? 'heavy' : profession === 'hunter' ? 'medium' : 'light'
  const armor = random((1 * level * qualityMultiplier * armorMultiplier), (2 * level * qualityMultiplier * armorMultiplier))
  const itemArray = proficiency === 'heavy' ? heavyArmors[slot] : proficiency === 'medium' ? mediumArmors[slot] : lightArmors[slot]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem

  return {
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
    type: 'armor'
  }
}

const generateShield = (level: number, profession: Profession, quality: Quality): Shield => {
  const qualityMultiplier = quality === 'uncommon' ? 1.1 : quality === 'rare' ? 1.3 : quality === 'epic' ? 1.5 : 1.0
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const armorMultiplier = 3.0
  const armor = random((1 * level * qualityMultiplier * armorMultiplier), (2 * level * qualityMultiplier * armorMultiplier))
  const randomItem = shields[random(0, shields.length - 1)]
  const { name, description, image } = randomItem

  return {
    name,
    description,
    level,
    profession: 'warrior',
    slot: 'shield',
    armor,
    attributes,
    image,
    quality,
    type: 'shield'
  }
}

const generateJewelery = (level: number, quality: Quality, slot: JewelerySlot): Jewelery => {
  const qualityMultiplier = quality === 'uncommon' ? 1.1 : quality === 'rare' ? 1.3 : quality === 'epic' ? 1.5 : 1.0
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const itemArray = jewelery[slot]
  const randomItem = itemArray[random(0, itemArray.length - 1)]
  const { name, description, image } = randomItem

  return {
    name,
    description,
    level,
    slot,
    attributes,
    image,
    quality,
    type: 'jewelery'
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