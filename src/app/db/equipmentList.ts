import { ArmorSlot, JewelerySlot, WeaponArray, WeaponFamily } from "../types"

export type ArmorItem = {
  name: string,
  description: string,
  image: string,
}

export type WeaponItem = {
  name: string,
  description: string,
  image: string,
  family: WeaponFamily
}

export const weapons: { [key in WeaponArray]: WeaponItem[] } = {
  'sword': [
    { "name": "Cadet's Sword", "description": "A simple blade, perfect for training and learning the ways of combat.", "image": "1.png", "family": "sword" },
    { "name": "Lightbringer", "description": "A sword that shines with a bright, holy light, used by the righteous.", "image": "2.png", "family": "sword" },
    { "name": "Stormcaller", "description": "A sword that hums with the power of the storm, crackling with thunder.", "image": "3.png", "family": "sword" },
    { "name": "Frostbite", "description": "A blade that chills the air around it, freezing its foes in place.", "image": "4.png", "family": "sword" },
    { "name": "Twilight Edge", "description": "A dark blade, forged in the twilight hours, capable of striking silently.", "image": "5.png", "family": "sword" },
    { "name": "Bloodmoon Saber", "description": "A red-tinted blade, said to grow stronger under the light of a blood-red moon.", "image": "6.png", "family": "sword" },
    { "name": "Arcane Whisper", "description": "A slender blade infused with arcane magic, capable of cutting through magic itself.", "image": "7.png", "family": "sword" },
    { "name": "Moonshadow", "description": "A graceful sword that blends into the night, striking without warning.", "image": "8.png", "family": "sword" },
    { "name": "Flameheart", "description": "A sword that burns with the fury of a thousand fires, leaving trails of flame.", "image": "9.png", "family": "sword" },
    { "name": "Dawnblade", "description": "A bright sword that symbolizes hope, capable of dispelling darkness.", "image": "10.png", "family": "sword" },
    { "name": "Soulpiercer", "description": "A weapon that pierces not only flesh, but also the very soul of its victim.", "image": "11.png", "family": "sword" },
    { "name": "Voidstrike", "description": "A sword that draws its power from the void, capable of tearing through reality.", "image": "12.png", "family": "sword" },
    { "name": "Vampiric Blade", "description": "A cursed blade that steals life from its victims with every strike.", "image": "13.png", "family": "sword" },
    { "name": "Elven Curved Sword", "description": "An elegant curved blade crafted by elves, lightweight yet deadly.", "image": "14.png", "family": "sword" },
    { "name": "Silverlight Sword", "description": "A shining sword blessed by the gods, glimmering with silver light.", "image": "15.png", "family": "sword" },
    { "name": "Flamebrand", "description": "A sword engulfed in flame, capable of scorching enemies with every swing.", "image": "16.png", "family": "sword" },
    { "name": "Frostbite Sword", "description": "A sword of ice that freezes its enemies with every slash.", "image": "17.png", "family": "sword" },
    { "name": "Thunderstrike", "description": "A sword crackling with the power of lightning, striking with thunderous force.", "image": "18.png", "family": "sword" },
    { "name": "Moonlit Blade", "description": "A blade that shimmers under the moonlight, wielded by moonlit warriors.", "image": "19.png", "family": "sword" },
    { "name": "Wyrm Slayer", "description": "A dragon-slaying sword, said to have once been used to fell the mightiest of wyrms.", "image": "20.png", "family": "sword" },
    { "name": "Shadowfang", "description": "A dark blade that draws power from the shadows, silent and swift.", "image": "21.png", "family": "sword" },
    { "name": "Celestial Sword", "description": "A legendary sword said to be forged in the heavens, glowing with divine light.", "image": "22.png", "family": "sword" },
    { "name": "Phoenix Flame", "description": "A fiery sword said to have been reborn from the ashes of a phoenix.", "image": "23.png", "family": "sword" },
    { "name": "Stormbreaker", "description": "A sword that can summon storms, striking with the fury of the tempest.", "image": "24.png", "family": "sword" },
    { "name": "Excalibur", "description": "The legendary sword of the king, a symbol of untold power and wisdom.", "image": "25.png", "family": "sword" },
    { "name": "Sword of the Fallen King", "description": "A cursed blade, forged in the blood of a fallen monarch.", "image": "26.png", "family": "sword" },
    { "name": "Abyssal Edge", "description": "A blade forged in the deepest abyss, imbued with dark and forbidden magic.", "image": "27.png", "family": "sword" },
    { "name": "Lightbringer", "description": "A sword of radiant light, said to pierce through any darkness.", "image": "28.png", "family": "sword" },
    { "name": "Soulrender", "description": "A sword forged with the essence of souls, capable of tearing through both flesh and spirit.", "image": "29.png", "family": "sword" },
    { "name": "Blade of Eternity", "description": "A timeless blade that has witnessed the rise and fall of civilizations.", "image": "30.png", "family": "sword" },
    { "name": "Starshard Sword", "description": "A sword crafted from a fallen star, possessing the power of the cosmos.", "image": "31.png", "family": "sword" },
    { "name": "The Voidblade", "description": "A sword forged in the void between worlds, able to cut through reality itself.", "image": "32.png", "family": "sword" },
    { "name": "The Inferno Sword", "description": "A blade surrounded by eternal flame, a weapon of pure destruction.", "image": "33.png", "family": "sword" },
    { "name": "The Wraithblade", "description": "A blade that can pass through solid matter, wielded by specters of the afterlife.", "image": "34.png", "family": "sword" },
    { "name": "Sunspear", "description": "A spear-like sword with a blade forged from the light of the sun itself.", "image": "35.png", "family": "sword" },
    { "name": "The Obsidian Blade", "description": "A blade made of pure obsidian, as black as the night and as sharp as death.", "image": "36.png", "family": "sword" },
    { "name": "Soulforged Blade", "description": "A sword infused with the souls of great warriors, granting its wielder unparalleled power.", "image": "37.png", "family": "sword" },
    { "name": "Dragonheart Sword", "description": "A sword with a heart of dragon scales, granting its wielder the strength of dragons.", "image": "38.png", "family": "sword" },
    { "name": "Eclipse Blade", "description": "A blade that captures the essence of an eclipse, granting both light and darkness in its strikes.", "image": "39.png", "family": "sword" },
    { "name": "The Arcane Excalibur", "description": "A legendary sword that combines ancient magic with divine power.", "image": "40.png", "family": "sword" },
    { "name": "The Heavenly Blade", "description": "A blade bestowed by the gods themselves, imbued with the power of the heavens.", "image": "41.png", "family": "sword" },
    { "name": "Bloodthirster", "description": "A blade that drinks the blood of its enemies, growing stronger with each life it takes.", "image": "42.png", "family": "sword" },
    { "name": "The Celestial Fang", "description": "A blade crafted by the celestial beings, infused with divine energy.", "image": "43.png", "family": "sword" },
    { "name": "The Dawnbringer", "description": "A sword forged at the first light of dawn, a symbol of hope and rebirth.", "image": "44.png", "family": "sword" },
    { "name": "The Eldritch Sword", "description": "A sword bound to the eldritch forces, whose mere presence can warp reality.", "image": "45.png", "family": "sword" },
    { "name": "The Infinity Blade", "description": "A blade said to be infinite in length and power, able to cut through anything.", "image": "46.png", "family": "sword" },
    { "name": "The Worldbreaker", "description": "A sword of apocalyptic power, capable of splitting the world in two.", "image": "47.png", "family": "sword" },
    { "name": "The Ultima Sword", "description": "The most powerful sword in existence, said to hold the power of the universe itself.", "image": "48.png", "family": "sword" }
  ],
  'axe': [
    { "name": "Cadet's Axe", "description": "A simple, training axe perfect for new recruits.", "image": "1.png", "family": "axe" },
    { "name": "Windcleaver", "description": "A light axe designed for quick, sweeping strikes.", "image": "2.png", "family": "axe" },
    { "name": "Mossback", "description": "A sturdy axe with a worn, ancient feel, built for power.", "image": "3.png", "family": "axe" },
    { "name": "Stormfury Axe", "description": "An axe that crackles with the power of thunder and lightning.", "image": "4.png", "family": "axe" },
    { "name": "Frostgrip", "description": "A chilling axe capable of freezing foes in their tracks.", "image": "5.png", "family": "axe" },
    { "name": "Bloodcleaver", "description": "A bloodstained axe that grows more powerful with each life it takes.", "image": "6.png", "family": "axe" },
    { "name": "Vanguard's Axe", "description": "An axe used by the bravest warriors, built for defending the weak.", "image": "7.png", "family": "axe" },
    { "name": "Axe of the Fallen", "description": "A cursed axe that carries the souls of fallen warriors, hungry for battle.", "image": "8.png", "family": "axe" },
    { "name": "Gorefang", "description": "A brutal axe with a jagged edge, designed to tear through flesh and bone.", "image": "9.png", "family": "axe" },
    { "name": "Celestial Cleaver", "description": "A holy axe imbued with divine energy, capable of smiting evil.", "image": "10.png", "family": "axe" },
    { "name": "Nightfall Axe", "description": "A dark axe, crafted from shadows, capable of striking silently.", "image": "11.png", "family": "axe" },
    { "name": "Dragonfang Axe", "description": "An axe forged from the fang of a dragon, known for its power and sharpness.", "image": "12.png", "family": "axe" },
    { "name": "Cobalt War Axe", "description": "A cobalt-crafted axe, known for its unbreakable edge and light weight.", "image": "13.png", "family": "axe" },
    { "name": "Vampiric Cleaver", "description": "A cursed axe that siphons the life force of enemies with each strike.", "image": "14.png", "family": "axe" },
    { "name": "Elven Crescent Axe", "description": "A curved axe, lightweight and deadly, crafted by the elves for graceful warriors.", "image": "15.png", "family": "axe" },
    { "name": "Flamestrike Axe", "description": "An axe surrounded by eternal flame, capable of setting its enemies ablaze.", "image": "16.png", "family": "axe" },
    { "name": "Thunderfury Axe", "description": "An axe crackling with the power of lightning, able to unleash thunder with every swing.", "image": "17.png", "family": "axe" },
    { "name": "Shadowcleaver", "description": "A dark axe that draws its strength from the shadows, quiet and swift.", "image": "18.png", "family": "axe" },
    { "name": "Axe of the Fallen King", "description": "A legendary axe used by a fallen king, rumored to be cursed with dark magic.", "image": "19.png", "family": "axe" },
    { "name": "Wyrmslayer Axe", "description": "A massive axe designed to slay dragons, its blade capable of piercing even the toughest scales.", "image": "20.png", "family": "axe" },
    { "name": "Celestial Cleaver", "description": "A divine axe, forged by the gods themselves, glowing with holy energy.", "image": "21.png", "family": "axe" },
    { "name": "Phoenix Axe", "description": "A blade infused with the power of a phoenix, burning with every swing.", "image": "22.png", "family": "axe" },
    { "name": "Stormbreaker Axe", "description": "An axe capable of summoning the fury of storms, striking with the force of a hurricane.", "image": "23.png", "family": "axe" },
    { "name": "Excalibur's Wrath", "description": "The wrath of the legendary Excalibur, now forged into a mighty axe.", "image": "24.png", "family": "axe" },
    { "name": "Abyssal War Axe", "description": "A weapon forged in the deepest abyss, imbued with destructive dark magic.", "image": "25.png", "family": "axe" },
    { "name": "Lightbringer Axe", "description": "An axe of radiant light, said to banish evil with every strike.", "image": "26.png", "family": "axe" },
    { "name": "Soulreaver Axe", "description": "A cursed axe that steals the soul of anyone it strikes, becoming more powerful with every kill.", "image": "27.png", "family": "axe" },
    { "name": "Blade of Eternity", "description": "A timeless axe said to have been wielded by immortal warriors of old.", "image": "28.png", "family": "axe" },
    { "name": "Starfall Axe", "description": "An axe forged from the remnants of a fallen star, glowing with celestial power.", "image": "29.png", "family": "axe" },
    { "name": "Voidcleaver", "description": "An axe that can tear through the fabric of reality itself, slicing through both matter and magic.", "image": "30.png", "family": "axe" },
    { "name": "Inferno's Reach", "description": "A massive axe engulfed in flame, capable of setting entire battlegrounds on fire.", "image": "31.png", "family": "axe" },
    { "name": "Wraithcaller Axe", "description": "A blade that commands the spirits of the dead, summoning them with every swing.", "image": "32.png", "family": "axe" },
    { "name": "Sunforged Axe", "description": "An axe that harnesses the power of the sun, striking down enemies with radiant fury.", "image": "33.png", "family": "axe" },
    { "name": "Obsidian Cleaver", "description": "A black-bladed axe forged from obsidian, cutting through armor like butter.", "image": "34.png", "family": "axe" },
    { "name": "Soulforged Axe", "description": "An axe infused with the souls of legendary warriors, its power increasing with each life it takes.", "image": "35.png", "family": "axe" },
    { "name": "Dragonheart Axe", "description": "An axe infused with the heart of a dragon, its strikes as powerful as the beast itself.", "image": "36.png", "family": "axe" },
    { "name": "Eclipse Axe", "description": "An axe that harnesses the power of an eclipse, granting the wielder both light and darkness.", "image": "37.png", "family": "axe" },
    { "name": "Arcane Excalibur Axe", "description": "A mighty axe forged with arcane magic, combining divine and magical power.", "image": "38.png", "family": "axe" },
    { "name": "Heaven's Wrath", "description": "An axe bestowed by the gods, capable of unleashing divine wrath upon its enemies.", "image": "39.png", "family": "axe" },
    { "name": "Bloodthirst Axe", "description": "An axe that thirsts for blood, growing stronger with each soul it claims.", "image": "40.png", "family": "axe" },
    { "name": "Celestial Fang Axe", "description": "A blade forged by celestial beings, imbued with divine energy and destined for greatness.", "image": "41.png", "family": "axe" },
    { "name": "Dawnbringer Axe", "description": "An axe forged in the first light of dawn, symbolizing hope and renewal.", "image": "42.png", "family": "axe" },
    { "name": "Eldritch War Axe", "description": "A dark axe bound to eldritch forces, capable of warping reality itself.", "image": "43.png", "family": "axe" },
    { "name": "Infinity Axe", "description": "A weapon said to have infinite power, capable of cutting through anything in its path.", "image": "44.png", "family": "axe" },
    { "name": "Worldbreaker Axe", "description": "A colossal axe capable of shattering mountains and splitting the world asunder.", "image": "45.png", "family": "axe" },
    { "name": "Ultima Cleaver", "description": "The final weapon, said to be capable of ending the world in a single strike.", "image": "46.png", "family": "axe" },
    { "name": "Axe of the Apocalypse", "description": "A legendary weapon that can bring about the end of all things, wielded by the harbingers of doom.", "image": "47.png", "family": "axe" },
    { "name": "Ultima Swordbreaker", "description": "The ultimate axe, forged from the essence of all elemental forces, capable of ending the very fabric of reality.", "image": "48.png", "family": "axe" }
  ],
  'mace': [
    { "name": "Ironhammer", "description": "A simple, heavy mace designed for crushing armor and bone.", "image": "1.png", "family": "mace" },
    { "name": "Crimson Maul", "description": "A bloodstained mace, its strikes fueled by the rage of its wielder.", "image": "2.png", "family": "mace" },
    { "name": "Stormbreaker", "description": "A mace that crackles with the fury of thunder, capable of shattering shields.", "image": "3.png", "family": "mace" },
    { "name": "Doombringer", "description": "A massive mace that brings doom to all who face its overwhelming force.", "image": "4.png", "family": "mace" },
    { "name": "Soulcrusher", "description": "A mace that leaves a trail of destruction, crushing not just bodies but souls.", "image": "5.png", "family": "mace" },
    { "name": "Nightfall", "description": "A shadowy mace that strikes with the darkness of the night, leaving only silence behind.", "image": "6.png", "family": "mace" },
    { "name": "Tempest Hammer", "description": "A hammer that channels the power of the tempest, shattering anything in its path.", "image": "7.png", "family": "mace" },
    { "name": "Stonefist", "description": "A heavy mace made from enchanted stone, capable of pulverizing rocks and armor alike.", "image": "8.png", "family": "mace" },
    { "name": "Bloodthirster", "description": "A vicious mace that thirsts for blood, growing stronger with every kill.", "image": "9.png", "family": "mace" },
    { "name": "Frostbite", "description": "A mace covered in ice, capable of freezing its enemies with each crushing blow.", "image": "10.png", "family": "mace" },
    { "name": "Thunderstrike", "description": "A mace that calls upon the power of thunder, striking with devastating force.", "image": "11.png", "family": "mace" },
    { "name": "Ember Maul", "description": "A flaming mace that burns with the intensity of a hundred fires.", "image": "12.png", "family": "mace" },
    { "name": "Wyrmclaw", "description": "A spiked mace with the power to tear through even the toughest dragon scales.", "image": "13.png", "family": "mace" },
    { "name": "Voidcrusher", "description": "A mace infused with void magic, capable of tearing apart both flesh and reality itself.", "image": "14.png", "family": "mace" },
    { "name": "Ironfang", "description": "A mace with an iron shaft and spiked head, designed to pierce even the hardest of armor.", "image": "15.png", "family": "mace" },
    { "name": "Celestial Hammer", "description": "A radiant mace forged in the heavens, it brings divine wrath upon all evil.", "image": "16.png", "family": "mace" },
    { "name": "Grimstrike", "description": "A grim-looking mace, its strikes are said to bring the final blow to the living.", "image": "17.png", "family": "mace" },
    { "name": "Blightbringer", "description": "A cursed mace that saps the strength of those it strikes, leaving them weakened.", "image": "18.png", "family": "mace" },
    { "name": "Abyssal Maul", "description": "A dark mace that emanates a sense of impending doom, a weapon of the abyss.", "image": "19.png", "family": "mace" },
    { "name": "Starfall Hammer", "description": "A hammer forged from the remnants of fallen stars, radiating cosmic energy.", "image": "20.png", "family": "mace" },
    { "name": "Dragonheart", "description": "A mace made from the heart of a dragon, its power unmatched by any other.", "image": "21.png", "family": "mace" },
    { "name": "Tidebreaker", "description": "A hammer capable of splitting the ocean waves, bringing a storm wherever it strikes.", "image": "22.png", "family": "mace" },
    { "name": "Fury's End", "description": "A mace that channels the purest form of fury, crushing anything that stands in its way.", "image": "23.png", "family": "mace" },
    { "name": "Twilight Maul", "description": "A dark, enigmatic mace that seems to absorb the light, bringing eternal twilight.", "image": "24.png", "family": "mace" },
    { "name": "Lion's Roar", "description": "A massive mace that roars with the strength of a lion, bringing terror to its enemies.", "image": "25.png", "family": "mace" },
    { "name": "Voidstrike", "description": "A mace imbued with the power of the void, capable of striking from beyond the grave.", "image": "26.png", "family": "mace" },
    { "name": "Titancrusher", "description": "A gargantuan mace capable of smashing through the armor of even the largest titans.", "image": "27.png", "family": "mace" },
    { "name": "Ravenshadow", "description": "A shadowy mace that strikes like the darkness, silent and deadly.", "image": "28.png", "family": "mace" },
    { "name": "Bloodmoon Maul", "description": "A massive hammer that glows with a blood-red hue under the moonlight.", "image": "29.png", "family": "mace" },
    { "name": "Eternal Justice", "description": "A divine mace forged to bring justice, its strikes leaving no mercy for the wicked.", "image": "30.png", "family": "mace" },
    { "name": "Revenge's Wrath", "description": "A mace forged from the desire for vengeance, each blow heavier than the last.", "image": "31.png", "family": "mace" },
    { "name": "Skybreaker", "description": "A hammer that can shatter the skies, its impact causing thunderous shockwaves.", "image": "32.png", "family": "mace" },
    { "name": "Doomhammer", "description": "A legendary weapon that brings doom to all who stand against its wielder.", "image": "33.png", "family": "mace" },
    { "name": "Ravager", "description": "A brutal mace that causes devastation with every swing, tearing through all in its path.", "image": "34.png", "family": "mace" },
    { "name": "Hell's Bane", "description": "A mace forged in the fires of hell, its strikes scorching all that it touches.", "image": "35.png", "family": "mace" },
    { "name": "Soulrender", "description": "A soul-stealing mace that rends both the body and the spirit of its victims.", "image": "36.png", "family": "mace" },
    { "name": "Warlord's Might", "description": "A legendary mace wielded by the fiercest of warlords, its strength unmatched.", "image": "37.png", "family": "mace" },
    { "name": "Frostforged", "description": "A mace imbued with the cold of the frozen north, capable of freezing its victims solid.", "image": "38.png", "family": "mace" },
    { "name": "Vortex Hammer", "description": "A hammer that creates a vortex with each strike, pulling in and crushing anything nearby.", "image": "39.png", "family": "mace" },
    { "name": "Ironclad Maul", "description": "A heavy, iron-hilted maul that can crush through any defense with ease.", "image": "40.png", "family": "mace" },
    { "name": "Shatterstone", "description": "A mighty mace that shatters rocks and bones alike, a weapon of pure destruction.", "image": "41.png", "family": "mace" },
    { "name": "Hellfire Maul", "description": "A fiery maul that burns with infernal flames, scorching everything in its path.", "image": "42.png", "family": "mace" },
    { "name": "Witchhunter", "description": "A mace crafted for hunting dark magic users, its strikes capable of disrupting spells.", "image": "43.png", "family": "mace" },
    { "name": "Thunderclap", "description": "A mace that strikes with the power of thunder, shaking the ground beneath its wielder.", "image": "44.png", "family": "mace" },
    { "name": "Shadowsoul", "description": "A cursed mace that corrupts the very soul of its victim with every blow.", "image": "45.png", "family": "mace" },
    { "name": "Earthshaker", "description": "A mighty weapon capable of shaking the earth itself with every devastating strike.", "image": "46.png", "family": "mace" },
    { "name": "Dragonstrike", "description": "A powerful mace forged to slay dragons, its head decorated with dragon scales.", "image": "47.png", "family": "mace" },
    { "name": "Wrathhammer", "description": "A hammer that channels pure wrath, capable of obliterating anything in its path.", "image": "48.png", "family": "mace" }
  ],
  'staves': [
    {
      name: '1',
      description: 'A traditional staff known for its accuracy and range.',
      image: '1.png',
      family: 'air'
    }
  ],
  'ranged': [
    {
      name: '1',
      description: 'A powerful crossbow that delivers devastating shots.',
      image: '1.png',
      family: 'air'
    }
  ],
}

