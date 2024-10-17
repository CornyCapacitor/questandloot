import { calculateLoot, calculateTotalArmor, calculateTotalDamage, retrieveCharacterInformation } from "./combatCalculations";
import { item_list } from "./itemList";
import { Enemy, LogEntry, Player, Weapon } from "./types";

export const combat = (participient1: Player, participient2: Player | Enemy, journeyLootChance: number) => {
  // Preparation
  const character1 = retrieveCharacterInformation(participient1)
  const character2 = retrieveCharacterInformation(participient2)

  // Testing purpose
  // console.log('Character1:', character1)
  // console.log('Character2:', character2)

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

    // Calculate damage and enemy armor
    const isCrit = Math.round(Math.random() * 100) <= attacker.critChance

    // Calculating base damage from equipment, attributes and potion
    const flatDamage = calculateTotalDamage(attacker.equipment, attacker.profession, attacker.flat_attributes, attacker.potion)

    // Calculating defender's damage reduction from armor. Maximum of 25% damage reduction
    const damageReduction = Math.floor(calculateTotalArmor(defender.equipment) / attacker.level) / 100 > 0.25 ? 0.25 : Math.floor(calculateTotalArmor(defender.equipment) / attacker.level) / 100

    // Optionally applying critical damage multiplier
    const baseDamage = isCrit ? Math.floor(flatDamage * 1.5) : flatDamage

    // Calculating final damage result minus defender's damage reduction
    const damage = Math.floor(baseDamage - (damageReduction * baseDamage)) < 1 ? 1 : Math.floor(baseDamage - (damageReduction * baseDamage))

    // Testing purpose
    // console.log(`${attacker.name} isCrit: ${isCrit}, flatDamage: ${flatDamage}, damageReduction: ${damageReduction}, baseDamage: ${baseDamage}, damage: ${damage}`)

    // Apply damage
    if (HP1 <= 0 || HP2 <= 0) {
      // Last entry before loop breaks
      const logEntry = {
        turn: turn,
        attacker: attacker.name,
        title: attacker.title,
        target: defender.name,
        damage: damage,
        isCrit: isCrit,
        targetHP: turn % 2 === 0 ? HP1 : HP2,
        HP1: HP1,
        maxHP1: maxHP1,
        HP2: HP2,
        maxHP2: maxHP2,
        attackType: {
          weapon1: attacker.equipment.weapon1 && item_list[attacker.equipment.weapon1] !== undefined ? (item_list[attacker.equipment.weapon1] as Weapon).family : null,
          weapon2: attacker.equipment.weapon2 && item_list[attacker.equipment.weapon2] !== undefined ? (item_list[attacker.equipment.weapon2] as Weapon).family : null
        }
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
      title: attacker.title,
      target: defender.name,
      damage: damage,
      isCrit: isCrit,
      targetHP: turn % 2 === 0 ? HP1 : HP2,
      HP1: HP1,
      maxHP1: maxHP1,
      HP2: HP2,
      maxHP2: maxHP2,
      attackType: {
        weapon1: attacker.equipment.weapon1 && item_list[attacker.equipment.weapon1] !== undefined ? (item_list[attacker.equipment.weapon1] as Weapon).family : null,
        weapon2: attacker.equipment.weapon2 && item_list[attacker.equipment.weapon2] !== undefined ? (item_list[attacker.equipment.weapon2] as Weapon).family : null
      }
    }

    combatLog.push(logEntry)
  }

  return {
    isWin: HP1 > 0 ? true : false,
    combatLog: combatLog,
    loot: HP1 > 0 && 'loot' in character2 ? calculateLoot(character2.loot, journeyLootChance) : null
  }
}