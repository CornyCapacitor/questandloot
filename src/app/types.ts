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

export type CombatInformation = {
  name: string,
  level: number,
  profession: "warrior" | "hunter" | "mage",
  attributes: Attributes,
  damage: Damage,
  damageType: DamageType,
  hp: number,
  armor: number,
  classResistances: Resistances,
  image: string,
  loot: Loot | null
}

export type Profession = "warrior" | "mage" | "hunter"

export type WeaponFamily = "sword" | "axe" | "mace" | "fire" | "frost" | "arcane" | "earth" | "air" | "bow" | "crossbow"

export type DamageType = WeaponFamily | null

export type Items = Weapon | Armor | Potion | Material

export type Quality = "common" | "uncommon" | "rare" | "epic"

export type Weapon = {
  name: string,
  description: string,
  level: number,
  profession: Profession,
  slot: "weapon",
  damage: {
    min: number,
    max: number
  },
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "weapon",
  family: string,
}

export type ArmorProficiency = "heavy" | "medium" | "light"

export type ArmorSlot = "head" | "chest" | "hands" | "legs" | "feet"

export type Armor = {
  name: string,
  description: string,
  level: number,
  profession: Profession,
  slot: ArmorSlot,
  armor: number,
  attributes: Attributes,
  image: string,
  quality: Quality,
  proficiency: ArmorProficiency,
  type: "armor"
}

export type Shield = {
  name: string,
  description: string,
  level: number,
  profession: "warrior",
  slot: "shield",
  armor: number,
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "shield"
}

export type JewelerySlot = "neck" | "ring"

export type Jewelery = {
  name: string,
  description: string,
  level: number,
  slot: JewelerySlot,
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "jewelery"
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
  quality: Quality
}

export type Material = {
  id: number,
  name: string,
  description: string,
  quality: Quality,
  image: string,
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
  valueMultiplier: number,
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