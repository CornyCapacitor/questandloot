import { Material, Potion } from "../types";

type StringRepresentatives = "RANDOM_COMMON_ITEM" | "RANDOM_UNCOMMON_ITEM" | "RANDOM_RARE_ITEM" | "RANDOM_EPIC_ITEM"

export const item_list: { [key: number]: Potion | Material | StringRepresentatives } = {
  1: "RANDOM_COMMON_ITEM",
  2: "RANDOM_UNCOMMON_ITEM",
  3: "RANDOM_RARE_ITEM",
  4: "RANDOM_EPIC_ITEM",
  101: {
    id: 102,
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
  102: {
    id: 102,
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
  103: {
    id: 103,
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
  104: {
    id: 104,
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
  105: {
    id: 105,
    name: "Lesser Luck Elixir",
    description: "Grants a small boost to luck.",
    enchancing: {
      attribute: "luck",
      value: 10
    },
    image: "lesser_luck_elixir.png",
    quality: "uncommon",
    type: "potion"
  },
  201: {
    id: 201,
    name: "Ice Shard",
    description: "Blue shard glowing with strange energy. Could be useful in crafting.",
    image: "ice_crystal.png",
    quality: "common",
    type: "material"
  },
  202: {
    id: 202,
    name: "Test Material",
    description: "Test Material Description",
    image: "no_image.png",
    quality: "common",
    type: "material"
  }
};