export const lightArmors: { [key in ArmorSlot]: ArmorItem[] } = {
  'head': [
    {
      name: "1",
      description: 'A simple hood worn by novice mages.',
      image: '1.png'
    }
  ],
  'chest': [
    {
      name: "1",
      description: 'A lightweight robe providing minimal protection, designed for apprentice spellcasters.',
      image: '1.png'
    }
  ],
  'legs': [
    {
      name: "1",
      description: 'Comfortable pants that allow for easy movement during spell practice.',
      image: '1.png'
    }
  ],
  'feet': [
    {
      name: "1",
      description: 'Simple boots that offer modest protection and comfort for new mages.',
      image: '1.png'
    }
  ],
  'hands': [
    {
      name: "1",
      description: 'Gloves that provide basic protection while handling magical items.',
      image: '1.png'
    }
  ],
  'belt': [
    {
      name: "1",
      description: 'No description yet',
      image: '1.png'
    }
  ]
}

export const mediumArmors: { [key in ArmorSlot]: ArmorItem[] } = {
  'head': [
    {
      name: "1",
      description: 'A durable hood designed to offer protection without sacrificing stealth.',
      image: '1.png'
    }
  ],
  'chest': [
    {
      name: "1",
      description: 'A lightweight, reinforced jacket ideal for long expeditions and quick movements.',
      image: '1.png'
    }
  ],
  'legs': [
    {
      name: "1",
      description: 'Pants tailored for agility and endurance, suitable for traversing rough terrain.',
      image: '1.png'
    }
  ],
  'feet': [
    {
      name: "1",
      description: 'Sturdy boots providing excellent traction and support for scouting missions.',
      image: '1.png'
    }
  ],
  'hands': [
    {
      name: "1",
      description: 'Gloves offering both grip and protection, ideal for handling tools and climbing.',
      image: '1.png'
    }
  ],
  'belt': [
    {
      name: "1",
      description: 'Some belt description.',
      image: '1'
    }
  ]
}


