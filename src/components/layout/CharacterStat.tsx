'use client'

import { config } from "@/app/config"
import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { calculateArmorReduction, calculateCritChance, calculateDamage, calculatePlayerArmor, calculateTotalHP, calculateWeaponDamage } from "@/app/functions/combatCalculations"
import { removeGold } from "@/app/functions/manageItems"
import { useSocket } from "@/app/middleware/SocketContext"
import { Attributes, Player } from "@/app/types"
import Image from "next/image"
import { errorToast, successToast } from "../ui/toasts"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import GoldIcon from "./GoldIcon"

type Stats = 'strength' | 'agility' | 'intellect' | 'stamina' | 'luck'

const CharacterStat = ({ stat, player }: { stat: Stats | 'armor', player: Player }) => {
  const { updatePlayer } = useSocket()

  const calculateAttributeCost = (attribute: keyof Attributes) => {
    const currentAttribute = player.attributes[attribute]
    const multiplyPower = currentAttribute - 10
    const multiplier = config.attributeCostMultiplier

    if (multiplyPower <= 0) {
      return config.baseAttributeCost
    }

    return Math.floor(config.baseAttributeCost * Math.pow(multiplier, multiplyPower))
  }

  const statDescriptions = {
    strength: {
      name: 'Strength',
      profession: 'warrior',
      attributeTooltip: 'Increases defense against warriors.',
      professionTooltip: 'Increases the character attack.',
    },
    agility: {
      name: 'Agility',
      profession: 'hunter',
      attributeTooltip: 'Increases defense against hunters.',
      professionTooltip: 'Increases the character attack.',
    },
    intellect: {
      name: 'Intellect',
      profession: 'mage',
      attributeTooltip: 'Increases defense against mages.',
      professionTooltip: 'Increase the character attack.',
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
    <span>Loading stat</span>
  )

  const StrengthAgilityIntellect = ({ stat, className, header }: { stat: 'strength' | 'agility' | 'intellect', className?: string, header?: boolean }) => {
    const profession = player.profession
    const object = statDescriptions[stat]

    return (
      <div>
        {header && (
          <h1>{profession === object.profession ? object.professionTooltip : object.attributeTooltip}</h1>
        )}
        {profession === object.profession ? (
          <div className={`${className}`}>
            <h2>Damage:</h2>
            <span>~{calculateDamage(player.attributes, player.profession, ((calculateWeaponDamage(player.equipment.weapon)).min + calculateWeaponDamage(player.equipment.weapon).max) / 2).toFixed(1)}</span>
          </div>
        ) : stat === 'strength' ? (
          <div className={`${className}`}>
            <h2>Defense:</h2>
            <span>~{Math.floor((calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).strength) / 2).toFixed(0)}</span>
          </div>
        ) : stat === 'agility' ? (
          <div className={`${className}`}>
            <h2>Evasion:</h2>
            <span>~{Math.floor((calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).agility) / 2).toFixed(0)}</span>
          </div>
        ) : (
          <div className={`${className}`}>
            <h2>Resistance:</h2>
            <span>~{Math.floor((calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion).intellect) / 2).toFixed(0)}</span>
          </div>
        )}

      </div>
    )
  }

  const StaminaLuckArmor = ({ stat, className, header }: { stat: 'stamina' | 'luck' | 'armor', className?: string, header?: boolean }) => {
    const object = statDescriptions[stat]

    return (
      <div>
        {header && (
          <h1>{object.attributeTooltip}</h1>
        )}
        {stat === 'stamina' ? (
          <div className={`${className}`}>
            <h2>Hit points:</h2>
            <span>{calculateTotalHP(player.level, player.attributes).toFixed(0)}</span>
          </div>
        ) : stat === 'luck' ? (
          <div className={`${className}`}>
            <h2>Crit chance:</h2>
            <span>~{Math.floor(calculateCritChance(player.level, player.attributes)).toFixed(0)}%</span>
          </div>
        ) : (
          <div className={`${className}`}>
            <h2>{header ? 'Damage reduction:' : 'Reduction:'}</h2>
            <span>~{Math.floor(calculateArmorReduction(calculatePlayerArmor(player.equipment), player.level)).toFixed(0)}%</span>
          </div>
        )}

      </div>
    )
  }

  const attributeKeys: (keyof Attributes)[] = ['strength', 'agility', 'intellect', 'stamina', 'luck']

  const handleRaiseAttribute = (attribute: keyof Attributes) => {
    if (!player) return

    const cost = calculateAttributeCost(attribute)

    if (cost > player.gold) {
      errorToast({
        text: `Not enough money to upgrade ${attribute}.`
      })
      return
    }

    const attributes: Attributes = player.attributes
    attributes[attribute] += 1

    updatePlayer({
      ...player,
      attributes: attributes,
      gold: removeGold(cost, player.gold)
    })

    successToast({
      text: `Succesfully upgraded ${attribute}. Your gold should be now ${removeGold(cost, player.gold)}`
    })
  }

  return (
    <div className="flex w-full justify-between">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex flex-col w-2/3">
            <div className="w-full flex justify-between text-orange-300 font-semibold">
              <h1>{statDescriptions[stat].name}:</h1>
              <span>{Math.floor(stat !== 'armor' ? calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion)[stat] : calculatePlayerArmor(player.equipment))}</span>
            </div>
            <div className="w-full">
              {stat === 'strength' ? (
                <StrengthAgilityIntellect stat={stat} className="flex w-full justify-between text-gray-300" />
              ) : stat === 'agility' ? (
                <StrengthAgilityIntellect stat={stat} className="flex w-full justify-between text-gray-300" />
              ) : stat === 'intellect' ? (
                <StrengthAgilityIntellect stat={stat} className="flex w-full justify-between text-gray-300" />
              ) : stat === 'stamina' ? (
                <StaminaLuckArmor stat={stat} className="flex w-full justify-between text-gray-300" />
              ) : stat === 'luck' ? (
                <StaminaLuckArmor stat={stat} className="flex w-full justify-between text-gray-300" />
              ) : (
                <StaminaLuckArmor stat={stat} className="flex w-full justify-between text-gray-300" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {stat === 'strength' ? (
              <div className="flex gap-4 items-center">
                <StrengthAgilityIntellect stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            ) : stat === 'agility' ? (
              <div className="flex gap-4 items-center">
                <StrengthAgilityIntellect stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            ) : stat === 'intellect' ? (
              <div className="flex gap-4 items-center">
                <StrengthAgilityIntellect stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            ) : stat === 'stamina' ? (
              <div className="flex gap-4 items-center">
                <StaminaLuckArmor stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            ) : stat === 'luck' ? (
              <div className="flex gap-4 items-center">
                <StaminaLuckArmor stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            ) : (
              <div className="flex gap-4 items-center">
                <StaminaLuckArmor stat={stat} header={true} className="flex gap-1" />
                <div>
                  <Image src={`/assets/attributes/${stat}.png`} alt={`${stat} icon`} width={50} height={50} className="rounded-md border" unoptimized />
                </div>
              </div>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex w-1/3 items-center justify-center">
        {attributeKeys.map((key) => (
          stat === key && (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger>
                  <Image width={50} height={50} src={`/plus_icon.png`} alt={`${stat} icon`} className={`rounded-md cursor-pointer p-1 border border-slate-700 transition hover:bg-slate-700 bg-slate-600 ${calculateAttributeCost(stat) > player.gold ? 'grayscale' : ''}`} onClick={() => handleRaiseAttribute(stat)} />
                </TooltipTrigger>
                <TooltipContent className="flex items-center justify-center gap-2">
                  <GoldIcon />
                  <span className={`font-semibold ${calculateAttributeCost(stat) > player.gold ? 'text-red-500' : 'text-white'}`}>{calculateAttributeCost(stat)}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        ))}
      </div>
    </div>
  )
}

export default CharacterStat