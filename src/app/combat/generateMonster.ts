import { monsterList } from "../db/monsterList"
import { Attributes, DamageType, Monster, Profession, Resistances } from "../types"
import { calculateResistances, calculateTotalHP, random } from "./combatCalculations"

const calculateMonsterStats = (level: number) => {
  const attributes: Attributes = {
    strength: 5 + (level - 1) * random((level - 1), (level + 1)),
    agility: 5 + (level - 1) * random((level - 1), (level + 1)),
    intellect: 5 + (level - 1) * random((level - 1), (level + 1)),
    stamina: 5 + (level - 1) * random((level - 1), (level + 1)),
    luck: 5 + (level - 1) * random((level - 1), (level + 1))
  }

  const damage = {
    min: (2 + (level - 1) * 2) - 1,
    max: (2 + (level - 1) * 2) + 1
  }

  const armor = 5 + (level - 1) * random((level - 1), (level + 1))

  return {
    attributes: attributes,
    damage: damage,
    armor: armor
  }
}

const randomizeMonster = () => {
  return monsterList[random(0, (monsterList.length - 1))]
}

const randomizeProfession = () => {
  const professions: Profession[] = ["warrior", "hunter", "mage"]

  return professions[Math.floor(Math.random() * professions.length)]
}

export const generateMonster = (_level: number) => {
  const chosenMonster: Monster = randomizeMonster()

  const level: number = _level
  const profession: Profession = randomizeProfession()
  const attributes: Attributes = calculateMonsterStats(level).attributes
  const damage: DamageType = calculateMonsterStats(level).damage
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