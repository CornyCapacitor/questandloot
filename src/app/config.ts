import { ArmorProficiency, Attributes, Damage, PotionQuality, Profession, Quality } from "./types";

export const config = {
  // 
  // Equipment static variables
  // 

  // Quantity of randomized item options based on player level from equipment arrays
  itemsPerDraw: 3,

  // Miltuplier of raising attribute level cost & base attribute cost
  attributeCostMultiplier: 1.09,
  baseAttributeCost: 10,

  // Minimum and maximum of item's price, multiplied by level
  // formula: ___
  sellPrice: {
    min: 10,
    max: 15,
  },

  // Possibilities of item quality (100 - quality) in percentages
  qualityCalculation: {
    epic: 99.9,
    rare: 95,
    uncommon: 90,
  },

  // Items shown in shop stock
  itemsInShop: 6,

  // Price to refresh the shop
  // formula: level * multiplier
  refreshPriceMultiplier: 100,

  // Minimum and maximum random stats in item
  itemAttributesCount: {
    min: 1,
    max: 3
  },

  // Quality bonus' multipliers
  qualityMultipliers: {
    // Multiplier for damage for every quality
    // formula: wepMin * level * qualityMultiplier * professionMultiplier
    damage: {
      epic: 1.5,
      rare: 1.3,
      uncommon: 1.1,
      common: 1.0
    } as Record<Quality, number>,

    // Multiplier for armor for every quality
    // formula: armMin * level * qualityMultiplier * professionMultiplier
    armor: {
      epic: 1.5,
      rare: 1.3,
      uncommon: 1.1,
      common: 1.0
    } as Record<Quality, number>
  },

  // Profession bonus' multipliers
  professionMultipliers: {
    // Multiplier for damage for every profession
    // formula: wepMin * level * qualityMultiplier * professionMultiplier
    weaponDamage: {
      mage: 2.0,
      hunter: 1.7,
      warrior: 1.2
    } as Record<Profession, number>,

    // Multiplier for armor for every profession
    // formula: armMin * level * qualityMultiplier * professionMultiplier
    armor: {
      warrior: 3.0,
      hunter: 2.0,
      mage: 1.0
    } as Record<Profession, number>,

    levelUp: {
      warrior: {
        strength: 2,
        agility: 0,
        intellect: 0,
        stamina: 1,
        luck: 1
      } as Attributes,
      hunter: {
        strength: 0,
        agility: 2,
        intellect: 0,
        stamina: 1,
        luck: 1
      } as Attributes,
      mage: {
        strength: 0,
        agility: 0,
        intellect: 2,
        stamina: 0,
        luck: 2
      } as Attributes
    } as Record<Profession, Attributes>
  },

  // Armor proficiency
  armorProficiency: {
    warrior: 'heavy',
    hunter: 'medium',
    mage: 'light'
  } as Record<Profession, ArmorProficiency>,

  // Base weapon damage numbers to multiply based on level, quality and profession
  // formula: wepMin: min.min * level * professionMultiplier * qualityMultiplier to min.max * level * professionMultiplier * qualityMultiplier; wepMax: max.min * level * professionMultiplier * qualityMultiplier to max.max * level * professionMultiplier * qualityMultiplier
  baseWeaponDamage: {
    min: {
      min: 3,
      max: 5
    } as Damage,
    max: {
      min: 5,
      max: 7
    } as Damage
  },

  // Base armor numbers to multiply based on level, quality and profession
  // formula: armMin * level * professionMultiplier * qualityMultiplier to armMax * level * professionMultiplier * qualityMultiplier
  baseArmor: {
    min: 1,
    max: 2
  },

  // 
  // Journey static variables
  // 

  // NEEDS EDIT
  // Option times in minutes and their reward multiplier
  availableTimeOptions: {
    options: ['30', '60', '120', '240', '360', '480', '600', '720'],
    multipliers: [50, 100, 190, 360, 510, 640, 750, 840]
  },

  // 
  // Monster static variables
  // 

  monster: {
    // For every attribute base value
    // formula: baseAttribute + (level - 1) * random((level - 1) to (level + 1))
    baseAttribute: 5,

    // Damage flat scalable
    // formula: damMin: (2 + (level - 1) * 2) + min; damMax: (2 + (level - 1) * 2) + max
    damage: {
      min: -1,
      max: 1
    } as Damage,

    // Armor flat scalable
    // formula: armor + (level - 1) * random((level - 1) to (level + 1))
    armor: 5
  },

  // 
  // Combat static variables
  // 

  // Critical damage multiplier
  critDamageMultiplier: 2,

  // Maximum amount of damage reduction from worn armor
  maxArmorPercentage: 25,

  // Flat damage reduction divider based on side-stat (str/agi/int)
  // formula: stat / divider
  classResistanceDivider: 2,

  // Minimum and maximum crit chance for everyone
  critChance: {
    min: 5,
    max: 50
  },

  // Health multiplier
  // formula: 
  hpMultiplier: 4,

  // Minimum flat, maximum flat and dungeon multiplier of gold gain from journeys
  // formula: (min + min * (level / 2) * (journeyMultiplier / 100) ) to (max + max * (level / 2) * (journeyMultiplier / 100) )
  gold: {
    min: 10,
    max: 15,
    dungeonMultiplier: 10,
  },

  // Minimum flat, maximum flat and dungeon multiplier of experience gain from journeys + bonus divider
  // formula: (min + min * (level / 2) * (journeyMulriplier / 100) * divider) to (max + max * (level / 2) * (journeyMultiplier / 100) * divider)
  experience: {
    min: 30,
    max: 33,
    divider: 0.10,
    dungeonMultiplier: 10,
  },

  // 
  // Potion static variables
  // 

  // Chances and strength of each potion quality
  potionStrength: {
    epic: {
      chance: 95.0,
      quality: 'epic' as PotionQuality,
      strength: 25
    },
    rare: {
      chance: 80.0,
      quality: 'rare' as PotionQuality,
      strength: 15
    },
    uncommon: {
      quality: 'uncommon' as PotionQuality,
      strength: 10
    }
  },

  // 
  // Dungeon static variables
  // 

  // Base dungeon values
  dungeon: {
    baseLevelMultiplier: 10,
    bossLevel: {
      thirdFromEnd: 9,
      secondFromEnd: 12,
      last: 15
    },
    refreshTime: 0.5, // Minutes
    combatMultiplier: 1.2,
  },

  // Leaderboards
  leaderboards: {
    limit: 5,
  }
}