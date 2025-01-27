import { v4 as uuidv4 } from 'uuid'
import { config } from '../config'
import { ArmorItem, heavyArmors, jewelery, lightArmors, mediumArmors, shields, WeaponItem, weapons } from "../db/equipmentList"
import { random } from "../functions/combatCalculations"
import { Armor, ArmorProficiency, ArmorSlot, Attributes, Jewelery, JewelerySlot, Profession, Quality, Shield, Weapon, WeaponArray } from "../types"

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

const getRandomItemsForLevel = (level: number, array: (WeaponItem | ArmorItem)[]): (WeaponItem | ArmorItem)[] => {
  const totalItems = array.length
  const start = Math.max(0, Math.floor((level / 100) * (totalItems - config.itemsPerDraw)))
  const end = start + config.itemsPerDraw
  const items = [];

  for (let i = start; i < end; i++) {
    const item = array[i]
    items.push(item)
  }

  return items;
}

const weaponTypes: { [key in Profession]: WeaponArray[] } = {
  'warrior': ['sword', 'axe', 'mace'],
  'hunter': ['ranged'],
  'mage': ['staves']
}

const randomizeWeaponType = (profession: Profession): WeaponArray => {
  const array = weaponTypes[profession]
  return array[random(0, array.length - 1)]
}

export const randomizePrice = (level: number) => {
  return random(Math.floor(config.sellPrice.min * level), Math.floor(config.sellPrice.max * level))
}

const generateWeapon = (level: number, profession: Profession, quality: Quality): Weapon => {
  const qualityMultiplier = config.qualityMultipliers.damage[quality]
  const attributes = randomizeAttributes(level, qualityMultiplier)
  const professionMultiplier = config.professionMultipliers.weaponDamage[profession]
  const weaponType = randomizeWeaponType(profession)
  const itemArray = weapons[weaponType]
  const randomItem = getRandomItemsForLevel(level, itemArray)[Math.floor(Math.random() * config.itemsPerDraw)]
  const { name, description, image, family } = randomItem as WeaponItem
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
  const randomItem = getRandomItemsForLevel(level, itemArray)[Math.floor(Math.random() * config.itemsPerDraw)]
  const { name, description, image } = randomItem as ArmorItem
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
  const itemArray = shields
  const randomItem = getRandomItemsForLevel(level, itemArray)[Math.floor(Math.random() * config.itemsPerDraw)]
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
  const randomItem = itemArray[Math.floor(Math.random() * itemArray.length)]
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

const randomizeItemType = (profession: Profession, storeType?: 'blacksmith' | 'alchemist'): string => {
  switch (storeType) {
    case 'blacksmith': {
      const blacksmithStore = ['weapon', 'head', 'chest', 'hands', 'legs', 'feet', 'belt'];

      if (profession === 'warrior') blacksmithStore.push('shield')

      return blacksmithStore[random(0, blacksmithStore.length - 1)];
    }

    case 'alchemist': {
      const alchemistStore = ['neck', 'ring'];
      return alchemistStore[random(0, alchemistStore.length - 1)];
    }

    default: {
      const genericDrop = ['weapon', 'head', 'chest', 'hands', 'legs', 'feet', 'neck', 'ring'];

      if (profession === 'warrior') genericDrop.push('shield')

      return genericDrop[random(0, genericDrop.length - 1)];
    }
  }
};

export const generateRandomEquipment = (level: number, profession: Profession, quality: Quality, storeType?: 'blacksmith' | 'alchemist'): Weapon | Shield | Armor | Jewelery => {
  const slot = randomizeItemType(profession, storeType)

  if (slot === 'weapon') {
    const weapon = generateWeapon(level, profession, quality)
    return weapon
  } else if (slot === 'shield') {
    const shield = generateShield(level, profession, quality)
    return shield
  } else if (slot === 'ring' || slot === 'neck') {
    const jewelery = generateJewelery(level, quality, slot)
    return jewelery
  } else if (slot === 'head' || slot === 'chest' || slot === 'hands' || slot === 'legs' || slot === 'feet' || slot === 'belt') {
    const armor = generateArmor(level, profession, quality, slot)
    return armor
  } else {
    throw new Error(`Invalid slot: ${slot}`)
  }
}