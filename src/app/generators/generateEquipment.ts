import { random } from "../combat/combatCalculations"
import { Attributes, Profession, Quality, Weapon, WeaponFamily } from "../types"
import { weapons } from "./equipmentList"

const weaponFamilies: { [key in Profession]: WeaponFamily[] } = {
  'warrior': ['sword', 'axe', 'mace'],
  'hunter': ['bow', 'crossbow'],
  'mage': ['fire', 'frost', 'arcane', 'earth', 'air']
}

const genericDrop = ['weapon', 'head', 'chest', 'hands', 'legs', 'feet', 'neck', 'ring']

const availableItems: { [key in Profession]: string[] } = {
  'warrior': [...genericDrop, 'shield'],
  'hunter': genericDrop,
  'mage': genericDrop
}

const randomizeWeaponFamily = (profession: Profession): WeaponFamily => {
  const array = weaponFamilies[profession]
  return array[random(0, array.length - 1)]
}

const randomizeItemType = (profession: Profession): string => {
  const array = availableItems[profession]
  return array[random(0, array.length - 1)]
}

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

export const generateWeapon = (level: number, profession: Profession, quality: Quality): Weapon => {
  const qualityMultiplier = quality === 'common' ? 1.0 : quality === 'uncommon' ? 1.1 : quality === 'rare' ? 1.3 : quality === 'epic' ? 1.5 : 1.0
  const damageMultiplier = profession === 'warrior' ? 1.2 : profession === 'hunter' ? 1.7 : profession === 'mage' ? 2.0 : 0.0
  const family = randomizeWeaponFamily(profession)
  const familyArray = weapons[family]
  const randomItem = familyArray[random(0, familyArray.length - 1)]
  const name = randomItem.name
  const description = randomItem.description
  const image = randomItem.image

  // Randoms item damage based on level;
  // Basics is range min: 3-5, max: 5-7,
  // And every level scales things up +
  // Profession damage multiplier is added
  const damage = {
    min: random(Math.floor(3 * level * damageMultiplier), Math.floor(5 * level * damageMultiplier)),
    max: random(Math.floor(5 * level * damageMultiplier), Math.floor(7 * level * damageMultiplier))
  }

  // Applying attributes
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

  console.log('Randomized family:', family)
  console.log('Family array:', familyArray)
  console.log('Random item:', randomItem)

  return {
    name,
    description,
    level,
    class: profession,
    slot: 'weapon',
    damage,
    attributes,
    image,
    quality,
    type: 'weapon',
    family
  }
}