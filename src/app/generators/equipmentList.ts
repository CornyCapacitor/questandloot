import { WeaponFamily } from "../types"

type SingleWeapon = {
  name: string,
  description: string,
  image: string,
}

export const weapons: { [key in WeaponFamily]: SingleWeapon[] } = {
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