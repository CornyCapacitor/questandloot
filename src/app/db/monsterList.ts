import { MonsterArray } from "../types";

export const monsterList: MonsterArray[] = [
  {
    name: 'Frost Golem',
    image: 'frost_golem.png',
    family: 'mountains',
    loot: {
      common: [
        // Test materials
        201,
        202,
        203
      ],
      uncommon: [
        1 // Random common item
      ],
      rare: [
        2 // Rnadom uncommon item
      ],
      epic: [
        3 // Random rare item
      ]
    }
  },
  {
    name: 'Angry Gnome',
    image: 'gnome.png',
    family: 'forest',
    loot: {
      common: [
        // Test materials
        201,
        202,
        203
      ],
      uncommon: [
        1 // Random common item
      ],
      rare: [
        2 // Rnadom uncommon item
      ],
      epic: [
        3 // Random rare item
      ]
    }
  },
  {
    name: 'Flying Skull',
    image: 'skull.png',
    family: 'graveyard',
    loot: {
      common: [
        // Test materials
        201,
        202,
        203
      ],
      uncommon: [
        1 // Random common item
      ],
      rare: [
        2 // Rnadom uncommon item
      ],
      epic: [
        3 // Random rare item
      ]
    }
  }
]