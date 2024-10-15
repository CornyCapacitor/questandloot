export type Player = {
  name: string,
  title: string | null,
  profession: "warrior" | "rogue" | "mage" | "hunter",
  level: number,
  attributes: Attributes,
  activeJourney: Journey | null,
  activePotion: ActivePotion | null,
  equipment: Equipment,
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
  commonLoot: number[] | null,
  uncommonLoot: number[] | null,
  rareLoot: number[] | null,
  epicLoot: number[] | null
}

export type Items = Weapon | Armor | Potion | Material

export type Weapon = {
  id: number,
  name: string,
  description: string,
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
  type: "potion"
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
  attacker: string,
  title: string | null,
  target: string,
  damage: number,
  targetHP: number,
  attackType: {
    weapon1: string | null,
    weapon2: string | null
  }
}