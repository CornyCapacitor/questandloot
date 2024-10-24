import { LogEntry } from "@/app/types";
import { attackDescriptions } from "../../db/attackDescriptions";

const randomize = (textArray: string[]) => {
  return textArray[Math.floor(Math.random() * textArray.length)]
}

const parseWeaponText = (attackType: string | null): string => {
  let damageDescription

  if (attackType && attackType in attackDescriptions) {
    const descriptions = attackDescriptions[attackType]
    damageDescription = randomize(descriptions)
  } else {
    damageDescription = 'attacks the target'
  }

  return damageDescription
}

export const parseCombatLog = (combatLog: LogEntry[]): string[] => {
  const parsedCombatLog: string[] = []

  for (const entry of combatLog) {
    const { attacker, target, damage, isCrit, targetHP, attackType } = entry

    const givenAttackType = attackType ? attackType : 'default'

    const attackDescription = `${isCrit ? 'Critical Hit! ' : ''}${attacker} ${parseWeaponText(givenAttackType)} and deals ${damage} points of damage to ${target}. ${target} now has ${targetHP} hit points left.`

    parsedCombatLog.push(attackDescription)
  }

  return parsedCombatLog
}