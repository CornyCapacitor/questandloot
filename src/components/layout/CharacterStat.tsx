'use client'

import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { calculateArmorReduction, calculateCritChance, calculateDamage, calculatePlayerArmor, calculateTotalHP, calculateWeaponDamage } from "@/app/game/journey/combat/combatCalculations"
import { Player } from "@/app/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

type Stats = 'strength' | 'agility' | 'intellect' | 'stamina' | 'luck'

const CharacterStat = ({ stat, player }: { stat: Stats | 'armor', player: Player }) => {
  const statDescriptions = {
    strength: {
      name: 'Strength',
      profession: 'warrior',
      attributeTooltip: 'Increases defense against warriors.',
      professionTooltip: 'Increases the character attack.',
      attributeTooltip2: '= Strength / 2',
    },
    agility: {
      name: 'Agility',
      profession: 'hunter',
      attributeTooltip: 'Increases defense against hunters.',
      attributeTooltip2: '= Agility / 2',
      professionTooltip: 'Increases the character attack.',
    },
    intellect: {
      name: 'Intellect',
      profession: 'mage',
      attributeTooltip: 'Increases defense against mages.',
      attributeTooltipName: 'Defense',
      attributeTooltipDescription: '= Intellect / 2',
      professionTooltip: 'Increase the character attack.',
      professionTooltipName: 'Damage',
      professionTooltipDescription: '= weapon damage * (1 + Intellect / 10)'
    },
    stamina: {
      name: 'Stamina',
      attributeTooltip: 'Increases character hit points.',
    },
    luck: {
      name: 'Luck',
      attributeTooltip: 'Increases character chance to critically hit.'
    },
    armor: {
      name: 'Armor',
      attributeTooltip: 'Reduces the damage suffered from attacks.'
    }
  }

  if (!player) return (
    <span>Loading character stats...</span>
  )

  const StrengthAgilityIntellectTooltip = ({ stat }: { stat: 'strength' | 'agility' | 'intellect' }) => {
    const profession = player.profession
    const object = statDescriptions[stat]

    return (
      <div>
        <h1>{profession === object.profession ? object.professionTooltip : object.attributeTooltip}</h1>
        {profession === object.profession ? (
          <h2>Damage: ~{calculateDamage(player.attributes, player.profession, ((calculateWeaponDamage(player.equipment.weapon)).min + calculateWeaponDamage(player.equipment.weapon).max) / 2)}</h2>
        ) : stat === 'strength' ? (
          <h2>Defense: ~{(calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).strength) / 2}</h2>
        ) : stat === 'agility' ? (
          <h2>Evasion: ~{(calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).agility) / 2}</h2>
        ) : (
          <h2>Resistance: ~{(calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).intellect) / 2}</h2>
        )}
      </div>
    )
  }

  const StaminaLuckArmorTooltip = ({ stat }: { stat: 'stamina' | 'luck' | 'armor' }) => {
    const object = statDescriptions[stat]

    return (
      <div>
        <h1>{object.attributeTooltip}</h1>
        {stat === 'stamina' ? (
          <h2>Hit points: {calculateTotalHP(player.level, player.attributes)}</h2>
        ) : stat === 'luck' ? (
          <h2>Crit chance: ~{calculateCritChance(player.level, player.attributes)}%</h2>
        ) : (
          <h2>Damage reduction: ~{calculateArmorReduction(calculatePlayerArmor(player.equipment), player.level)}%</h2>
        )}
      </div>
    )
  }

  return (
    <div className="flex w-full justify-between">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex justify-between w-2/3">
            <h1>{statDescriptions[stat].name}:</h1>
            <p>{stat !== 'armor' ? calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion)[stat] : calculatePlayerArmor(player.equipment)}</p>
          </TooltipTrigger>
          <TooltipContent>
            {stat === 'strength' ? (
              <StrengthAgilityIntellectTooltip stat='strength' />
            ) : stat === 'agility' ? (
              <div>
                <StrengthAgilityIntellectTooltip stat='agility' />
              </div>
            ) : stat === 'intellect' ? (
              <StrengthAgilityIntellectTooltip stat='intellect' />
            ) : stat === 'stamina' ? (
              <StaminaLuckArmorTooltip stat='stamina' />
            ) : stat === 'luck' ? (
              <StaminaLuckArmorTooltip stat='luck' />
            ) : (
              <StaminaLuckArmorTooltip stat='armor' />
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <span className="flex w-1/3 items-center justify-end">Icon</span>
    </div>
  )
}

export default CharacterStat