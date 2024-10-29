import { MonsterArray } from "../types";

export const monsterList: MonsterArray[] = [
  {
    name: 'Frost Golem',
    image: 'frost_golem.png',
    family: 'mountains',
    loot: {
      common: [1],
      uncommon: [1, 101, 102, 103, 104, 105],
      rare: [202],
      epic: [202]
    }
  },
  {
    name: 'Angry Gnome',
    image: 'gnome.png',
    family: 'forest',
    loot: {
      common: [1],
      uncommon: [1, 101, 102, 103, 104, 105],
      rare: [202],
      epic: [202]
    }
  },
  {
    name: 'Flying Skull',
    image: 'skull.png',
    family: 'graveyard',
    loot: {
      common: [1],
      uncommon: [1, 101, 102, 103, 104, 105],
      rare: [202],
      epic: [202]
    }
  }
]