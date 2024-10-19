import { MonsterArray } from "../types";

export const monsterList: MonsterArray[] = [
  {
    name: 'Frost Golem',
    image: 'frost_golem.png',
    family: 'mountains',
    loot: {
      gold: 0,
      common: [6],
      uncommon: [1, 2, 3, 4, 5],
      rare: [],
      epic: []
    }
  },
  {
    name: 'Angry Gnome',
    image: 'gnome.png',
    family: 'forest',
    loot: {
      gold: 0,
      common: [],
      uncommon: [],
      rare: [],
      epic: []
    }
  },
  {
    name: 'Flying Skull',
    image: 'skull.png',
    family: 'graveyard',
    loot: {
      gold: 0,
      common: [],
      uncommon: [],
      rare: [],
      epic: []
    }
  }
]