export const heavyArmors: { [key in ArmorSlot]: ArmorItem[] } = {
  'head': [
    {
      name: "Recruit's Helm",
      description: "A simple helm designed for recruits during their initial training.",
      image: '1.png'
    },
    {
      name: "Ironbound Visor",
      description: "A sturdy visor offering decent protection for low-ranking warriors.",
      image: '2.png'
    },
    {
      name: "Guard's Headgear",
      description: "Standard-issue helmet for city guards, providing solid defense.",
      image: '3.png'
    },
    {
      name: "Battleworn Helm",
      description: "An aged helm bearing the scars of countless battles.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard",
      description: "A protective helm worn by those leading the frontlines.",
      image: '5.png'
    },
    {
      name: "Knight's Crest",
      description: "A helm adorned with the emblem of a valiant knight's order.",
      image: '6.png'
    },
    {
      name: "Horns of Defiance",
      description: "A horned helm symbolizing unyielding courage in the face of danger.",
      image: '7.png'
    },
    {
      name: "Warrior's Mantle",
      description: "A robust helm, often worn by seasoned fighters.",
      image: '8.png'
    },
    {
      name: "Crimson Guard",
      description: "A blood-red helm, a mark of elite royal defenders.",
      image: '9.png'
    },
    {
      name: "Furyforge Helm",
      description: "Forged in the fires of battle, this helm resonates with warrior's rage.",
      image: '10.png'
    },
    {
      name: "Helm of the Watcher",
      description: "A helm imbued with vigilance, worn by protectors of the realm.",
      image: '11.png'
    },
    {
      name: "Golden Aegis",
      description: "A golden helm offering both prestige and powerful defense.",
      image: '12.png'
    },
    {
      name: "Dreadspire Helm",
      description: "A sinister helm crafted to inspire fear in enemies.",
      image: '13.png'
    },
    {
      name: "Celestial Guard",
      description: "A radiant helm said to be blessed by divine forces.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Visor",
      description: "A sleek and menacing helm, forged from rare shadowsteel.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Crown",
      description: "The ultimate symbol of a warlord's dominance and unbreakable will.",
      image: '16.png'
    }
  ],
  'chest': [
    {
      name: "Recruit's Breastplate",
      description: "A basic breastplate providing essential protection for new recruits.",
      image: '1.png'
    },
    {
      name: "Ironbound Chestguard",
      description: "A sturdy chestguard offering reliable defense for low-ranking warriors.",
      image: '2.png'
    },
    {
      name: "Guard's Breastplate",
      description: "Standard-issue chest armor for city guards, offering balanced protection.",
      image: '3.png'
    },
    {
      name: "Battleworn Cuirass",
      description: "An aged cuirass bearing the marks of countless skirmishes.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard Plate",
      description: "A reinforced breastplate worn by warriors leading the charge.",
      image: '5.png'
    },
    {
      name: "Knight's Chestplate",
      description: "A regal chestpiece bearing the emblem of a noble order.",
      image: '6.png'
    },
    {
      name: "Chestguard of Defiance",
      description: "A bold chestpiece adorned with horns, symbolizing unyielding resilience.",
      image: '7.png'
    },
    {
      name: "Warrior's Cuirass",
      description: "A dependable breastplate favored by experienced combatants.",
      image: '8.png'
    },
    {
      name: "Crimson Chestguard",
      description: "A crimson-hued chestguard worn by elite defenders of the realm.",
      image: '9.png'
    },
    {
      name: "Furyforge Breastplate",
      description: "A chestpiece forged with the fury of battle in mind.",
      image: '10.png'
    },
    {
      name: "Breastplate of the Watcher",
      description: "A vigilant chestguard, worn by guardians of the kingdom.",
      image: '11.png'
    },
    {
      name: "Golden Aegis Chestpiece",
      description: "A gleaming golden chestpiece, signifying both honor and protection.",
      image: '12.png'
    },
    {
      name: "Dreadspire Cuirass",
      description: "A dark and imposing cuirass, designed to strike fear into enemies.",
      image: '13.png'
    },
    {
      name: "Celestial Breastplate",
      description: "A radiant chestpiece said to be imbued with divine blessings.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Chestguard",
      description: "A sleek and shadowy chestguard forged from rare materials.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Breastplate",
      description: "The pinnacle of craftsmanship, a breastplate fit for a legendary warlord.",
      image: '16.png'
    }
  ],
  'legs': [
    {
      name: "Recruit's Greaves",
      description: "Simple greaves offering basic protection for novice warriors.",
      image: '1.png'
    },
    {
      name: "Ironbound Legplates",
      description: "Durable legplates for those starting their warrior's journey.",
      image: '2.png'
    },
    {
      name: "Guard's Leggings",
      description: "Standard-issue leggings for city defenders.",
      image: '3.png'
    },
    {
      name: "Battleworn Legguards",
      description: "Legguards carrying the marks of countless battles.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard Greaves",
      description: "Reinforced greaves for warriors on the frontlines.",
      image: '5.png'
    },
    {
      name: "Knight's Legplates",
      description: "Ornate legplates bearing a knightly emblem.",
      image: '6.png'
    },
    {
      name: "Legguards of Defiance",
      description: "Horn-adorned legguards symbolizing unmatched determination.",
      image: '7.png'
    },
    {
      name: "Warrior's Legplates",
      description: "Reliable legplates worn by seasoned warriors.",
      image: '8.png'
    },
    {
      name: "Crimson Greaves",
      description: "Blood-red greaves signifying an elite status.",
      image: '9.png'
    },
    {
      name: "Furyforge Legguards",
      description: "Legguards forged to withstand the chaos of war.",
      image: '10.png'
    },
    {
      name: "Legplates of the Watcher",
      description: "Protective legplates used by vigilant guardians.",
      image: '11.png'
    },
    {
      name: "Golden Aegis Greaves",
      description: "Golden greaves offering both style and resilience.",
      image: '12.png'
    },
    {
      name: "Dreadspire Legguards",
      description: "Dark and ominous legguards, feared by enemies.",
      image: '13.png'
    },
    {
      name: "Celestial Legplates",
      description: "Radiant legplates imbued with divine power.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Greaves",
      description: "Sleek greaves forged from rare shadowsteel.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Legplates",
      description: "The ultimate symbol of power for a legendary warlord.",
      image: '16.png'
    }
  ],
  'feet': [
    {
      name: "Recruit's Boots",
      description: "Simple boots designed for training recruits.",
      image: '1.png'
    },
    {
      name: "Ironbound Sabatons",
      description: "Sturdy boots for early combat scenarios.",
      image: '2.png'
    },
    {
      name: "Guard's Footwear",
      description: "Protective boots for city guards.",
      image: '3.png'
    },
    {
      name: "Battleworn Boots",
      description: "Boots carrying the marks of fierce battles.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard Sabatons",
      description: "Reinforced sabatons for the fearless vanguard.",
      image: '5.png'
    },
    {
      name: "Knight's Sabatons",
      description: "Elegant boots for knights of the realm.",
      image: '6.png'
    },
    {
      name: "Boots of Defiance",
      description: "Adorned boots symbolizing unshakable resolve.",
      image: '7.png'
    },
    {
      name: "Warrior's Boots",
      description: "Rugged boots for experienced fighters.",
      image: '8.png'
    },
    {
      name: "Crimson Sabatons",
      description: "Boots dyed red, representing valor and sacrifice.",
      image: '9.png'
    },
    {
      name: "Furyforge Boots",
      description: "Boots built to endure the fires of war.",
      image: '10.png'
    },
    {
      name: "Boots of the Watcher",
      description: "Protective boots favored by vigilant warriors.",
      image: '11.png'
    },
    {
      name: "Golden Aegis Sabatons",
      description: "Gleaming golden sabatons of unmatched quality.",
      image: '12.png'
    },
    {
      name: "Dreadspire Boots",
      description: "Fearsome boots that exude a dark aura.",
      image: '13.png'
    },
    {
      name: "Celestial Boots",
      description: "Radiant boots imbued with celestial energy.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Sabatons",
      description: "Sabatons forged from rare and shadowy materials.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Sabatons",
      description: "Legendary boots for a warlord's unstoppable march.",
      image: '16.png'
    }
  ],
  'hands': [
    {
      name: "Recruit's Gloves",
      description: "Light gloves for new warriors in training.",
      image: '1.png'
    },
    {
      name: "Ironbound Gauntlets",
      description: "Durable gauntlets for novice fighters.",
      image: '2.png'
    },
    {
      name: "Guard's Gloves",
      description: "Reliable gloves used by the city guard.",
      image: '3.png'
    },
    {
      name: "Battleworn Gauntlets",
      description: "Gauntlets marked with the wear of many battles.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard Gauntlets",
      description: "Strong gauntlets for warriors on the frontlines.",
      image: '5.png'
    },
    {
      name: "Knight's Gauntlets",
      description: "Ornate gauntlets for noble knights.",
      image: '6.png'
    },
    {
      name: "Gauntlets of Defiance",
      description: "Horned gauntlets symbolizing undying bravery.",
      image: '7.png'
    },
    {
      name: "Warrior's Gloves",
      description: "Sturdy gloves for seasoned fighters.",
      image: '8.png'
    },
    {
      name: "Crimson Gauntlets",
      description: "Gloves stained red, a mark of elite defenders.",
      image: '9.png'
    },
    {
      name: "Furyforge Gauntlets",
      description: "Gauntlets built for the harshest battles.",
      image: '10.png'
    },
    {
      name: "Gauntlets of the Watcher",
      description: "Protective gloves for vigilant warriors.",
      image: '11.png'
    },
    {
      name: "Golden Aegis Gauntlets",
      description: "Shining gauntlets that combine defense and prestige.",
      image: '12.png'
    },
    {
      name: "Dreadspire Gauntlets",
      description: "Menacing gauntlets that radiate dark energy.",
      image: '13.png'
    },
    {
      name: "Celestial Gloves",
      description: "Radiant gloves blessed with celestial power.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Gauntlets",
      description: "Gauntlets made from rare shadow-infused metal.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Gauntlets",
      description: "The ultimate gloves for a warlord's conquest.",
      image: '16.png'
    }
  ],
  'belt': [
    {
      name: "Recruit's Belt",
      description: "A simple belt for new warriors starting their journey.",
      image: '1.png'
    },
    {
      name: "Ironbound Girdle",
      description: "A sturdy belt providing essential support.",
      image: '2.png'
    },
    {
      name: "Guard's Cinch",
      description: "A durable belt for city guards.",
      image: '3.png'
    },
    {
      name: "Battleworn Belt",
      description: "A belt bearing the wear of many battles.",
      image: '4.png'
    },
    {
      name: "Steel Vanguard Girdle",
      description: "A belt designed for warriors on the frontlines.",
      image: '5.png'
    },
    {
      name: "Knight's Girdle",
      description: "An ornate belt symbolizing noble lineage.",
      image: '6.png'
    },
    {
      name: "Girdle of Defiance",
      description: "A bold belt signifying indomitable resolve.",
      image: '7.png'
    },
    {
      name: "Warrior's Belt",
      description: "A rugged belt for experienced fighters.",
      image: '8.png'
    },
    {
      name: "Crimson Girdle",
      description: "A red belt that signifies valor and heroism.",
      image: '9.png'
    },
    {
      name: "Furyforge Belt",
      description: "A robust belt forged for the heat of battle.",
      image: '10.png'
    },
    {
      name: "Belt of the Watcher",
      description: "A belt providing firm support to vigilant warriors.",
      image: '11.png'
    },
    {
      name: "Golden Aegis Girdle",
      description: "A gleaming belt that radiates protection and prestige.",
      image: '12.png'
    },
    {
      name: "Dreadspire Belt",
      description: "A foreboding belt exuding a dark presence.",
      image: '13.png'
    },
    {
      name: "Celestial Girdle",
      description: "A radiant belt imbued with celestial power.",
      image: '14.png'
    },
    {
      name: "Shadowsteel Belt",
      description: "A sleek belt forged from rare shadow-infused metal.",
      image: '15.png'
    },
    {
      name: "Eternal Warlord's Belt",
      description: "A legendary belt representing absolute dominance.",
      image: '16.png'
    }
  ]
}

