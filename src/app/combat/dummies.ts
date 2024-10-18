import { Enemy, Player } from "../types";

export const dummyPlayer: Player = {
  name: "Dummy Undead",
  title: "Tester",
  profession: "mage",
  level: 1,
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
    weapon1: 9,
    weapon2: null,
    head: null,
    neck: null,
    chest: null,
    hands: null,
    legs: null,
    feet: null,
    ring: null
  },
  image: "skull.png",
  items: []
};

export const dummyEnemy: Enemy = {
  name: "Frost golem",
  title: null,
  profession: "warrior",
  level: 1,
  attributes: {
    strength: 2,
    agility: 2,
    intellect: 2,
    stamina: 10,
    luck: 2
  },
  activePotion: null,
  equipment: {
    weapon1: 1,
    weapon2: null,
    head: null,
    neck: null,
    chest: null,
    hands: null,
    legs: null,
    feet: null,
    ring: null
  },
  image: "frost_golem.png",
  loot: {
    gold: null,
    common: [1, 5],
    uncommon: null,
    rare: null,
    epic: null
  }
};