export type Player = {
  name: string,
  title: string | null,
  profession: "warrior" | "rogue" | "mage" | "hunter",
  level: number,
  attributes: Attributes,
  activeJourney: Journey | null,
  activePotion: ActivePotion | null,
  equipment: Equipment,
  image: string,
  items: Items[],
}

export type Enemy = {
  name: string,
  title: string | null,
  profession: "warrior" | "rogue" | "mage" | "hunter",
  level: number,
  attributes: Attributes,
  activePotion: null,
  equipment: Equipment,
  image: string,
  loot: Loot
}

export type Items = Weapon | Armor | Potion | Material

export type Weapon = {
  id: number,
  name: string,
  description: string,
  level: number,
  classes: string[],
  slot: string | string[],
  damage: {
    min: number,
    max: number
  },
  armor: number,
  attributes: Attributes,
  image: string,
  isTwoHanded: boolean
  quality: "common" | "uncommon" | "rare" | "epic",
  type: "weapon",
  family: string,
}

export type Armor = {
  id: number,
  name: string,
  description: string,
  level: number,
  classes: string[],
  slot: string,
  armor: number,
  attributes: Attributes,
  image: string,
  quality: "common" | "uncommon" | "rare" | "epic",
  type: "armor"
}

export type Potion = {
  id: number,
  name: string,
  description: string,
  enchancing: {
    attribute: string,
    value: number
  }
  image: string,
  type: "potion",
  quality: "common" | "uncommon" | "rare" | "epic"
}

export type Material = {
  id: number,
  name: string,
  description: string,
  quality: "common" | "uncommon" | "rare" | "epic",
  type: "material"
}

export type Attributes = {
  strength: number,
  agility: number,
  intellect: number,
  stamina: number,
  luck: number,
}

export type Equipment = {
  [slot: string]: number | null
}

export type ActivePotion = {
  potionId: number,
  expiringDate: Date
} | null

export type Journey = {
  location: string,
  returnDate: Date
}

export type LogEntry = {
  turn: number,
  attacker: string,
  title: string | null,
  target: string,
  damage: number,
  isCrit: boolean,
  targetHP: number,
  HP1: number,
  maxHP1: number,
  HP2: number,
  maxHP2: number,
  attackType: {
    weapon1: string | null,
    weapon2: string | null
  }
}

export type Loot = {
  gold: number | null,
  common: number[],
  uncommon: number[] | null,
  rare: number[] | null,
  epic: number[] | null
}