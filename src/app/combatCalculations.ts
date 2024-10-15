import { item_list } from "./itemList"
import { ActivePotion, Attributes, Enemy, Equipment, Player } from "./types"

export const calculateTotalStats = (equipment: Equipment, attributes: Attributes, activePotion: ActivePotion) => {
  // Copy character's statistics
  const totalStats: Attributes = { ...attributes }

  // Apply equipment statistics
  if (equipment) {
    for (const itemId of Object.values(equipment)) {
      if (itemId) {
        const equippedItem = item_list[itemId]

        if (equippedItem && 'attributes' in equippedItem) {
          for (const stat in equippedItem.attributes) {
            if (stat in totalStats) {
              const _stat = stat as keyof Attributes
              totalStats[_stat] += equippedItem.attributes[_stat]
            }
          }
        }
      }
    }
  }

  // Apply potion effect
  if (activePotion) {
    const potionId = activePotion.potionId
    const potion = item_list[potionId]

    if (potion.type !== "potion") {
      console.error('Something went wrong applying a potion buff.')
      return
    }

    if (activePotion.expiringDate < new Date()) {
      console.error('Potion expired, running nullifying function.')
      return
    }

    const potionStat = potion.enchancing.attribute as keyof Attributes
    const potionStrength = potion.enchancing.value
    const potionValue = (potionStrength / 100) * totalStats[potionStat]

    totalStats[potionStat] = (totalStats[potionStat] ?? 0) + potionValue
  }

  return totalStats
}

export const calculateWeaponDamage = (weapon1Id: number | null, weapon2Id: number | null) => {
  const weapon1 = weapon1Id ? item_list[weapon1Id] : null
  const weapon2 = weapon2Id ? item_list[weapon2Id] : null

  const calculateSingleWeapon = (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min + 1))
  }

  // Calculating dual wielding damage
  if (weapon1 && 'damage' in weapon1 && !weapon1.isTwoHanded && weapon2 && 'damage' in weapon2) {
    const weapon1Damage = calculateSingleWeapon(weapon1.damage.min, weapon1.damage.max)
    const weapon2Damage = calculateSingleWeapon(weapon2.damage.min, weapon2.damage.max)

    return weapon1Damage + weapon2Damage
  }
  // Calculating single weapon damage
  else if (weapon1 && 'damage' in weapon1 && !weapon2) {
    return calculateSingleWeapon(weapon1.damage.min, weapon1.damage.max)
  }
  // Calculating bare hand damage
  return calculateSingleWeapon(1, 2)
}

export const calculateTotalDamage = (equipment: Equipment, profession: string, attributes: Attributes, activePotion: ActivePotion) => {
  const totalStats = calculateTotalStats(equipment, attributes, activePotion)
  let mainDamageStat: keyof Attributes | null = null

  switch (profession) {
    case "warrior":
      mainDamageStat = "strength"
      break
    case "rogue":
    case "hunter":
      mainDamageStat = "agility"
      break
    case "mage":
      mainDamageStat = "intellect"
      break
    default:
      mainDamageStat = null
  }

  if (mainDamageStat && totalStats) {
    const weaponDamage = calculateWeaponDamage(equipment.weapon1, equipment.weapon2)
    return weaponDamage + (totalStats[mainDamageStat] || 0)
  }

  return 1
}

export const calculateCritChance = (equipment: Equipment, level: number, attributes: Attributes, activePotion: ActivePotion) => {
  const totalStats = calculateTotalStats(equipment, attributes, activePotion)

  if (!totalStats) {
    console.error('Something went wrong fetching totalStats. Setting critChance to 5%')
    return 5
  }

  const characterLuck = totalStats['luck']
  let totalCritChance = (Math.round(characterLuck / level) * 100) / 100

  // Minimum of 5% crit chance and maximum of 50% crit chance
  if (totalCritChance < 5.00) {
    totalCritChance = 5.00
  } else if (totalCritChance > 50.00) {
    totalCritChance = 50.00
  }

  return totalCritChance
}

export const calculateCharacterHP = (equipment: Equipment, attributes: Attributes, activePotion: ActivePotion) => {
  const totalStats = calculateTotalStats(equipment, attributes, activePotion)

  if (!totalStats) {
    console.error('Something went wrong fetching totalStats. Setting base HP to 10')
    return 10
  }

  return totalStats['stamina'] * 5
}

export const calculateCharacterArmor = (equipment: Equipment) => {
  let totalArmor = 0

  if (equipment) {
    for (const itemId of Object.values(equipment)) {
      if (itemId) {
        const equippedItem = item_list[itemId]

        if (equippedItem && 'armor' in equippedItem) {
          totalArmor += equippedItem.armor
        }
      }
    }
  }

  return totalArmor
}

export const retrieveCharacterInformation = (character: Player | Enemy) => {
  const HP = calculateCharacterHP(character.equipment, character.attributes, character.activePotion)
  const ARM = calculateCharacterArmor(character.equipment)
  const CRIT = calculateCritChance(character.equipment, character.level, character.attributes, character.activePotion)
  const STATS = calculateTotalStats(character.equipment, character.attributes, character.activePotion)

  return {
    name: character.name,
    title: character.title,
    level: character.level,
    profession: character.profession,
    hp: HP,
    armor: ARM,
    critChance: CRIT,
    flat_attributes: character.attributes,
    total_attributes: STATS,
    potion: character.activePotion,
    equipment: character.equipment
  }
}