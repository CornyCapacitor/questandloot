import { Armor, Material, Potion, Weapon } from "./types";

export const item_list: { [key: number]: Weapon | Armor | Potion | Material } = {
  1: {
    id: 1,
    name: "Rusty dagger",
    description: "A little bit rusty, but trustworthy weapon.",
    classes: ["rogue"],
    slot: ["mainHand", "offHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_dagger.png",
    quality: "common",
    type: "weapon",
    family: "dagger",
    isTwoHanded: false,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  2: {
    id: 2,
    name: "Trainee leather shirt",
    description: "A worn off shirt, perfect for trainings.",
    classes: ["rogue", "hunter"],
    slot: "chest",
    armor: 1,
    image: "trainee_leather_shirt.png",
    quality: "common",
    type: "armor",
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  3: {
    id: 3,
    name: "Trainee leather pants",
    description: "Warm and comfy - like at home!",
    classes: ["rogue", "hunter"],
    slot: "legs",
    armor: 1,
    image: "trainee_leather_pants.png",
    quality: "common",
    type: "armor",
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  4: {
    id: 4,
    name: "Trainee leather boots",
    description: "At least the hole is at the heel.",
    classes: ["rogue", "hunter"],
    slot: "feet",
    armor: 1,
    image: "trainee_leather_boots.png",
    quality: "common",
    type: "armor",
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  5: {
    id: 5,
    name: "Lesser Strength Potion",
    description: "Grants 20% additional bonus to player strength.",
    enchancing: {
      attribute: "agility",
      value: 20,
    },
    image: "lesser_strength_potion.png",
    type: "potion"
  },
  11: {
    id: 11,
    name: "Wolf Claw",
    description: "A claw taken from a fierce wolf.",
    quality: "common",
    type: "material"
  },
  12: {
    id: 12,
    name: "Light Leather",
    description: "Soft and durable leather, commonly used for basic armor.",
    quality: "common",
    type: "material"
  }
};
