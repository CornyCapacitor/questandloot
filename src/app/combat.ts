import { calculateTotalDamage, retrieveCharacterInformation } from "./combatCalculations";
import { item_list } from "./itemList";
import { Enemy, LogEntry, Player, Weapon } from "./types";

export const combat = (participient1: Player, participient2: Player | Enemy) => {
  // Preparation
  const character1 = retrieveCharacterInformation(participient1)
  const character2 = retrieveCharacterInformation(participient2)

  // Testing purpose
  console.log('Character1:', character1)
  console.log('Character2:', character2)

  // Initialize HP
  const HP1 = character1.hp
  const HP2 = character2.hp

  // Start fight
  let turn = 0
  const combatLog: LogEntry[] = []

  while (HP1 > 0 && HP2 > 0) {
    turn++

    // Determine attacker and defender
    const attacker = turn % 2 === 0 ? character2 : character1;
    const defender = turn % 2 === 0 ? character1 : character2;

    // Calculate damage
    const isCrit = Math.round(Math.random() * 100) <= attacker.critChance
    const baseDamage = calculateTotalDamage(attacker.equipment, attacker.profession, attacker.flat_attributes, attacker.potion)
    const damage = isCrit ? Math.floor(baseDamage * 1.5) : baseDamage

    // Apply damage
    if (defender.hp - damage < 0) {
      defender.hp = 0

      // Last entry before loop breaks
      const logEntry = {
        attacker: attacker.name,
        title: attacker.title,
        target: defender.name,
        damage: damage,
        targetHP: defender.hp,
        attackType: {
          weapon1: attacker.equipment.weapon1 && item_list[attacker.equipment.weapon1] !== undefined ? (item_list[attacker.equipment.weapon1] as Weapon).family : null,
          weapon2: attacker.equipment.weapon2 && item_list[attacker.equipment.weapon2] !== undefined ? (item_list[attacker.equipment.weapon2] as Weapon).family : null
        }
      }
      combatLog.push(logEntry)

      break
    }

    defender.hp -= damage

    // Log the entry
    const logEntry = {
      attacker: attacker.name,
      title: attacker.title,
      target: defender.name,
      damage: damage,
      targetHP: defender.hp,
      attackType: {
        weapon1: attacker.equipment.weapon1 && item_list[attacker.equipment.weapon1] !== undefined ? (item_list[attacker.equipment.weapon1] as Weapon).family : null,
        weapon2: attacker.equipment.weapon2 && item_list[attacker.equipment.weapon2] !== undefined ? (item_list[attacker.equipment.weapon2] as Weapon).family : null
      }
    }

    combatLog.push(logEntry)
  }

  return {
    winner: character1.hp > 0 ? character1.name : character2.name,
    combatLog: combatLog
  }
}