export const shields: ArmorItem[] = [
  {
    name: "1",
    description: "A sturdy shield used by seasoned warriors to block even the strongest attacks.",
    image: "1.png"
  },
  {
    name: "Reinforced Guard",
    description: "A basic shield reinforced with iron to withstand heavy blows.",
    image: "2.png"
  },
  {
    name: "Defender's Bulwark",
    description: "A shield favored by those who protect the frontlines in battle.",
    image: "3.png"
  },
  {
    name: "Aspiring Protector",
    description: "A lightweight shield, perfect for training and practice.",
    image: "4.png"
  },
  {
    name: "Sentinel's Ward",
    description: "A reliable shield used by scouts on dangerous missions.",
    image: "5.png"
  },
  {
    name: "Ironclad Barrier",
    description: "A heavy shield designed to absorb the impact of large strikes.",
    image: "6.png"
  },
  {
    name: "Knight's Aegis",
    description: "A polished shield carried by aspiring knights.",
    image: "7.png"
  },
  {
    name: "Protector's Guard",
    description: "A symbol of resilience among loyal warriors.",
    image: "8.png"
  },
  {
    name: "Vanguard's Shield",
    description: "A shield used by the vanguard to break enemy ranks.",
    image: "9.png"
  },
  {
    name: "Crest of Valor",
    description: "A shield engraved with the emblem of a courageous fighter.",
    image: "10.png"
  },
  {
    name: "Shield of Fortitude",
    description: "This shield inspires unyielding strength in its bearer.",
    image: "11.png"
  },
  {
    name: "Steadfast Barrier",
    description: "Designed for warriors who refuse to falter in battle.",
    image: "12.png"
  },
  {
    name: "Guardian's Resolve",
    description: "A shield that embodies the unwavering spirit of a defender.",
    image: "13.png"
  },
  {
    name: "Champion's Bastion",
    description: "A renowned shield used by victorious champions.",
    image: "14.png"
  },
  {
    name: "Oathkeeper's Shield",
    description: "A shield carried by those sworn to protect their allies.",
    image: "15.png"
  },
  {
    name: "Dawnbreaker Aegis",
    description: "A shield that gleams like the rising sun.",
    image: "16.png"
  },
  {
    name: "Eternal Ward",
    description: "A shield infused with ancient protective enchantments.",
    image: "17.png"
  },
  {
    name: "Bastion of Glory",
    description: "A shield that shines with the pride of its wielder.",
    image: "18.png"
  },
  {
    name: "Ward of the Lionheart",
    description: "A symbol of courage and tenacity on the battlefield.",
    image: "19.png"
  },
  {
    name: "Gilded Protector",
    description: "A magnificent shield plated with gold.",
    image: "20.png"
  },
  {
    name: "Unyielding Barrier",
    description: "A shield that refuses to break, even under the greatest pressure.",
    image: "21.png"
  },
  {
    name: "Shield of Radiance",
    description: "A radiant shield blessed by celestial forces.",
    image: "22.png"
  },
  {
    name: "Bulwark of Shadows",
    description: "A mysterious shield cloaked in darkness.",
    image: "23.png"
  },
  {
    name: "Vanguard's Pride",
    description: "A shield that displays the honor of a fearless vanguard.",
    image: "24.png"
  },
  {
    name: "Thunderstrike Aegis",
    description: "This shield crackles with the energy of a storm.",
    image: "25.png"
  },
  {
    name: "Shield of the Phoenix",
    description: "A fiery shield said to be reborn from the ashes of battle.",
    image: "26.png"
  },
  {
    name: "Dragonscale Barrier",
    description: "A legendary shield made from the scales of a mighty dragon.",
    image: "27.png"
  },
  {
    name: "Ebonhold Ward",
    description: "A dark and sturdy shield forged in the depths of the underworld.",
    image: "28.png"
  },
  {
    name: "Starlight Bastion",
    description: "A shield that shimmers with the light of distant stars.",
    image: "29.png"
  },
  {
    name: "Titan's Aegis",
    description: "A massive shield said to be unmovable in battle.",
    image: "30.png"
  },
  {
    name: "Voidguard Shield",
    description: "A shield that seems to absorb the very essence of the void.",
    image: "31.png"
  },
  {
    name: "Ethereal Protector",
    description: "A shield surrounded by an ethereal glow.",
    image: "32.png"
  },
  {
    name: "Runewarden's Guard",
    description: "A shield inscribed with powerful runes of defense.",
    image: "33.png"
  },
  {
    name: "Celestial Bulwark",
    description: "A shield infused with the power of the heavens.",
    image: "34.png"
  },
  {
    name: "Aegis of the Ancients",
    description: "A shield passed down through generations of protectors.",
    image: "35.png"
  },
  {
    name: "Obsidian Ward",
    description: "A shield crafted from pure obsidian, unyielding and dark.",
    image: "36.png"
  },
  {
    name: "Eternal Warlord's Shield",
    description: "The ultimate shield of an unstoppable warrior.",
    image: "37.png"
  }
]

