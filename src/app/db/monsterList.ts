import { MonsterArray } from "../types";

export const monsterList: MonsterArray[] = [
  {
    name: 'Frost Golem',
    image: 'frost_golem.png',
    family: 'mountains',
    loot: {
      common: [1],
      uncommon: [2],
      rare: [3],
      epic: [4]
    }
  },
  {
    name: 'Angry Gnome',
    image: 'gnome.png',
    family: 'forest',
    loot: {
      common: [1],
      uncommon: [2],
      rare: [3],
      epic: [4]
    }
  },
  {
    name: 'Flying Skull',
    image: 'skull.png',
    family: 'graveyard',
    loot: {
      common: [1],
      uncommon: [2],
      rare: [3],
      epic: [4]
    }
  }
]