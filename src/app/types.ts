export type Player = {
  _id: string,
  user_id: string,
  name: string,
  title: string | null,
  description: string | null,
  profession: Profession,
  level: number,
  experience: number,
  attributes: Attributes,
  activeJourney: Journey,
  activePotion: ActivePotion,
  equipment: Equipment,
  image: string,
  inventory: Inventory,
  materials: Materials,
  gold: number,
  shop: CharacterShop
}

// 
// General types
// 

export type Profession = "warrior" | "mage" | "hunter"

export type Attributes = {
  strength: number,
  agility: number,
  intellect: number,
  stamina: number,
  luck: number,
}

export type Journey = {
  zone: Zone,
  valueMultiplier: number,
  startDate: Date,
  returnDate: Date
} | null

export type Zone = {
  name: string,
  image: string
}

export type ActivePotion = {
  potion: Potion,
  expiringDate: Date
} | null

// 
// Equipment & equipment general types
//

export type Quality = "common" | "uncommon" | "rare" | "epic"

export type Equipment = {
  weapon: Weapon | null,
  shield?: Armor | null,
  head: Armor | null,
  chest: Armor | null,
  hands: Armor | null,
  belt: Armor | null,
  legs: Armor | null,
  feet: Armor | null,
  neck: Armor | null,
  ring: Armor | null
}

// 
// Weapon
// 

export type WeaponArray = "sword" | "axe" | "mace" | "ranged" | "staves"

export type WeaponFamily = "sword" | "axe" | "mace" | "fire" | "frost" | "arcane" | "earth" | "air" | "bow" | "crossbow"

export type Damage = {
  min: number,
  max: number
}

export type Weapon = {
  id: string,
  name: string,
  description: string,
  level: number,
  profession: Profession,
  slot: "weapon",
  damage: Damage,
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "weapon",
  family: WeaponFamily,
  sellPrice: number
}

// Armor

export type ArmorProficiency = "heavy" | "medium" | "light"

export type ArmorSlot = "head" | "chest" | "hands" | "legs" | "feet" | "belt"

export type Armor = {
  id: string,
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
  type: "armor",
  sellPrice: number
}

// Shield

export type Shield = {
  id: string,
  name: string,
  description: string,
  level: number,
  profession: "warrior",
  slot: "shield",
  armor: number,
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "shield",
  sellPrice: number
}

// Jewelery 

export type JewelerySlot = "neck" | "ring"

export type Jewelery = {
  id: string,
  name: string,
  description: string,
  level: number,
  slot: JewelerySlot,
  attributes: Attributes,
  image: string,
  quality: Quality,
  type: "jewelery",
  sellPrice: number
}

// 
// Other
// 

export type Items = Weapon | Shield | Jewelery | Armor | Potion | Material

export type PotionQuality = Exclude<Quality, 'common'>

export type Potion = {
  id: string,
  name: string,
  description: string,
  enchancing: {
    attribute: keyof Attributes,
    value: number
  }
  image: string,
  type: "potion",
  quality: PotionQuality,
  sellPrice: number
}

export type Inventory = {
  item: Items,
  quantity: number,
}[]

export type Materials = {
  material: Material,
  quantity: number
}[]

export type Material = {
  id: number,
  name: string,
  description: string,
  quality: Quality,
  image: string,
  type: "material"
  sellPrice: number,
}

// 
// Shops
// 

export type Shops = 'blacksmith' | 'alchemist'

export type CharacterShop = {
  blacksmith: SingleShop,
  alchemist: SingleShop
}

export type SingleShop = {
  lastRefresh: string | null,
  items: (Items | null)[]
}

// 
// Non-player related types
// 

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

export type DamageType = WeaponFamily | null

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
  common: number[],
  uncommon: number[] | null,
  rare: number[] | null,
  epic: number[] | null
}

export type MonsterInfo = {
  name: string,
  image: string,
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

export type Resistances = {
  warriorResistance: number,
  hunterResistance: number,
  mageResistance: number
}