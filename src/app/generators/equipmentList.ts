import { ArmorSlot, JewelerySlot, WeaponFamily } from "../types"

type Item = {
  name: string,
  description: string,
  image: string,
}

export const weapons: { [key in WeaponFamily]: Item[] } = {
  'sword': [
    {
      name: 'Training Sword',
      description: 'A fair training sword, perfect for new cadets.',
      image: 'training_sword.png'
    }
  ],
  'axe': [
    {
      name: 'Battle Axe',
      description: 'A heavy axe designed for delivering powerful blows in battle.',
      image: 'battle_axe.png'
    }
  ],
  'mace': [
    {
      name: 'Spiked Mace',
      description: 'A brutal weapon with spikes to cause maximum damage.',
      image: 'spiked_mace.png'
    }
  ],
  'fire': [
    {
      name: 'Fire Staff',
      description: 'A staff imbued with the essence of fire, capable of unleashing flames on your foes.',
      image: 'fire_staff.png'
    }
  ],
  'frost': [
    {
      name: 'Frost Staff',
      description: 'A staff that channels the power of ice to freeze enemies and slow their movements.',
      image: 'frost_staff.png'
    }
  ],
  'arcane': [
    {
      name: 'Arcane Staff',
      description: 'A mystical staff that amplifies arcane magic, enhancing spell potency.',
      image: 'arcane_staff.png'
    }
  ],
  'earth': [
    {
      name: 'Earth Staff',
      description: 'A sturdy staff that draws power from the earth, allowing control over rock and soil.',
      image: 'earth_staff.png'
    }
  ],
  'air': [
    {
      name: 'Air Staff',
      description: 'A graceful staff that harnesses the winds, enabling swift and agile spells.',
      image: 'air_staff.png'
    }
  ],
  'bow': [
    {
      name: 'Longbow',
      description: 'A traditional longbow known for its accuracy and range.',
      image: 'longbow.png'
    }
  ],
  'crossbow': [
    {
      name: 'Heavy Crossbow',
      description: 'A powerful crossbow that delivers devastating shots.',
      image: 'heavy_crossbow.png'
    }
  ]
}

export const lightArmors: { [key in ArmorSlot]: Item[] } = {
  'head': [
    {
      name: "Apprentice's Hood",
      description: 'A simple hood worn by novice mages.',
      image: 'placeholderItem.svg'
    }
  ],
  'chest': [
    {
      name: "Apprentice's Robe",
      description: 'A lightweight robe providing minimal protection, designed for apprentice spellcasters.',
      image: 'placeholderItem.svg'
    }
  ],
  'legs': [
    {
      name: "Apprentice's Pants",
      description: 'Comfortable pants that allow for easy movement during spell practice.',
      image: 'placeholderItem.svg'
    }
  ],
  'feet': [
    {
      name: "Apprentice's Boots",
      description: 'Simple boots that offer modest protection and comfort for new mages.',
      image: 'placeholderItem.svg'
    }
  ],
  'hands': [
    {
      name: "Apprentice's Gloves",
      description: 'Gloves that provide basic protection while handling magical items.',
      image: 'placeholderItem.svg'
    }
  ],
  'belt': [
    {
      name: "Apprentice's Belt",
      description: 'No description yet',
      image: 'placeholderItem.svg'
    }
  ]
}

export const mediumArmors: { [key in ArmorSlot]: Item[] } = {
  'head': [
    {
      name: "Scout's Hood",
      description: 'A durable hood designed to offer protection without sacrificing stealth.',
      image: 'scouts_hood.png'
    }
  ],
  'chest': [
    {
      name: "Scout's Jacket",
      description: 'A lightweight, reinforced jacket ideal for long expeditions and quick movements.',
      image: 'scouts_jacket.png'
    }
  ],
  'legs': [
    {
      name: "Scout's Pants",
      description: 'Pants tailored for agility and endurance, suitable for traversing rough terrain.',
      image: 'scouts_pants.png'
    }
  ],
  'feet': [
    {
      name: "Scout's Boots",
      description: 'Sturdy boots providing excellent traction and support for scouting missions.',
      image: 'scouts_boots.png'
    }
  ],
  'hands': [
    {
      name: "Scout's Gloves",
      description: 'Gloves offering both grip and protection, ideal for handling tools and climbing.',
      image: 'scouts_gloves.png'
    }
  ],
  'belt': [
    {
      name: "",
      description: '',
      image: ''
    }
  ]
}


export const heavyArmors: { [key in ArmorSlot]: Item[] } = {
  'head': [
    {
      name: "Cadet's Helm",
      description: 'A sturdy helm worn by cadets during their combat training.',
      image: 'cadets_helm.png'
    }
  ],
  'chest': [
    {
      name: "Cadet's Breastplate",
      description: 'A solid breastplate offering enhanced protection for cadets in the field.',
      image: 'cadets_breastplate.png'
    }
  ],
  'legs': [
    {
      name: "Cadet's Legguards",
      description: 'Heavy legguards providing substantial defense without sacrificing mobility.',
      image: 'cadets_legguards.png'
    }
  ],
  'feet': [
    {
      name: "Cadet's Greaves",
      description: 'Reinforced greaves designed to protect cadets during intense combat training.',
      image: 'cadets_greaves.png'
    }
  ],
  'hands': [
    {
      name: "Cadet's Gauntlets",
      description: 'Gauntlets offering excellent hand protection while maintaining dexterity.',
      image: 'cadets_gauntlets.png'
    }
  ],
  'belt': [
    {
      name: "",
      description: '',
      image: ''
    }
  ]
}

export const shields: Item[] = [
  {
    name: "Defender's Shield",
    description: 'A sturdy shield used by seasoned warriors to block even the strongest attacks.',
    image: 'defenders_shield.png'
  }
]

export const jewelery: { [key in JewelerySlot]: Item[] } = {
  'neck': [
    {
      name: "Amulet of Clarity",
      description: 'An enchanted amulet that clears the mind, enhancing focus and mental clarity.',
      image: 'amulet_of_clarity.png'
    }
  ],
  'ring': [
    {
      name: "Ring of Fortitude",
      description: 'A ring that grants its wearer increased endurance and resilience.',
      image: 'ring_of_fortitude.png'
    }
  ]
}