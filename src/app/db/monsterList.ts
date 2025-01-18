import { MonsterInfo } from "../types";

// 1-3 are common-rare item drops (armour, weapon, potions etc.)
// 200-299 are materials

export const monsterList: Record<string, MonsterInfo[]> = {
  dark_forest: [
    {
      name: 'Angry Gnome',
      image: 'gnome.png',
      zone: 'forest',
      loot: {
        common: [
          201,
          202,
          203
        ],
        uncommon: [
          1
        ],
        rare: [
          2
        ],
        epic: [
          3
        ]
      }
    },
  ],
  abandoned_mines: [
    {
      name: 'Frost Golem',
      image: 'frost_golem.png',
      zone: 'mountains',
      loot: {
        common: [
          201,
          202,
          203
        ],
        uncommon: [
          1
        ],
        rare: [
          2
        ],
        epic: [
          3
        ]
      }
    },
  ],
  abandoned_wizard_tower: [
    {
      name: 'Flying Skull',
      image: 'skull.png',
      zone: 'graveyard',
      loot: {
        common: [
          201,
          202,
          203
        ],
        uncommon: [
          1
        ],
        rare: [
          2
        ],
        epic: [
          3
        ]
      }
    }
  ]
}