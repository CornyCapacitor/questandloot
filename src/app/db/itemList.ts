import { Material, Potion } from "../types";

type StringRepresentatives = "RANDOM_COMMON_ITEM" | "RANDOM_UNCOMMON_ITEM" | "RANDOM_RARE_ITEM" | "RANDOM_EPIC_ITEM" | "RANDOM_UNCOMMON_POTION" | "RANDOM_RARE_POTION" | "RANDOM_EPIC_POTION"

export const item_list: { [key: number]: Potion | Material | StringRepresentatives } = {
  1: "RANDOM_COMMON_ITEM",
  2: "RANDOM_UNCOMMON_ITEM",
  3: "RANDOM_RARE_ITEM",
  4: "RANDOM_EPIC_ITEM",
  5: "RANDOM_UNCOMMON_POTION",
  6: "RANDOM_RARE_POTION",
  7: "RANDOM_EPIC_POTION",
  201: {
    id: 201,
    name: "Ice Shard",
    description: "Blue shard glowing with strange energy. Could be useful in crafting.",
    image: "ice_crystal.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  202: {
    id: 202,
    name: "Test Material",
    description: "Test Material Description",
    image: "no_image.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  }
};