import { config } from "../config"
import { monsterList } from "../db/monsterList"
import { isDungeonKey } from "../functions/checkers"
import { calculateResistances, calculateTotalHP, random } from "../functions/combatCalculations"
import { Attributes, Damage, DungeonKey, Monster, MonsterInfo, Player, Profession, Resistances } from "../types"

const calculateMonsterStats = (level: number, isDungeonMonster: boolean) => {
  const multiplier = isDungeonMonster ? config.dungeon.combatMultiplier : 1
  const attributes: Attributes = {
    strength: Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier),
    agility: Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier),
    intellect: Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier),
    stamina: Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier),
    luck: Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier)
  }

  const damage = {
    min: Math.floor((2 + (level - 1) * 2) + config.monster.damage.min * multiplier),
    max: Math.floor((2 + (level - 1) * 2) + config.monster.damage.max * multiplier)
  }

  const armor = Math.floor(5 + (level - 1) * random((level - 1), (level + 1)) * multiplier)

  return {
    attributes: attributes,
    damage: damage,
    armor: armor
  }
}

const randomizeMonster = (zone: string, isDungeonMonster: boolean) => {
  const monsterArray = monsterList[zone]

  if (isDungeonMonster) {
    const chosenMonster = {
      ...monsterArray[random(0, (monsterArray.length - 1))],
      loot: {
        common: [1],
        uncommon: [2],
        rare: [3],
        epic: [3]
      }
    }
    return chosenMonster
  } else {
    return monsterArray[random(0, (monsterArray.length - 1))]
  }
}

const randomizeProfession = () => {
  const professions: Profession[] = ["warrior", "hunter", "mage"]

  return professions[Math.floor(Math.random() * professions.length)]
}

export const calculateDungeonMonsterLevel = (player: Player, combatType: DungeonKey): number => {
  const progress = player.dungeon.dungeonProgress[combatType]
  const dungeonIndex = Number(combatType.replace("dungeon", ""))
  return (config.dungeon.baseLevelMultiplier * dungeonIndex) + (progress === 7 ? config.dungeon.bossLevel.thirdFromEnd : progress === 8 ? config.dungeon.bossLevel.secondFromEnd : progress === 9 ? config.dungeon.bossLevel.last : progress)
}

export const generateMonster = (player: Player, zone: string, combatType: DungeonKey | 'journey'): Monster => {
  const isDungeonMonster = isDungeonKey(combatType)
  const chosenMonster: MonsterInfo = randomizeMonster(zone, isDungeonMonster)
  const level: number = isDungeonMonster ? calculateDungeonMonsterLevel(player, combatType) : player.level
  const profession: Profession = randomizeProfession()
  const attributes: Attributes = calculateMonsterStats(level, isDungeonMonster).attributes
  const damage: Damage = calculateMonsterStats(level, isDungeonMonster).damage
  const armor: number = calculateMonsterStats(level, isDungeonMonster).armor
  const hp: number = calculateTotalHP(level, attributes)
  const classResistances: Resistances = calculateResistances(attributes)

  const monsterData = {
    name: chosenMonster.name,
    level,
    profession,
    attributes,
    damage,
    damageType: null,
    hp,
    armor,
    classResistances,
    image: chosenMonster.image,
    loot: chosenMonster.loot
  }

  return monsterData
}