import { Material, Potion } from "../types";

export const item_list: { [key: number]: Potion | Material } = {
  1: {
    id: 1,
    name: "Lesser Agility Potion",
    description: "Gives a slight boost to agility",
    enchancing: {
      attribute: "agility",
      value: 10
    },
    image: "lesser_strength_potion.png",
    quality: "uncommon",
    type: "potion"
  },
  2: {
    id: 2,
    name: "Lesser Potion of Strength",
    description: "Grants a small boost to strength.",
    enchancing: {
      attribute: "strength",
      value: 10
    },
    image: "lesser_strength_potion.png",
    quality: "uncommon",
    type: "potion"
  },
  3: {
    id: 3,
    name: "Lesser Intellect Potion",
    description: "Grants a small boost to intellect.",
    enchancing: {
      attribute: "intellect",
      value: 10
    },
    image: "lesser_intellect_potion.png",
    quality: "uncommon",
    type: "potion"
  },
  4: {
    id: 4,
    name: "Lesser Stamina Potion",
    description: "Increases stamina slightly for a short duration.",
    enchancing: {
      attribute: "stamina",
      value: 10
    },
    image: "lesser_stamina_potion.png",
    quality: "uncommon",
    type: "potion"
  },
  5: {
    id: 5,
    name: "Lesser Luck Elixir",
    description: "Grants a small boost to luck.",
    enchancing: {
      attribute: "luck",
      value: 10
    },
    image: "lesser_luck_elixir.png",
    quality: "uncommon",
    type: "potion"
  }
};