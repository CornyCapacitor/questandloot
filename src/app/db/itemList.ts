import { Material } from "../types";

type StringRepresentatives = "RANDOM_COMMON_ITEM" | "RANDOM_UNCOMMON_ITEM" | "RANDOM_RARE_ITEM" | "RANDOM_EPIC_ITEM" | "RANDOM_UNCOMMON_POTION" | "RANDOM_RARE_POTION" | "RANDOM_EPIC_POTION"

export const item_list: { [key: number]: Material | StringRepresentatives } = {
  1: "RANDOM_COMMON_ITEM",
  2: "RANDOM_UNCOMMON_ITEM",
  3: "RANDOM_RARE_ITEM",
  4: "RANDOM_EPIC_ITEM",
  5: "RANDOM_UNCOMMON_POTION",
  6: "RANDOM_RARE_POTION",
  7: "RANDOM_EPIC_POTION",
  200: {
    id: 200,
    name: "Test Material",
    description: "Test Material Description",
    image: "placeholderMaterial.svg",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  201: {
    id: 201,
    name: "Branch",
    description: "A sturdy branch, useful for crafting and building.",
    image: "branch.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  202: {
    id: 202,
    name: "Cord",
    description: "A strong cord, perfect for tying and securing items.",
    image: "cord.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  203: {
    id: 203,
    name: "Fabric",
    description: "A piece of fabric, versatile for various crafting purposes.",
    image: "fabric.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  204: {
    id: 204,
    name: "Iron bar",
    description: "A solid iron bar, essential for metalworking.",
    image: "iron_bar.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  205: {
    id: 205,
    name: "Light leather",
    description: "A lightweight leather, favored for crafting armor and gear.",
    image: "light_leather.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  206: {
    id: 206,
    name: "Magic wood",
    description: "A rare wood infused with magical properties.",
    image: "magic_wood.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  207: {
    id: 207,
    name: "Rope",
    description: "A durable rope, useful for climbing and securing loads.",
    image: "rope.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  208: {
    id: 208,
    name: "Scale",
    description: "A sturdy scale, often used as a crafting material for armor.",
    image: "scale.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  },
  209: {
    id: 209,
    name: "Steel plates",
    description: "Heavy steel plates, ideal for creating strong defenses.",
    image: "steel_plates.png",
    quality: "common",
    type: "material",
    sellPrice: 0
  }
};