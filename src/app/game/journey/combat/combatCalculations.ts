import { Attributes, CombatInformation, Damage, DamageType, Equipment, Loot, Player, Profession, Resistances, Weapon } from "@/app/types"
import { calculatePlayerAttributes } from "../../../functions/characterCalculations"

export const random = (number1: number, number2: number): number => {
  return Math.floor(Math.random() * (number2 - number1 + 1) + number1)
}

export const calculateWeaponDamage = (weapon: Weapon | null): Damage => {
  if (weapon) return weapon.damage

  return { min: 1, max: 2 }
}

export const calculateDamage = (attributes: Attributes, profession: Profession, weaponDamage: number): number => {
  let mainDamageStat: keyof Attributes | null = null

  switch (profession) {
    case "warrior":
      mainDamageStat = "strength"
      break
    case "hunter":
      mainDamageStat = "agility"
      break
    case "mage":
      mainDamageStat = "intellect"
      break
    default:
      mainDamageStat = null
  }

  if (mainDamageStat) {
    const statDamageMultiplier = 1 + (attributes[mainDamageStat] / 10)
    return weaponDamage * statDamageMultiplier
  }

  return weaponDamage
}

export const calculatePlayerArmor = (equipment: Equipment): number => {
  let armorValue = 0

  if (equipment) {
    for (const item of Object.values(equipment)) {
      if (item && 'armor' in item) {
        armorValue += item.armor
      }
    }
  }

  return armorValue
}

export const calculateArmorReduction = (defenderArmor: number, attackerLevel: number) => {
  return (defenderArmor / attackerLevel) > 25 ? 25 : (defenderArmor / attackerLevel)
}

export const calculateResistances = (attributes: Attributes): Resistances => {
  return {
    warriorResistance: attributes['strength'] / 2,
    hunterResistance: attributes['agility'] / 2,
    mageResistance: attributes['intellect'] / 2
  }
}

export const calculateCritChance = (enemyLevel: number, attributes: Attributes): number => {
  if (!attributes) {
    alert('Something went wrong fetching attributes. Setting critChance to 5%')
    return 5
  }

  const luck = attributes['luck']
  let totalCritChance = Math.round((luck * 5) / (enemyLevel * 2))

  // Minimum of 5% crit chance and maximum of 50% crit chance
  if (totalCritChance < 5.00) {
    totalCritChance = 5.00
  } else if (totalCritChance > 50.00) {
    totalCritChance = 50.00
  }

  return totalCritChance
}

export const calculateTotalHP = (level: number, attributes: Attributes): number => {
  if (!attributes) {
    alert('Something went wrong fetching attributes. Setting base HP to 100')
    return 100
  }

  return attributes['stamina'] * 4 * (level + 1)
}

const mapWeaponFamilyToDamageType = (family: string): DamageType => {
  const weaponFamilies: DamageType[] = ["sword", "axe", "mace", "fire", "frost", "arcane", "earth", "air", "bow", "crossbow", null];
  return weaponFamilies.includes(family as DamageType) ? (family as DamageType) : null
}

export const retrievePlayerInformation = (character: Player): CombatInformation => {
  const attributes: Attributes = calculatePlayerAttributes(character.equipment, character.attributes, character.activePotion)
  const damage: Damage = calculateWeaponDamage(character.equipment.weapon)
  const armor: number = calculatePlayerArmor(character.equipment)
  const hp: number = calculateTotalHP(character.level, attributes)
  const classResistances: Resistances = calculateResistances(attributes)

  const playerData = {
    name: character.name,
    level: character.level,
    profession: character.profession,
    attributes,
    damage,
    damageType: character.equipment.weapon ? mapWeaponFamilyToDamageType(character.equipment.weapon.family) : null,
    hp,
    armor,
    classResistances,
    image: character.image,
    loot: null
  }

  return playerData
}

const calculateItemQuantity = (chance: number): number => {
  const fullChances = Math.floor(chance / 100)
  const remainder = chance % 100
  const randomRoll = Math.floor(Math.random() * 100) + 1
  const finalChances = remainder >= randomRoll ? fullChances + 1 : fullChances

  return finalChances
}

const calculateItemQuality = (loot: Loot): number => {
  const roll = Math.random() * 100

  if (roll > 94 && roll <= 98.9 && loot.uncommon?.length) {
    const length = loot.uncommon.length
    return loot.uncommon[Math.floor(Math.random() * length)]
  } else if (roll > 98.9 && roll <= 99.9 && loot.rare?.length) {
    const length = loot.rare.length
    return loot.rare[Math.floor(Math.random() * length)]
  } else if (roll > 99.9 && loot.epic?.length) {
    const length = loot.epic.length
    return loot.epic[Math.floor(Math.random() * length)]
  } else {
    const length = loot.common.length
    return loot.common[Math.floor(Math.random() * length)]
  }
}

export const calculateGold = (level: number, multiplier: number): number => {
  return Math.floor(random(10 + (10 * (level / 2) * (multiplier / 100)), 20 * 20 * ((level / 2) * (multiplier / 100))))
}

export const calculateLoot = (loot: Loot, chance: number): number[] => {
  const finalLoot: number[] = []
  const lootQuantity = calculateItemQuantity(chance)

  for (let i = 0; i < lootQuantity; i++) {
    const foundLoot = calculateItemQuality(loot)
    finalLoot.push(foundLoot)
  }

  return finalLoot
}