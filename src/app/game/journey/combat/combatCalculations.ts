import { config } from "@/app/config"
import { Attributes, CombatInformation, Damage, DamageType, Equipment, Loot, Player, Profession, Quality, Resistances, Weapon } from "@/app/types"
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
  return (defenderArmor / attackerLevel) > config.maxArmorPercentage ? config.maxArmorPercentage : (defenderArmor / attackerLevel)
}

export const calculateResistances = (attributes: Attributes): Resistances => {
  return {
    warriorResistance: attributes['strength'] / config.classResistanceDivider,
    hunterResistance: attributes['agility'] / config.classResistanceDivider,
    mageResistance: attributes['intellect'] / config.classResistanceDivider
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
  if (totalCritChance < config.critChance.min) {
    totalCritChance = config.critChance.min
  } else if (totalCritChance > config.critChance.max) {
    totalCritChance = config.critChance.max
  }

  return totalCritChance
}

export const calculateTotalHP = (level: number, attributes: Attributes): number => {
  if (!attributes) {
    alert('Something went wrong fetching attributes. Setting base HP to 100')
    return 100
  }

  return attributes['stamina'] * config.hpMultiplier * (level + 1)
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

export const calculateQuality = (): Quality => {
  const roll = random(1, 100)

  if (roll > config.qualityCalculation.epic) {
    return 'epic'
  } else if (roll >= config.qualityCalculation.rare) {
    return 'rare'
  } else if (roll >= config.qualityCalculation.uncommon) {
    return 'uncommon'
  } else {
    return 'common'
  }
}

const calculateItemQuality = (loot: Loot): number => {
  const roll = Math.random() * 100

  if (roll >= config.qualityCalculation.epic && loot.epic?.length) {
    const length = loot.epic.length
    return loot.epic[Math.floor(Math.random() * length)]
  } else if (roll >= config.qualityCalculation.rare && loot.rare?.length) {
    const length = loot.rare.length
    return loot.rare[Math.floor(Math.random() * length)]
  } else if (roll >= config.qualityCalculation.uncommon && loot.uncommon?.length) {
    const length = loot.uncommon.length
    return loot.uncommon[Math.floor(Math.random() * length)]
  } else {
    const length = loot.common.length
    return loot.common[Math.floor(Math.random() * length)]
  }
}

export const calculateGold = (level: number, multiplier: number, dungeon: boolean): number => {
  const min = config.gold.min + (config.gold.min * (level / 2) * (multiplier / 100))
  const max = config.gold.max + (config.gold.max * (level / 2) * (multiplier / 100))
  return Math.floor(random(min, max)) * (dungeon ? config.gold.dungeonMultiplier : 1)
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

export const calculateExperience = (level: number, journeyMultiplier: number, dungeon: boolean): number => {
  const min = config.experience.min + (config.experience.min * (level / 2) * config.experience.divider)
  const max = config.experience.max + (config.experience.max * (level / 2) * config.experience.divider)
  return Math.floor(random(min, max) * (journeyMultiplier / 100)) * (dungeon ? config.experience.dungeonMultiplier : 1)
}