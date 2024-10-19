export type Player = {
  name: string,
  title: string | null,
  profession: Profession,
  level: number,
  attributes: Attributes,
  activeJourney: Journey | null,
  activePotion: ActivePotion | null,
  equipment: Equipment,
  image: string,
  items: Items[],
}

export type Profession = "warrior" | "mage" | "hunter"

export type DamageType = "sword" | "axe" | "mace" | "dagger" | "fire" | "frost" | "arcane" | "earth" | "air" | "bow" | "crossbow" | "shield" | null

export type Items = Weapon | Armor | Potion | Material

export type Weapon = {
  name: string,
  description: string,
  level: number,
  class: Profession,
  slot: string,
  damage: {
    min: number,
    max: number
  },
  attributes: Attributes,
  image: string,
  quality: "common" | "uncommon" | "rare" | "epic",
  type: "weapon",
  family: string,
}

export type Armor = {
  name: string,
  description: string,
  level: number,
  class: Profession,
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
  weapon: Weapon | null,
  shield?: Armor | null,
  head: Armor | null,
  chest: Armor | null,
  hands: Armor | null,
  legs: Armor | null,
  feet: Armor | null,
  neck: Armor | null,
  ring: Armor | null
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
  target: string,
  damage: number,
  isCrit: boolean,
  targetHP: number,
  HP1: number,
  maxHP1: number,
  HP2: number,
  maxHP2: number,
  attackType: string | null
}

export type Loot = {
  gold: number | null,
  common: number[],
  uncommon: number[] | null,
  rare: number[] | null,
  epic: number[] | null
}

export type MonsterArray = {
  name: string,
  image: string,
  family: string,
  loot: Loot
}

export type Monster = {
  name: string,
  level: number,
  profession: Profession,
  attributes: Attributes,
  damage: Damage,
  damageType: DamageType,
  hp: number,
  armor: number,
  classResistances: Resistances,
  image: string,
  loot: Loot
}

export type Damage = {
  min: number,
  max: number
}

export type Resistances = {
  warriorResistance: number,
  hunterResistance: number,
  mageResistance: number
}