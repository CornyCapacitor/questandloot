import { config } from "../config"
import { monsterList } from "../db/monsterList"
import { calculateResistances, calculateTotalHP, random } from "../functions/combatCalculations"
import { Attributes, Damage, Monster, MonsterInfo, Profession, Resistances } from "../types"

const calculateMonsterStats = (level: number) => {
  const attributes: Attributes = {
    strength: 5 + (level - 1) * random((level - 1), (level + 1)),
    agility: 5 + (level - 1) * random((level - 1), (level + 1)),
    intellect: 5 + (level - 1) * random((level - 1), (level + 1)),
    stamina: 5 + (level - 1) * random((level - 1), (level + 1)),
    luck: 5 + (level - 1) * random((level - 1), (level + 1))
  }

  const damage = {
    min: (2 + (level - 1) * 2) + config.monster.damage.min,
    max: (2 + (level - 1) * 2) + config.monster.damage.max
  }

  const armor = 5 + (level - 1) * random((level - 1), (level + 1))

  return {
    attributes: attributes,
    damage: damage,
    armor: armor
  }
}

const randomizeMonster = (zone: string) => {
  const zoneArray = monsterList[zone]
  return zoneArray[random(0, (zoneArray.length - 1))]
}

const randomizeProfession = () => {
  const professions: Profession[] = ["warrior", "hunter", "mage"]

  return professions[Math.floor(Math.random() * professions.length)]
}

export const generateMonster = (_level: number, zone: string): Monster => {
  const chosenMonster: MonsterInfo = randomizeMonster(zone)

  const level: number = _level
  const profession: Profession = randomizeProfession()
  const attributes: Attributes = calculateMonsterStats(level).attributes
  const damage: Damage = calculateMonsterStats(level).damage
  const armor: number = calculateMonsterStats(level).armor
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