export const jewelery: { [key in JewelerySlot]: ArmorItem[] } = {
  'neck': [
    {
      name: "Amulet of the Moon",
      description: "A mystical amulet that channels the energy of the moon, granting clarity of mind.",
      image: "1.png"
    },
    {
      name: "Pendant of Eternal Flame",
      description: "A pendant that glows with an everlasting flame, providing warmth and protection.",
      image: "2.png"
    },
    {
      name: "Starcaller Pendant",
      description: "An enchanted pendant that allows the wearer to tap into the stars' energy.",
      image: "3.png"
    },
    {
      name: "Wraithbone Necklace",
      description: "A dark, ethereal necklace that enhances the wearer's ability to phase through shadows.",
      image: "4.png"
    },
    {
      name: "Heart of the Forest",
      description: "An amulet that draws its power from the deep woods, fortifying the wearer against poison.",
      image: "5.png"
    },
    {
      name: "Vengeful Talisman",
      description: "A talisman imbued with the power of retribution, granting enhanced combat prowess.",
      image: "6.png"
    },
    {
      name: "Glimmering Crescent",
      description: "A shining crescent-shaped necklace that boosts the wearer's magical affinity.",
      image: "7.png"
    },
    {
      name: "Celestial Orb",
      description: "An orb-shaped necklace that harnesses the celestial powers of the heavens.",
      image: "8.png"
    },
    {
      name: "Talisman of Endless Power",
      description: "A talisman that draws from the endless void, empowering the wearer with raw energy.",
      image: "9.png"
    },
    {
      name: "Veil of the Seer",
      description: "A mysterious veil that enhances clairvoyance and foresight.",
      image: "10.png"
    },
    {
      name: "Dragon's Eye Amulet",
      description: "An amulet that grants the wearer a fierce determination and the strength of a dragon.",
      image: "11.png"
    },
    {
      name: "Shattered Soul Necklace",
      description: "A dark necklace with a fractured gemstone, offering both strength and torment.",
      image: "12.png"
    },
    {
      name: "Frostbite Pendant",
      description: "A pendant imbued with the power of ice, enhancing resistance to cold.",
      image: "13.png"
    },
    {
      name: "Blessing of the Wilds",
      description: "A charm crafted by druids, providing protection against nature's curses.",
      image: "14.png"
    },
    {
      name: "Crown of Serenity",
      description: "A graceful necklace that calms the mind, soothing the soul of its wearer.",
      image: "15.png"
    },
    {
      name: "Emberheart Amulet",
      description: "A fiery amulet that raises the wearer's body temperature, improving strength.",
      image: "16.png"
    },
    {
      name: "Veil of Shadows",
      description: "A mysterious veil that increases stealth and makes the wearer harder to detect.",
      image: "17.png"
    },
    {
      name: "Talisman of the Eternal Night",
      description: "A dark talisman that boosts the wearer's nocturnal abilities.",
      image: "18.png"
    },
    {
      name: "Wanderer's Jewel",
      description: "A gem-encrusted pendant that aids travelers, providing guidance and good fortune.",
      image: "19.png"
    },
    {
      name: "Ancient Sigil",
      description: "An ancient symbol of protection, shielding the wearer from dark magic.",
      image: "20.png"
    },
    {
      name: "Moonlit Grace",
      description: "A delicate pendant that enhances agility and quick reflexes.",
      image: "21.png"
    },
    {
      name: "Phoenix Feather Necklace",
      description: "A glowing pendant crafted from the feather of a phoenix, symbolizing rebirth.",
      image: "22.png"
    },
    {
      name: "Elder's Blessing",
      description: "A necklace passed down from ancient elders, offering wisdom and resilience.",
      image: "23.png"
    },
    {
      name: "Cursed Relic",
      description: "A relic from a forgotten time, granting the wearer power at a cost.",
      image: "24.png"
    }
  ],
  'ring': [
    {
      name: "Ring of the First Dawn",
      description: "A ring imbued with the power of the first light, granting wisdom and clarity.",
      image: "1.png"
    },
    {
      name: "Ring of Eternal Life",
      description: "A ring that promises immortality, but at a great cost to the soul.",
      image: "2.png"
    },
    {
      name: "Golden Band of Power",
      description: "A simple golden band that enhances the wearer's physical strength.",
      image: "3.png"
    },
    {
      name: "Shadow Ring",
      description: "A dark ring that increases the wearer's stealth and ability to blend into shadows.",
      image: "4.png"
    },
    {
      name: "Celestial Band",
      description: "A celestial band that channels the powers of the stars, boosting magical abilities.",
      image: "5.png"
    },
    {
      name: "Ring of the Abyss",
      description: "A dark and ominous ring that grants power over the depths of the ocean.",
      image: "6.png"
    },
    {
      name: "Silver Ring of Restoration",
      description: "A healing ring that mends wounds and restores the wearer's vitality.",
      image: "7.png"
    },
    {
      name: "Ring of the Fireheart",
      description: "A fiery ring that enhances the wearer's resistance to heat and flame.",
      image: "8.png"
    },
    {
      name: "Amethyst Band",
      description: "A ring made from amethyst, providing protection against mental manipulation.",
      image: "9.png"
    },
    {
      name: "Ring of the Deep Woods",
      description: "A ring forged in the heart of the forest, enhancing connection with nature.",
      image: "10.png"
    },
    {
      name: "Ring of the Eternal Flame",
      description: "A powerful ring that protects against cold and grants fiery abilities.",
      image: "11.png"
    },
    {
      name: "Ring of Strength",
      description: "A ring that boosts the wearer's physical strength and endurance.",
      image: "12.png"
    },
    {
      name: "Ring of the Moonstone",
      description: "A magical ring that amplifies the wearer's connection to lunar magic.",
      image: "13.png"
    },
    {
      name: "Ring of the Fey",
      description: "A ring woven by the fey, enhancing the wearer's agility and grace.",
      image: "14.png"
    },
    {
      name: "Obsidian Band",
      description: "A dark ring made from obsidian, granting immunity to certain curses.",
      image: "15.png"
    },
    {
      name: "Ring of Immortality",
      description: "A ring with the power to grant prolonged life, though not eternal.",
      image: "16.png"
    },
    {
      name: "Phoenix's Embrace",
      description: "A ring forged from the ashes of a phoenix, granting fiery strength.",
      image: "17.png"
    },
    {
      name: "Witch's Ring",
      description: "A ring worn by witches, boosting magical power and spellcasting abilities.",
      image: "18.png"
    },
    {
      name: "Ring of the Stormcaller",
      description: "A ring that harnesses the power of storms, increasing speed and agility.",
      image: "19.png"
    },
    {
      name: "Ring of the Undying",
      description: "A mysterious ring that offers the wearer resilience against death's grip.",
      image: "20.png"
    },
    {
      name: "Ring of Time",
      description: "A ring that slows time for the wearer, giving them an edge in battle.",
      image: "21.png"
    },
    {
      name: "Ring of the Unseen",
      description: "A ring that grants invisibility and the ability to move undetected.",
      image: "22.png"
    },
    {
      name: "Elven Band",
      description: "A delicate band forged by elves, enhancing dexterity and precision.",
      image: "23.png"
    },
    {
      name: "Ring of Rebirth",
      description: "A ring that symbolizes rebirth, restoring vitality and health.",
      image: "24.png"
    }
  ]
};
