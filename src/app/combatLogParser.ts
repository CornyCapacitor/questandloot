import { attackDescriptions } from "./attackDescriptions";
import { LogEntry } from "./types";

const randomize = (textArray: string[]) => {
  return textArray[Math.floor(Math.random() * textArray.length)]
}

const parseWeaponText = (attackType: string | null) => {
  let damageDescription

  if (attackType && attackType in attackDescriptions) {
    const descriptions = attackDescriptions[attackType]
    damageDescription = randomize(descriptions)
  } else {
    damageDescription = 'attacks the target'
  }

  return damageDescription
}

export const parseCombatLog = (combatLog: LogEntry[]) => {
  const parsedCombatLog: string[] = []

  for (const entry of combatLog) {
    const { attacker, target, damage, isCrit, targetHP, attackType } = entry

    const attackTypeChoice = attackType.weapon1 && !attackType.weapon2 ? attackType.weapon1 : !attackType.weapon1 && attackType.weapon2 ? attackType.weapon2 : Math.floor(Math.random() * 2) === 0 ? attackType.weapon1 : attackType.weapon2

    const attackDescription = `${isCrit ? 'Critical Hit! ' : ''}${attacker} ${parseWeaponText(attackTypeChoice)} and deals ${damage} points of damage to ${target}. ${target} now has ${targetHP} hit points left.`

    parsedCombatLog.push(attackDescription)
  }

  return parsedCombatLog
}