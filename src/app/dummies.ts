import { Player, Weapon } from "./types";

export const dummyPlayer: Player = {
  id: "dummyPlayerId",
  name: "Dummy Undead",
  title: "Tester",
  profession: "mage",
  level: 1,
  experience: 0,
  attributes: {
    strength: 10,
    agility: 10,
    intellect: 10,
    stamina: 10,
    luck: 10
  },
  activeJourney: null,
  activePotion: null,
  equipment: {
    weapon: {
      id: 'testweaponId',
      name: 'Test Weapon',
      description: 'Insta-kills all enemies',
      level: 1,
      profession: 'mage',
      slot: 'weapon',
      damage: {
        min: 5,
        max: 10
      },
      attributes: {
        strength: 0,
        agility: 0,
        intellect: 1,
        stamina: 0,
        luck: 0
      },
      image: '',
      quality: 'common',
      type: 'weapon',
      family: 'fire',
      sellPrice: 1,
    },
    shield: null,
    head: null,
    neck: null,
    chest: null,
    hands: null,
    belt: null,
    legs: null,
    feet: null,
    ring: null
  },
  image: "skull.png",
  items: [],
  materials: [],
  gold: 0,
  shop: {
    lastRefresh: null,
    items: []
  }
};

export const dummyWeapon: Weapon = {
  id: 'dummyId',
  name: 'Dummy Weapon',
  description: 'Dummy Weapon Description',
  level: 1,
  profession: 'warrior',
  slot: 'weapon',
  damage: {
    min: 5,
    max: 10
  },
  attributes: {
    strength: 0,
    agility: 0,
    intellect: 5,
    stamina: 5,
    luck: 5,
  },
  image: 'beltslot.svg',
  quality: 'common',
  type: 'weapon',
  family: 'fire',
  sellPrice: 1,
}