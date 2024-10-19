import { LogEntry, Monster, Player } from "../types";
import { calculateCritChance, calculateDamage, calculateLoot, random, retrievePlayerInformation } from "./combatCalculations";

export const combat = (participient1: Player, participient2: Monster, journeyLootChance: number) => {
  // Preparation
  const character1 = retrievePlayerInformation(participient1)
  const character2 = participient2

  // Initialize HP
  let HP1 = character1.hp
  const maxHP1 = character1.hp
  let HP2 = character2.hp
  const maxHP2 = character2.hp

  // Start fight
  let turn = 0
  const combatLog: LogEntry[] = []

  while (HP1 > 0 && HP2 > 0) {
    turn++

    // Determine attacker and defender
    const attacker = turn % 2 === 0 ? character2 : character1;
    const defender = turn % 2 === 0 ? character1 : character2;

    // Calculating crit chance
    const critChance = calculateCritChance(defender.level, attacker.attributes)
    const critDamageMultiplier = 2
    const isCrit = Math.round(Math.random() * 100) <= critChance

    // Calculating defender's damage reduction from armor. Maximum of 25% damage reduction
    const armorReduction = (defender.armor / attacker.level) > 25 ? 25 : (defender.armor / attacker.level)

    // Calculating defender's class resistances
    const classResistance = attacker.profession === 'warrior' ? Math.floor(defender.classResistances.warriorResistance) : attacker.profession === 'hunter' ? Math.floor(defender.classResistances.hunterResistance) : attacker.profession === 'mage' ? Math.floor(defender.classResistances.mageResistance) : 0

    // Calculating base attacker's damage
    const baseDamage = random(calculateDamage(attacker.attributes, attacker.profession, attacker.damage.min), calculateDamage(attacker.attributes, attacker.profession, attacker.damage.max))

    // Calculating final damage result and applying armor & class resistances
    const flatDamage = baseDamage * (isCrit ? critDamageMultiplier : 1)
    const damage = flatDamage - Math.floor((flatDamage * (armorReduction / 100))) - classResistance < 1 ? 1 : flatDamage - Math.floor((flatDamage * (armorReduction / 100))) - classResistance

    // console.log('Attacker:', attacker.name)
    // console.log('Flat damage:', flatDamage)
    // console.log('Armor reduction:', armorReduction)
    // console.log('Class resistance:', classResistance)
    // console.log('Damage:', damage)

    // Apply damage
    if (HP1 <= 0 || HP2 <= 0) {
      // Last entry before loop breaks
      const logEntry = {
        turn: turn,
        attacker: attacker.name,
        target: defender.name,
        damage: damage,
        isCrit: isCrit,
        targetHP: turn % 2 === 0 ? HP1 : HP2,
        HP1: HP1,
        maxHP1: maxHP1,
        HP2: HP2,
        maxHP2: maxHP2,
        attackType: attacker.damageType
      }

      combatLog.push(logEntry)

      break
    }

    if (turn % 2 === 0) {
      HP1 = Math.max(HP1 - damage, 0)
    } else {
      HP2 = Math.max(HP2 - damage, 0)
    }

    // Log the entry
    const logEntry = {
      turn: turn,
      attacker: attacker.name,
      target: defender.name,
      damage: damage,
      isCrit: isCrit,
      targetHP: turn % 2 === 0 ? HP1 : HP2,
      HP1: HP1,
      maxHP1: maxHP1,
      HP2: HP2,
      maxHP2: maxHP2,
      attackType: attacker.damageType
    }

    combatLog.push(logEntry)
  }

  return {
    isWin: HP1 > 0 ? true : false,
    combatLog: combatLog,
    loot: HP1 > 0 && 'loot' in character2 ? calculateLoot(character2.loot, journeyLootChance) : null
  }
}