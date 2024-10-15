import { Armor, Material, Potion, Weapon } from "./types";

export const item_list: { [key: number]: Weapon | Armor | Potion | Material } = {
  1: {
    id: 1,
    name: "Rusty Sword",
    description: "A rusty sword, perfect for a warrior.",
    level: 1,
    classes: ["warrior", "rogue"],
    slot: ["mainHand"],
    damage: {
      min: 20,
      max: 45
    },
    armor: 0,
    image: "rusty_sword.png",
    quality: "common",
    type: "weapon",
    family: "sword",
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
    name: "Rusty Two-Handed Sword",
    description: "A rusty sword, perfect for wielding with both hands.",
    level: 1,
    classes: ["warrior"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_two_handed_sword.png",
    quality: "common",
    type: "weapon",
    family: "sword",
    isTwoHanded: true,
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
    name: "Rusty Axe",
    description: "A rusty axe, a reliable weapon for any warrior.",
    level: 1,
    classes: ["warrior", "rogue"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_axe.png",
    quality: "common",
    type: "weapon",
    family: "axe",
    isTwoHanded: false,
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
    name: "Rusty Two-Handed Axe",
    description: "A large rusty axe designed for two-handed use.",
    level: 1,
    classes: ["warrior"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_two_handed_axe.png",
    quality: "common",
    type: "weapon",
    family: "axe",
    isTwoHanded: true,
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
    name: "Rusty Mace",
    description: "A rusty mace, ideal for crushing enemies.",
    level: 1,
    classes: ["warrior", "rogue"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_mace.png",
    quality: "common",
    type: "weapon",
    family: "mace",
    isTwoHanded: false,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  6: {
    id: 6,
    name: "Rusty Two-Handed Mace",
    description: "A hefty rusty mace that requires both hands to wield.",
    level: 1,
    classes: ["warrior"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "rusty_two_handed_mace.png",
    quality: "common",
    type: "weapon",
    family: "mace",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  7: {
    id: 7,
    name: "Rusty Dagger",
    description: "A rusty dagger, quick and easy to conceal.",
    level: 1,
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
  8: {
    id: 8,
    name: "Wooden Shield",
    description: "A simple wooden shield, providing basic protection.",
    level: 1,
    classes: ["warrior"],
    slot: ["offHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "wooden_shield.png",
    quality: "common",
    type: "weapon",
    family: "shield",
    isTwoHanded: false,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  9: {
    id: 9,
    name: "Apprentice's Fire Staff",
    description: "A staff infused with the essence of fire, requiring two hands to wield.",
    level: 1,
    classes: ["mage"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "apprentices_fire_staff.png",
    quality: "common",
    type: "weapon",
    family: "fire",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  10: {
    id: 10,
    name: "Apprentice's Frost Staff",
    description: "A staff that radiates cold, perfect for controlling ice.",
    level: 1,
    classes: ["mage"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "apprentices_frost_staff.png",
    quality: "common",
    type: "weapon",
    family: "frost",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  11: {
    id: 11,
    name: "Apprentice's Arcane Staff",
    description: "A staff imbued with arcane energy, ideal for spellcasting.",
    level: 1,
    classes: ["mage"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "apprentices_arcane_staff.png",
    quality: "common",
    type: "weapon",
    family: "arcane",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  12: {
    id: 12,
    name: "Apprentice's Earth Staff",
    description: "A staff that channels the power of the earth.",
    level: 1,
    classes: ["mage"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "apprentices_earth_staff.png",
    quality: "common",
    type: "weapon",
    family: "earth",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  13: {
    id: 13,
    name: "Apprentice's Air Staff",
    description: "A staff that harnesses the winds to cast spells.",
    level: 1,
    classes: ["mage"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "apprentices_air_staff.png",
    quality: "common",
    type: "weapon",
    family: "air",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  14: {
    id: 14,
    name: "Crude Bow",
    description: "A simple bow that can shoot arrows at a distance.",
    level: 1,
    classes: ["hunter"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "crude_bow.png",
    quality: "common",
    type: "weapon",
    family: "bow",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  15: {
    id: 15,
    name: "Crude Crossbow",
    description: "A simple crossbow for long-range attacks.",
    level: 1,
    classes: ["hunter"],
    slot: ["mainHand"],
    damage: {
      min: 5,
      max: 10
    },
    armor: 0,
    image: "crude_crossbow.png",
    quality: "common",
    type: "weapon",
    family: "crossbow",
    isTwoHanded: true,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    }
  },
  16: {
    id: 16,
    name: "Apprentice's Cloth Hood",
    description: "A simple cloth hood that provides basic protection.",
    level: 1,
    classes: ["mage"],
    slot: "head",
    armor: 1,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_cloth_hood.png",
    quality: "common",
    type: "armor"
  },
  17: {
    id: 17,
    name: "Apprentice's Cloth Robe",
    description: "A comfortable cloth robe for basic protection.",
    level: 1,
    classes: ["mage"],
    slot: "chest",
    armor: 1,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_cloth_robe.png",
    quality: "common",
    type: "armor"
  },
  18: {
    id: 18,
    name: "Apprentice's Cloth Pants",
    description: "Light cloth pants for ease of movement.",
    level: 1,
    classes: ["mage"],
    slot: "legs",
    armor: 1,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_cloth_pants.png",
    quality: "common",
    type: "armor"
  },
  19: {
    id: 19,
    name: "Apprentice's Cloth Gloves",
    description: "Basic cloth gloves for some hand protection.",
    level: 1,
    classes: ["mage"],
    slot: "hands",
    armor: 1,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_cloth_gloves.png",
    quality: "common",
    type: "armor"
  },
  20: {
    id: 20,
    name: "Apprentice's Cloth Boots",
    description: "Simple cloth boots for comfort.",
    level: 1,
    classes: ["mage"],
    slot: "feet",
    armor: 1,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_cloth_boots.png",
    quality: "common",
    type: "armor"
  },
  21: {
    id: 21,
    name: "Apprentice's Leather Cap",
    description: "A basic leather cap for head protection.",
    level: 1,
    classes: ["leather"],
    slot: "head",
    armor: 2,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_leather_cap.png",
    quality: "common",
    type: "armor"
  },
  22: {
    id: 22,
    name: "Apprentice's Leather Jacket",
    description: "A sturdy leather jacket for chest protection.",
    level: 1,
    classes: ["leather"],
    slot: "chest",
    armor: 2,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_leather_jacket.png",
    quality: "common",
    type: "armor"
  },
  23: {
    id: 23,
    name: "Apprentice's Leather Pants",
    description: "Durable leather pants for leg protection.",
    level: 1,
    classes: ["leather"],
    slot: "legs",
    armor: 2,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_leather_pants.png",
    quality: "common",
    type: "armor"
  },
  24: {
    id: 24,
    name: "Apprentice's Leather Gloves",
    description: "Basic leather gloves for hand protection.",
    level: 1,
    classes: ["leather"],
    slot: "hands",
    armor: 2,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_leather_gloves.png",
    quality: "common",
    type: "armor"
  },
  25: {
    id: 25,
    name: "Apprentice's Leather Boots",
    description: "Durable leather boots for comfort and protection.",
    level: 1,
    classes: ["leather"],
    slot: "feet",
    armor: 2,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_leather_boots.png",
    quality: "common",
    type: "armor"
  },
  26: {
    id: 26,
    name: "Apprentice's Chainmail Coif",
    description: "A protective chainmail coif for head protection.",
    level: 1,
    classes: ["warrior"],
    slot: "head",
    armor: 3,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_chainmail_coif.png",
    quality: "common",
    type: "armor"
  },
  27: {
    id: 27,
    name: "Apprentice's Chainmail Vest",
    description: "A sturdy chainmail vest for chest protection.",
    level: 1,
    classes: ["warrior"],
    slot: "chest",
    armor: 3,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_chainmail_vest.png",
    quality: "common",
    type: "armor"
  },
  28: {
    id: 28,
    name: "Apprentice's Chainmail Leggings",
    description: "Protective chainmail leggings for leg protection.",
    level: 1,
    classes: ["warrior"],
    slot: "legs",
    armor: 3,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_chainmail_leggings.png",
    quality: "common",
    type: "armor"
  },
  29: {
    id: 29,
    name: "Apprentice's Chainmail Gloves",
    description: "Protective chainmail gloves for hand protection.",
    level: 1,
    classes: ["warrior"],
    slot: "hands",
    armor: 3,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_chainmail_gloves.png",
    quality: "common",
    type: "armor"
  },
  30: {
    id: 30,
    name: "Apprentice's Chainmail Boots",
    description: "Sturdy chainmail boots for leg protection.",
    level: 1,
    classes: ["warrior"],
    slot: "feet",
    armor: 3,
    attributes: {
      strength: 0,
      agility: 0,
      intellect: 0,
      stamina: 0,
      luck: 0
    },
    image: "apprentices_chainmail_boots.png",
    quality: "common",
    type: "armor"
  },
  31: {
    id: 31,
    name: "Lesser Strength Potion",
    description: "Gives a slight boost to agility",
    enchancing: {
      attribute: "agility",
      value: 10
    },
    image: "lesser_strength_potion.png",
    type: "potion"
  },
  32: {
    id: 32,
    name: "Lesser Potion of Strength",
    description: "Grants a small boost to strength.",
    enchancing: {
      attribute: "strength",
      value: 10
    },
    image: "lesser_strength_potion.png",
    type: "potion"
  },
  33: {
    id: 33,
    name: "Lesser Intellect Potion",
    description: "Grants a small boost to intellect.",
    enchancing: {
      attribute: "intellect",
      value: 10
    },
    image: "lesser_intellect_potion.png",
    type: "potion"
  },
  34: {
    id: 34,
    name: "Lesser Stamina Potion",
    description: "Increases stamina slightly for a short duration.",
    enchancing: {
      attribute: "stamina",
      value: 10
    },
    image: "lesser_stamina_potion.png",
    type: "potion"
  },
  35: {
    id: 35,
    name: "Lesser Luck Elixir",
    description: "Grants a small boost to luck.",
    enchancing: {
      attribute: "luck",
      value: 10
    },
    image: "lesser_luck_elixir.png",
    type: "potion"
  }
};