import { Enemy, Player } from "./types";

export const dummyPlayer: Player = {
  name: "DummyPlayer",
  title: "Tester",
  profession: "rogue",
  level: 1,
  attributes: {
    strength: 10,
    agility: 10,
    intellect: 10,
    stamina: 10,
    luck: 10
  },
  activeJourney: null,
  activePotion: {
    potionId: 5,
    expiringDate: new Date(new Date().setDate(new Date().getDate() + 7))
  },
  equipment: {
    weapon1: 1, // ID: "Rusty dagger"
    weapon2: null,
    head: null,
    neck: null,
    chest: 2,  // ID: "Trainee leather shirt"
    hands: null,
    legs: 3,   // ID: "Trainee leather pants"
    feet: 4,   // ID: "Trainee leather boots"
    ring: null
  },
  items: []
};

export const dummyEnemy: Enemy = {
  name: "Wolf",
  title: null,
  profession: "rogue",
  level: 1,
  attributes: {
    strength: 2,
    agility: 2,
    intellect: 2,
    stamina: 20,
    luck: 2
  },
  activePotion: null,
  equipment: {
    weapon1: null,
    weapon2: null,
    head: null,
    neck: null,
    chest: null,
    hands: null,
    legs: null,
    feet: null,
    ring: null
  },
  commonLoot: [11, 12], // ID: "Wolf Claw" and "Light Leather"
  uncommonLoot: [2, 3], // ID: "Trainee leather shirt" and "Trainee leather pants"
  rareLoot: null,
  epicLoot: null
};