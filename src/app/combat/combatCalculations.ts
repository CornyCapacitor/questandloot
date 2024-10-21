import { item_list } from "../db/itemList"
import { ActivePotion, Attributes, CombatInformation, Damage, DamageType, Equipment, Loot, Player, Profession, Resistances, Weapon } from "../types"

export const random = (number1: number, number2: number): number => {
  return Math.floor(Math.random() * (number2 - number1 + 1) + number1)
}

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

  if (activePotion) {
    const potionId = activePotion.potionId
    const potion = item_list[potionId]

    if (potion.type !== "potion") {
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
  const weaponFamilies: DamageType[] = ["sword", "axe", "mace", "dagger", "fire", "frost", "arcane", "earth", "air", "bow", "crossbow", "shield", null];
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

export const calculateLoot = (loot: Loot, chance: number): { gold: number, loot: number[] } => {
  const finalLoot: number[] = []
  let finalGold = 0
  const lootQuantity = calculateItemQuantity(chance)

  for (let i = 0; i < lootQuantity; i++) {
    const foundLoot = calculateItemQuality(loot)
    finalLoot.push(foundLoot)
  }

  if (loot.gold) {
    finalGold += loot.gold * (chance / 100)
  }

  return {
    gold: finalGold,
    loot: finalLoot,
  }
}