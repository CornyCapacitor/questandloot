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
  "staves": [
    { "name": "Stormcaller Staff", "description": "A staff imbued with the raw power of a thunderstorm, crackling with lightning.", "image": "1.png", "family": "lightning" },
    { "name": "Stonewarden Staff", "description": "A sturdy staff carved from ancient stone, resonating with the power of the earth.", "image": "2.png", "family": "earth" },
    { "name": "Gaia's Touch", "description": "A staff adorned with emeralds, connected to the heartbeat of the land.", "image": "3.png", "family": "earth" },
    { "name": "Obsidian Pillar", "description": "A dark, volcanic staff that channels the primal force of earth.", "image": "4.png", "family": "earth" },
    { "name": "Mystic Whisper", "description": "A staff of shimmering crystal that radiates an aura of ancient wisdom.", "image": "5.png", "family": "mystic" },
    { "name": "Reaper's Scythe", "description": "A sinister staff with a blade-like tip, steeped in the essence of death.", "image": "6.png", "family": "death" },
    { "name": "Ethereal Conduit", "description": "A glowing staff that channels the unseen currents of mystical energy.", "image": "7.png", "family": "mystic" },
    { "name": "Inferno Rod", "description": "A staff wreathed in flames, said to be forged in the heart of a volcano.", "image": "8.png", "family": "fire" },
    { "name": "Astral Nexus", "description": "A staff that glows faintly, connecting the wielder to the cosmic unknown.", "image": "9.png", "family": "mystic" },
    { "name": "Zephyr Staff", "description": "A light and flexible staff that channels the winds to aid its wielder.", "image": "10.png", "family": "air" },
    { "name": "Earthen Bulwark", "description": "A massive staff hewn from the roots of a world tree, exuding stability.", "image": "11.png", "family": "earth" },
    { "name": "Bonechiller", "description": "A skeletal staff infused with the chill of death, freezing the very soul.", "image": "12.png", "family": "death" },
    { "name": "Shadow's Reach", "description": "A dark, twisted staff that thrives in the absence of light.", "image": "13.png", "family": "dark" },
    { "name": "Arcanist's Focus", "description": "A staff humming with arcane energy, glowing softly with power.", "image": "14.png", "family": "arcane" },
    { "name": "Radiant Scepter", "description": "A staff imbued with holy light, burning away corruption.", "image": "15.png", "family": "holy" },
    { "name": "Tidebinder Staff", "description": "A staff encrusted with sea gems, carrying the soothing power of water.", "image": "16.png", "family": "water" },
    { "name": "Tempest Rod", "description": "A staff that harnesses storms, glowing with lightning strikes.", "image": "17.png", "family": "lightning" },
    { "name": "Flameforged Staff", "description": "A fiery staff that radiates intense heat, burning all in its path.", "image": "18.png", "family": "fire" },
    { "name": "Celestial Beacon", "description": "A staff glowing with mystic energy, a guide for lost souls.", "image": "19.png", "family": "mystic" },
    { "name": "Galeweaver Staff", "description": "A staff that commands the winds, summoning gales to its aid.", "image": "20.png", "family": "air" },
    { "name": "Mountain's Heart", "description": "A powerful staff carved from granite, radiating earthen strength.", "image": "21.png", "family": "earth" },
    { "name": "Gravekeeper", "description": "A staff steeped in necrotic power, a harbinger of death.", "image": "22.png", "family": "death" },
    { "name": "Duskshard", "description": "A staff forged in shadow, drawing power from the dark void.", "image": "23.png", "family": "dark" },
    { "name": "Eldritch Spire", "description": "A staff emanating raw arcane energy, capable of altering reality itself.", "image": "24.png", "family": "arcane" },
    { "name": "Divine Sentinel", "description": "A staff of radiant light, protecting its wielder from darkness.", "image": "25.png", "family": "holy" },
    { "name": "Aqua's Grace", "description": "A staff adorned with flowing water, providing serenity and renewal.", "image": "26.png", "family": "water" },
    { "name": "Lightning Fang", "description": "A staff that crackles with electric power, delivering jolts of destruction.", "image": "27.png", "family": "lightning" },
    { "name": "Blazewarden", "description": "A fiery staff that scorches everything in its wake.", "image": "28.png", "family": "fire" },
    { "name": "Mystic Oracle", "description": "A staff of prophetic power, glimpsing the threads of fate.", "image": "29.png", "family": "mystic" },
    { "name": "Skyrender Staff", "description": "A staff that harnesses the skies, bending the winds to its will.", "image": "30.png", "family": "air" },
    { "name": "Earthshatterer", "description": "A staff that shakes the ground with every strike, unleashing tremors.", "image": "31.png", "family": "earth" },
    { "name": "Necrotic Spire", "description": "A staff of withering death, draining life from all it touches.", "image": "32.png", "family": "death" },
    { "name": "Nightfall Staff", "description": "A staff cloaked in shadow, bringing forth the darkest night.", "image": "33.png", "family": "dark" },
    { "name": "Manaforge Pillar", "description": "A staff pulsing with arcane power, reshaping the battlefield.", "image": "34.png", "family": "arcane" },
    { "name": "Seraph's Light", "description": "A holy staff radiating divine protection and healing.", "image": "35.png", "family": "holy" },
    { "name": "Ocean's Embrace", "description": "A staff that carries the tides, calming or drowning its foes.", "image": "36.png", "family": "water" },
    { "name": "Stormbringer Staff", "description": "A staff that summons storms, wielding the fury of the heavens.", "image": "37.png", "family": "lightning" },
    { "name": "Infernal Catalyst", "description": "A blazing staff that scorches the very air with its heat.", "image": "38.png", "family": "fire" },
    { "name": "Mystic Guardian", "description": "A staff of ancient power, standing as a bulwark against chaos.", "image": "39.png", "family": "mystic" },
    { "name": "Windspire Staff", "description": "A staff that channels roaring winds into devastating attacks.", "image": "40.png", "family": "air" },
    { "name": "Titan's Root", "description": "A colossal staff carved from the roots of the earth itself.", "image": "41.png", "family": "earth" },
    { "name": "Soulreaver", "description": "A deathly staff that consumes the souls of those it strikes.", "image": "42.png", "family": "death" },
    { "name": "Voidbinder", "description": "A staff that draws upon the infinite darkness of the void.", "image": "43.png", "family": "dark" },
    { "name": "Archmage's Beacon", "description": "A staff of immense arcane energy, illuminating the path to mastery.", "image": "44.png", "family": "arcane" },
    { "name": "Heaven's Wrath", "description": "A divine staff that smites foes with holy retribution.", "image": "45.png", "family": "holy" },
    { "name": "Abyssal Tidecaller", "description": "A staff of watery depths, capable of summoning tidal waves.", "image": "46.png", "family": "water" },
    { "name": "Thundergod's Fury", "description": "A staff that crackles with the wrath of storms, unleashing destruction.", "image": "47.png", "family": "lightning" },
    { "name": "Pyrestorm", "description": "A legendary staff of fire, engulfing the battlefield in infernos.", "image": "48.png", "family": "fire" }
  ],
  "ranged": [
    { "name": "Hunting Bow", "description": "A simple wooden bow designed for precision and hunting small game.", "image": "1.png", "family": "bow" },
    { "name": "Ironbolt Crossbow", "description": "A sturdy crossbow crafted with iron fittings for added durability.", "image": "2.png", "family": "crossbow" },
    { "name": "Longbow of the Plains", "description": "A well-crafted bow favored by hunters of the open plains.", "image": "3.png", "family": "bow" },
    { "name": "Steel String Crossbow", "description": "A reliable crossbow with reinforced strings for greater power.", "image": "4.png", "family": "crossbow" },
    { "name": "Ranger's Bow", "description": "A lightweight bow designed for stealth and agility.", "image": "5.png", "family": "bow" },
    { "name": "Guard's Crossbow", "description": "A standard-issue crossbow used by city guards.", "image": "6.png", "family": "crossbow" },
    { "name": "Forest Whisper", "description": "A bow crafted from enchanted wood, allowing for silent shots.", "image": "7.png", "family": "bow" },
    { "name": "Sharpshooter's Crossbow", "description": "A precision crossbow designed for long-range accuracy.", "image": "8.png", "family": "crossbow" },
    { "name": "Elven Bow", "description": "An elegant bow crafted by elven artisans, known for its unmatched finesse.", "image": "9.png", "family": "bow" },
    { "name": "Crimson Bolt Crossbow", "description": "A crossbow painted in red, favored by elite mercenaries.", "image": "10.png", "family": "crossbow" },
    { "name": "Shadow Stalker Bow", "description": "A dark bow, perfect for those who strike from the shadows.", "image": "11.png", "family": "bow" },
    { "name": "Reinforced Battle Crossbow", "description": "A heavy-duty crossbow used in large-scale battles.", "image": "12.png", "family": "crossbow" },
    { "name": "Bow of the Rising Sun", "description": "A bow that glows faintly with the light of dawn.", "image": "13.png", "family": "bow" },
    { "name": "Hunter's Companion Crossbow", "description": "A compact crossbow favored by skilled hunters.", "image": "14.png", "family": "crossbow" },
    { "name": "Stormbow", "description": "A bow that crackles with the power of lightning, striking swiftly.", "image": "15.png", "family": "bow" },
    { "name": "Windpiercer Crossbow", "description": "A crossbow engineered to fire bolts with unparalleled speed.", "image": "16.png", "family": "crossbow" },
    { "name": "Moonlit Bow", "description": "A bow that gleams under the light of the moon, favored by nocturnal hunters.", "image": "17.png", "family": "bow" },
    { "name": "Ironfang Crossbow", "description": "A robust crossbow known for its durability and lethal power.", "image": "18.png", "family": "crossbow" },
    { "name": "Phoenix Wing Bow", "description": "A fiery bow said to be imbued with the essence of a phoenix.", "image": "19.png", "family": "bow" },
    { "name": "Thunderstrike Crossbow", "description": "A crossbow that emits a thunderous roar with every shot.", "image": "20.png", "family": "crossbow" },
    { "name": "Soulseeker Bow", "description": "A bow rumored to guide its arrows unerringly to its target.", "image": "21.png", "family": "bow" },
    { "name": "Obsidian Crossbow", "description": "A crossbow forged from dark obsidian, as sharp as the night.", "image": "22.png", "family": "crossbow" },
    { "name": "The Verdant Bow", "description": "A bow crafted from living wood, radiating a green glow.", "image": "23.png", "family": "bow" },
    { "name": "Dreadspire Crossbow", "description": "A menacing crossbow designed to instill fear in its foes.", "image": "24.png", "family": "crossbow" },
    { "name": "Blazewind Bow", "description": "A bow wreathed in flames, leaving trails of fire in its wake.", "image": "25.png", "family": "bow" },
    { "name": "Frostfang Crossbow", "description": "A crossbow that freezes the air around its bolts.", "image": "26.png", "family": "crossbow" },
    { "name": "Eclipse Bow", "description": "A bow that harnesses the power of both light and darkness.", "image": "27.png", "family": "bow" },
    { "name": "Dragonclaw Crossbow", "description": "A crossbow forged with dragonbone, exuding primal power.", "image": "28.png", "family": "crossbow" },
    { "name": "Bow of the Stars", "description": "A celestial bow that draws power from the constellations.", "image": "29.png", "family": "bow" },
    { "name": "Shadowbane Crossbow", "description": "A crossbow crafted to banish shadows and pierce darkness.", "image": "30.png", "family": "crossbow" },
    { "name": "Arcane Bow", "description": "A magical bow imbued with the essence of the arcane.", "image": "31.png", "family": "bow" },
    { "name": "Stormbreak Crossbow", "description": "A crossbow that summons a tempest with every bolt.", "image": "32.png", "family": "crossbow" },
    { "name": "Bow of Eternity", "description": "A timeless bow said to be as old as the stars.", "image": "33.png", "family": "bow" },
    { "name": "Bolt of the Abyss", "description": "A crossbow that channels the dark power of the abyss.", "image": "34.png", "family": "crossbow" },
    { "name": "Flameheart Bow", "description": "A bow that burns with the fury of a thousand fires.", "image": "35.png", "family": "bow" },
    { "name": "Wraithpiercer Crossbow", "description": "A crossbow said to pierce through both armor and spirits.", "image": "36.png", "family": "crossbow" },
    { "name": "Celestial Bow", "description": "A radiant bow that shines with divine light.", "image": "37.png", "family": "bow" },
    { "name": "Ironbreaker Crossbow", "description": "A crossbow capable of breaking through the strongest defenses.", "image": "38.png", "family": "crossbow" },
    { "name": "Infernal Bow", "description": "A bow that blazes with unholy fire, striking fear into enemies.", "image": "39.png", "family": "bow" },
    { "name": "Nightfall Crossbow", "description": "A crossbow that cloaks itself in the darkness of night.", "image": "40.png", "family": "crossbow" },
    { "name": "Flameborn Bow", "description": "A bow forged in the heart of a volcano, blazing with eternal flame.", "image": "45.png", "family": "bow" },
    { "name": "Dreadshadow Crossbow", "description": "A sinister crossbow emanating dark energy, crafted in the shadows.", "image": "46.png", "family": "crossbow" },
    { "name": "Frostbite Bow", "description": "A bow imbued with the essence of frost, freezing its targets solid.", "image": "47.png", "family": "bow" },
    { "name": "Skullsplitter Crossbow", "description": "A brutal crossbow designed to shatter bones and crush skulls.", "image": "48.png", "family": "crossbow" }
  ]
}

export const lightArmors: { [key in ArmorSlot]: ArmorItem[] } = {
  'head': [
    {
      name: "Apprentice's Hood",
      description: "A simple hood worn by novice mages during their training.",
      image: '1.png'
    },
    {
      name: "Mystic's Cowl",
      description: "A hood imbued with a faint magical aura, ideal for beginner spellcasters.",
      image: '2.png'
    },
    {
      name: "Adept's Circlet",
      description: "A silver circlet enhancing focus and concentration.",
      image: '3.png'
    },
    {
      name: "Sage's Veil",
      description: "A veil blessed with protective enchantments against mental intrusion.",
      image: '4.png'
    },
    {
      name: "Enchanter's Cap",
      description: "A stylish cap enchanted to amplify minor spells.",
      image: '5.png'
    },
    {
      name: "Seer's Crown",
      description: "A golden crown, said to grant visions of the future.",
      image: '6.png'
    },
    {
      name: "Illusionist's Hat",
      description: "A wide-brimmed hat favored by masters of deception.",
      image: '7.png'
    },
    {
      name: "Arcanist's Helm",
      description: "A helm inscribed with ancient runes of power.",
      image: '8.png'
    },
    {
      name: "Magister's Tiara",
      description: "A delicate tiara enhancing the wearer's magical capabilities.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Headdress",
      description: "An ornate headdress crafted for masters of the arcane.",
      image: '10.png'
    },
    {
      name: "Runebinder's Hood",
      description: "A hood etched with runes that glow softly with latent magic.",
      image: '11.png'
    },
    {
      name: "Celestial Diadem",
      description: "A diadem said to channel the energies of the stars.",
      image: '12.png'
    },
    {
      name: "Warlock's Crown",
      description: "A dark crown radiating malevolent energy.",
      image: '13.png'
    },
    {
      name: "Ethereal Mask",
      description: "A mask that shimmers as if woven from the fabric of dreams.",
      image: '14.png'
    },
    {
      name: "Archmage's Circlet",
      description: "A circlet of immense power, worn only by the most skilled mages.",
      image: '15.png'
    },
    {
      name: "Crown of Infinite Wisdom",
      description: "A crown that grants unparalleled knowledge of the arcane.",
      image: '16.png'
    }
  ],
  'chest': [
    {
      name: "Apprentice's Robe",
      description: "A lightweight robe providing minimal protection, designed for apprentice spellcasters.",
      image: '1.png'
    },
    {
      name: "Mystic's Vestments",
      description: "Robes enchanted to enhance basic spellcasting abilities.",
      image: '2.png'
    },
    {
      name: "Adept's Cloak",
      description: "A fine cloak offering improved magical resistance.",
      image: '3.png'
    },
    {
      name: "Sage's Mantle",
      description: "A mantle blessed with protective charms.",
      image: '4.png'
    },
    {
      name: "Enchanter's Robes",
      description: "Elegant robes adorned with intricate embroidery of magical glyphs.",
      image: '5.png'
    },
    {
      name: "Seer's Raiment",
      description: "Flowing robes that amplify divination magic.",
      image: '6.png'
    },
    {
      name: "Illusionist's Cloak",
      description: "A shimmering cloak that aids in blending into the surroundings.",
      image: '7.png'
    },
    {
      name: "Arcanist's Garb",
      description: "An ornate robe inscribed with potent arcane runes.",
      image: '8.png'
    },
    {
      name: "Magister's Robes",
      description: "Regal robes worn by high-ranking mages.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Attire",
      description: "A luxurious outfit crafted for masters of arcane arts.",
      image: '10.png'
    },
    {
      name: "Runebinder's Cloak",
      description: "A cloak infused with glowing runic patterns.",
      image: '11.png'
    },
    {
      name: "Celestial Vestments",
      description: "Robes that shimmer with the light of the stars.",
      image: '12.png'
    },
    {
      name: "Warlock's Shroud",
      description: "A dark, foreboding shroud pulsing with eldritch power.",
      image: '13.png'
    },
    {
      name: "Ethereal Raiment",
      description: "Robes that seem to be made of ephemeral, otherworldly fabric.",
      image: '14.png'
    },
    {
      name: "Archmage's Robe",
      description: "The pinnacle of magical attire, offering unparalleled protection and power.",
      image: '15.png'
    },
    {
      name: "Raiment of the Eternal Sage",
      description: "A robe woven from threads of pure magic, fit for the most legendary spellcasters.",
      image: '16.png'
    }
  ],
  'legs': [
    {
      name: "Apprentice's Leggings",
      description: "Simple leggings providing basic mobility for novice mages.",
      image: '1.png'
    },
    {
      name: "Mystic's Trousers",
      description: "Comfortable trousers imbued with a faint magical aura.",
      image: '2.png'
    },
    {
      name: "Adept's Greaves",
      description: "Light greaves designed to provide moderate protection without hindering movement.",
      image: '3.png'
    },
    {
      name: "Sage's Pants",
      description: "Pants enchanted to enhance stamina and focus.",
      image: '4.png'
    },
    {
      name: "Enchanter's Leggings",
      description: "Intricately designed leggings adorned with magical glyphs.",
      image: '5.png'
    },
    {
      name: "Seer's Legwraps",
      description: "Legwraps imbued with divination magic.",
      image: '6.png'
    },
    {
      name: "Illusionist's Tights",
      description: "Elegant tights favored by masters of illusion.",
      image: '7.png'
    },
    {
      name: "Arcanist's Legplates",
      description: "Reinforced legplates inscribed with runes of protection.",
      image: '8.png'
    },
    {
      name: "Magister's Trousers",
      description: "Elegant trousers worn by high-ranking magicians.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Leggings",
      description: "Luxurious leggings enhanced for spellcasting efficiency.",
      image: '10.png'
    },
    {
      name: "Runebinder's Greaves",
      description: "Greaves adorned with glowing arcane runes.",
      image: '11.png'
    },
    {
      name: "Celestial Pants",
      description: "Pants radiating the light of the heavens.",
      image: '12.png'
    },
    {
      name: "Warlock's Leggings",
      description: "Dark leggings imbued with shadowy magic.",
      image: '13.png'
    },
    {
      name: "Ethereal Legwraps",
      description: "Light and ephemeral legwraps made from otherworldly materials.",
      image: '14.png'
    },
    {
      name: "Archmage's Leggings",
      description: "Leggings of immense power, reserved for the most skilled wizards.",
      image: '15.png'
    },
    {
      name: "Greaves of Eternal Knowledge",
      description: "Mythical greaves granting both protection and infinite wisdom.",
      image: '16.png'
    }
  ],
  'feet': [
    {
      name: "Apprentice's Boots",
      description: "Basic boots offering minimal protection for novice mages.",
      image: '1.png'
    },
    {
      name: "Mystic's Sandals",
      description: "Simple sandals infused with light magical energy.",
      image: '2.png'
    },
    {
      name: "Adept's Shoes",
      description: "Comfortable shoes designed for prolonged magical study.",
      image: '3.png'
    },
    {
      name: "Sage's Footwear",
      description: "Footwear blessed with protective charms.",
      image: '4.png'
    },
    {
      name: "Enchanter's Boots",
      description: "Stylish boots with minor magical enhancements.",
      image: '5.png'
    },
    {
      name: "Seer's Slippers",
      description: "Soft slippers that aid in silent movement and focus.",
      image: '6.png'
    },
    {
      name: "Illusionist's Footpads",
      description: "Footwear designed to enhance agility and stealth.",
      image: '7.png'
    },
    {
      name: "Arcanist's Boots",
      description: "Reinforced boots adorned with glowing arcane symbols.",
      image: '8.png'
    },
    {
      name: "Magister's Sandals",
      description: "Regal sandals providing comfort and magical support.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Shoes",
      description: "Elegant shoes crafted for masters of the arcane.",
      image: '10.png'
    },
    {
      name: "Runebinder's Boots",
      description: "Boots with soles etched in runes that glow faintly.",
      image: '11.png'
    },
    {
      name: "Celestial Striders",
      description: "Boots said to grant the wearer a weightless stride.",
      image: '12.png'
    },
    {
      name: "Warlock's Treads",
      description: "Dark and foreboding boots infused with sinister magic.",
      image: '13.png'
    },
    {
      name: "Ethereal Slippers",
      description: "Slippers that appear to hover just above the ground.",
      image: '14.png'
    },
    {
      name: "Archmage's Boots",
      description: "Boots of unparalleled craftsmanship, granting unmatched agility.",
      image: '15.png'
    },
    {
      name: "Starlight Walkers",
      description: "Mythical boots that leave a shimmering trail of stars.",
      image: '16.png'
    }
  ],
  'hands': [
    {
      name: "Apprentice's Gloves",
      description: "Simple gloves offering basic protection for handling magical artifacts.",
      image: '1.png'
    },
    {
      name: "Mystic's Handwraps",
      description: "Handwraps infused with a faint magical aura.",
      image: '2.png'
    },
    {
      name: "Adept's Gloves",
      description: "Sturdy gloves enhancing grip and precision.",
      image: '3.png'
    },
    {
      name: "Sage's Mitts",
      description: "Mitts enchanted to increase focus during casting.",
      image: '4.png'
    },
    {
      name: "Enchanter's Handguards",
      description: "Handguards adorned with intricate magical patterns.",
      image: '5.png'
    },
    {
      name: "Seer's Gloves",
      description: "Soft gloves that enhance sensory perception.",
      image: '6.png'
    },
    {
      name: "Illusionist's Gauntlets",
      description: "Gauntlets designed to aid in creating intricate illusions.",
      image: '7.png'
    },
    {
      name: "Arcanist's Bracers",
      description: "Bracers etched with ancient protective runes.",
      image: '8.png'
    },
    {
      name: "Magister's Gloves",
      description: "Elegant gloves favored by seasoned mages.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Handwraps",
      description: "Luxurious handwraps enhanced with arcane power.",
      image: '10.png'
    },
    {
      name: "Runebinder's Gauntlets",
      description: "Gauntlets with glowing runic etchings.",
      image: '11.png'
    },
    {
      name: "Celestial Mitts",
      description: "Mitts said to channel the energy of the cosmos.",
      image: '12.png'
    },
    {
      name: "Warlock's Handguards",
      description: "Dark gloves pulsing with shadowy energy.",
      image: '13.png'
    },
    {
      name: "Ethereal Gloves",
      description: "Gloves that shimmer with an otherworldly glow.",
      image: '14.png'
    },
    {
      name: "Archmage's Bracers",
      description: "Bracers of immense power, granting unrivaled control over magic.",
      image: '15.png'
    },
    {
      name: "Gauntlets of Infinite Power",
      description: "Legendary gauntlets imbued with unfathomable magical energy.",
      image: '16.png'
    }
  ],
  'belt': [
    {
      name: "Apprentice's Sash",
      description: "A simple sash holding a mage's robes in place.",
      image: '1.png'
    },
    {
      name: "Mystic's Cord",
      description: "A cord enchanted with basic magical protections.",
      image: '2.png'
    },
    {
      name: "Adept's Belt",
      description: "A sturdy belt enhancing stability and focus.",
      image: '3.png'
    },
    {
      name: "Sage's Girdle",
      description: "A girdle blessed with protective charms.",
      image: '4.png'
    },
    {
      name: "Enchanter's Sash",
      description: "An ornate sash embroidered with magical glyphs.",
      image: '5.png'
    },
    {
      name: "Seer's Belt",
      description: "A belt aiding in the channeling of divination magic.",
      image: '6.png'
    },
    {
      name: "Illusionist's Band",
      description: "A lightweight band designed for masters of illusion.",
      image: '7.png'
    },
    {
      name: "Arcanist's Girdle",
      description: "A girdle inscribed with runes of stability and power.",
      image: '8.png'
    },
    {
      name: "Magister's Belt",
      description: "A regal belt enhancing magical energy flow.",
      image: '9.png'
    },
    {
      name: "Sorcerer's Sash",
      description: "A luxurious sash enhancing magical control.",
      image: '10.png'
    },
    {
      name: "Runebinder's Cord",
      description: "A cord with glowing runic patterns.",
      image: '11.png'
    },
    {
      name: "Celestial Sash",
      description: "A sash glowing with the light of the heavens.",
      image: '12.png'
    },
    {
      name: "Warlock's Girdle",
      description: "A dark girdle pulsing with malevolent energy.",
      image: '13.png'
    },
    {
      name: "Ethereal Belt",
      description: "A belt that seems to shift between dimensions.",
      image: '14.png'
    },
    {
      name: "Archmage's Cord",
      description: "A cord of immense power, worn by legendary spellcasters.",
      image: '15.png'
    },
    {
      name: "Girdle of Endless Arcana",
      description: "A mythical girdle granting access to infinite magical potential.",
      image: '16.png'
    }
  ]
}

export const mediumArmors: { [key in ArmorSlot]: ArmorItem[] } = {
  'head': [
    {
      name: "Tracker's Hood",
      description: "A hood designed to blend seamlessly with the environment, perfect for novice hunters.",
      image: '1.png'
    },
    {
      name: "Outlander's Cap",
      description: "A sturdy cap offering protection during wilderness expeditions.",
      image: '2.png'
    },
    {
      name: "Warden's Mask",
      description: "A mask providing protection against harsh weather and dust.",
      image: '3.png'
    },
    {
      name: "Ranger's Cowl",
      description: "A cowl reinforced with leather to provide stealth and protection.",
      image: '4.png'
    },
    {
      name: "Stalker's Hood",
      description: "A sleek hood designed to enhance vision in dim environments.",
      image: '5.png'
    },
    {
      name: "Hunter's Helm",
      description: "A lightweight helm adorned with symbols of a skilled hunter.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Headgear",
      description: "A headgear suited for tracking in uncharted territories.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Visor",
      description: "A visor enhancing precision and focus for ranged attacks.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Helm",
      description: "A helm adorned with trophies from conquered beasts.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Hood",
      description: "A dark hood offering supreme stealth capabilities.",
      image: '10.png'
    },
    {
      name: "Tracker's Vigil",
      description: "A hood imbued with enchantments for night vision.",
      image: '11.png'
    },
    {
      name: "Wildsoul Helm",
      description: "A helm crafted from natural materials, resonating with nature's energy.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Cowl",
      description: "A cowl designed to protect against the dangers of nocturnal hunts.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Mask",
      description: "A mask granting unparalleled clarity of sight.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Hood",
      description: "A hood reserved for the most skilled hunters in the realm.",
      image: '15.png'
    },
    {
      name: "Crown of the Wild Hunt",
      description: "A legendary helm symbolizing mastery over the wilderness.",
      image: '16.png'
    }
  ],
  'chest': [
    {
      name: "Tracker's Vest",
      description: "A lightweight vest offering basic protection for novice hunters.",
      image: '1.png'
    },
    {
      name: "Outlander's Jacket",
      description: "A reinforced jacket designed for long treks through rugged terrain.",
      image: '2.png'
    },
    {
      name: "Warden's Chestguard",
      description: "A chestguard providing balanced protection and mobility.",
      image: '3.png'
    },
    {
      name: "Ranger's Coat",
      description: "A durable coat, ideal for quick movements and harsh conditions.",
      image: '4.png'
    },
    {
      name: "Stalker's Jerkin",
      description: "A leather jerkin optimized for stealth and agility.",
      image: '5.png'
    },
    {
      name: "Hunter's Mail",
      description: "A chainmail vest offering protection without compromising mobility.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Tunic",
      description: "A lightweight tunic with multiple pockets for storing tools.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Vest",
      description: "A vest designed to stabilize ranged weaponry.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Harness",
      description: "A rugged harness adorned with beastly trophies.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Coat",
      description: "A dark coat enhancing stealth and resistance to detection.",
      image: '10.png'
    },
    {
      name: "Tracker's Mantle",
      description: "A mantle enchanted to camouflage the wearer in natural surroundings.",
      image: '11.png'
    },
    {
      name: "Wildsoul Jerkin",
      description: "A jerkin crafted from enchanted vines and leather.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Chestpiece",
      description: "A chestpiece imbued with nocturnal enchantments.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Jerkin",
      description: "A jerkin enhancing precision and focus in ranged combat.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Mail",
      description: "A mail vest designed for the greatest hunters in the land.",
      image: '15.png'
    },
    {
      name: "Wild Hunt Cuirass",
      description: "A legendary cuirass radiating the essence of the hunt.",
      image: '16.png'
    }
  ],
  'legs': [
    {
      name: "Tracker's Trousers",
      description: "Simple trousers offering basic mobility for novice trackers.",
      image: '1.png'
    },
    {
      name: "Outlander's Leggings",
      description: "Durable leggings suited for traversing rugged terrain.",
      image: '2.png'
    },
    {
      name: "Warden's Legguards",
      description: "Legguards reinforced for protection during extended patrols.",
      image: '3.png'
    },
    {
      name: "Ranger's Pants",
      description: "Light pants designed for quick movement and stealth.",
      image: '4.png'
    },
    {
      name: "Stalker's Leggings",
      description: "Leggings designed for enhanced agility and camouflage.",
      image: '5.png'
    },
    {
      name: "Hunter's Greaves",
      description: "Light greaves offering protection without hindering mobility.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Trousers",
      description: "Trousers equipped with pockets for carrying tools and equipment.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Pants",
      description: "Pants designed for stability while aiming ranged weapons.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Leggings",
      description: "Leggings adorned with symbols of dominance over beasts.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Legwraps",
      description: "Dark legwraps enhancing stealth and movement in the shadows.",
      image: '10.png'
    },
    {
      name: "Tracker's Guard",
      description: "Legguards enchanted to blend with natural environments.",
      image: '11.png'
    },
    {
      name: "Wildsoul Pants",
      description: "Pants infused with the vitality of the forest.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Leggings",
      description: "Leggings designed for nighttime scouting and hunting.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Greaves",
      description: "Greaves enhancing precision and focus in the wilderness.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Legguards",
      description: "Legguards worn by the most skilled hunters in the realm.",
      image: '15.png'
    },
    {
      name: "Leggings of the Eternal Hunt",
      description: "Legendary leggings granting unmatched agility and endurance.",
      image: '16.png'
    }
  ],
  'feet': [
    {
      name: "Tracker's Boots",
      description: "Simple leather boots providing basic protection and comfort.",
      image: '1.png'
    },
    {
      name: "Outlander's Striders",
      description: "Sturdy boots designed for traversing rugged terrain.",
      image: '2.png'
    },
    {
      name: "Warden's Footwear",
      description: "Durable footwear offering protection and agility during patrols.",
      image: '3.png'
    },
    {
      name: "Ranger's Boots",
      description: "Light boots perfect for silent movement and long marches.",
      image: '4.png'
    },
    {
      name: "Stalker's Treads",
      description: "Boots designed to leave minimal tracks, ideal for stalking prey.",
      image: '5.png'
    },
    {
      name: "Hunter's Greaves",
      description: "Reinforced greaves offering durability and mobility.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Footwraps",
      description: "Flexible footwraps for scaling and swift movement.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Boots",
      description: "Boots providing stability while aiming ranged weapons.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Stompers",
      description: "Heavy boots adorned with the claws of defeated beasts.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Slippers",
      description: "Soft slippers enhancing stealth and silent movement.",
      image: '10.png'
    },
    {
      name: "Tracker's Walkers",
      description: "Boots enchanted to endure long hunts in the wild.",
      image: '11.png'
    },
    {
      name: "Wildsoul Boots",
      description: "Boots infused with the vitality of the forest, ensuring firm footing.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Footguards",
      description: "Footguards designed for nocturnal pursuits.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Treads",
      description: "Treads providing a firm stance for precision attacks.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Boots",
      description: "Boots designed for the most skilled hunters, ensuring unmatched agility.",
      image: '15.png'
    },
    {
      name: "Footwear of the Eternal Hunt",
      description: "Legendary boots granting endurance and stealth in any environment.",
      image: '16.png'
    }
  ],
  'hands': [
    {
      name: "Tracker's Gloves",
      description: "Simple gloves offering basic grip and warmth for novice trackers.",
      image: '1.png'
    },
    {
      name: "Outlander's Mitts",
      description: "Durable mitts designed for handling tools and rough terrain.",
      image: '2.png'
    },
    {
      name: "Warden's Handguards",
      description: "Handguards providing protection during extended patrols.",
      image: '3.png'
    },
    {
      name: "Ranger's Grips",
      description: "Light grips designed for precision and dexterity.",
      image: '4.png'
    },
    {
      name: "Stalker's Wraps",
      description: "Flexible wraps enhancing agility and stealth.",
      image: '5.png'
    },
    {
      name: "Hunter's Gauntlets",
      description: "Reinforced gauntlets offering protection without hindering movement.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Gloves",
      description: "Gloves optimized for handling ropes and climbing.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Handwraps",
      description: "Handwraps ensuring stability while aiming.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Claws",
      description: "Gloves adorned with beastly elements, signifying dominance.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Handguards",
      description: "Dark handguards enhancing stealth and silent attacks.",
      image: '10.png'
    },
    {
      name: "Tracker's Grip",
      description: "Gloves enchanted to ensure firm grip on weapons and tools.",
      image: '11.png'
    },
    {
      name: "Wildsoul Gauntlets",
      description: "Gauntlets infused with the spirit of the forest.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Wraps",
      description: "Wraps designed for nocturnal precision and agility.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Grips",
      description: "Grips enhancing focus and stability during hunts.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Gloves",
      description: "Gloves providing unmatched dexterity and comfort.",
      image: '15.png'
    },
    {
      name: "Claws of the Eternal Hunt",
      description: "Legendary gloves empowering swift and deadly strikes.",
      image: '16.png'
    }
  ],
  'belt': [
    {
      name: "Tracker's Belt",
      description: "A basic leather belt with pouches for carrying essentials.",
      image: '1.png'
    },
    {
      name: "Outlander's Girdle",
      description: "A reinforced girdle designed for long expeditions.",
      image: '2.png'
    },
    {
      name: "Warden's Sash",
      description: "A sash providing additional storage and protection.",
      image: '3.png'
    },
    {
      name: "Ranger's Belt",
      description: "A lightweight belt designed for quick access to tools.",
      image: '4.png'
    },
    {
      name: "Stalker's Strap",
      description: "A strap with compartments for carrying traps and supplies.",
      image: '5.png'
    },
    {
      name: "Hunter's Girdle",
      description: "A sturdy girdle supporting a variety of hunting tools.",
      image: '6.png'
    },
    {
      name: "Pathfinder's Utility Belt",
      description: "A belt with multiple pouches for tools and equipment.",
      image: '7.png'
    },
    {
      name: "Sharpshooter's Band",
      description: "A belt designed for carrying ammunition and small gadgets.",
      image: '8.png'
    },
    {
      name: "Beastmaster's Cinch",
      description: "A rugged cinch adorned with trophies of defeated beasts.",
      image: '9.png'
    },
    {
      name: "Shadowstalker's Belt",
      description: "A dark belt enhancing stealth and mobility.",
      image: '10.png'
    },
    {
      name: "Tracker's Sash",
      description: "A sash enchanted for enduring long and arduous hunts.",
      image: '11.png'
    },
    {
      name: "Wildsoul Cord",
      description: "A cord infused with the vitality of nature.",
      image: '12.png'
    },
    {
      name: "Duskwarden's Strap",
      description: "A strap designed for carrying nocturnal hunting gear.",
      image: '13.png'
    },
    {
      name: "Eagle-Eye Girdle",
      description: "A girdle enhancing precision and carrying capacity.",
      image: '14.png'
    },
    {
      name: "Master Hunter's Belt",
      description: "A belt crafted for the most skilled hunters in the realm.",
      image: '15.png'
    },
    {
      name: "Belt of the Eternal Hunt",
      description: "A legendary belt empowering the wearer with unmatched endurance.",
      image: '16.png'
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
    name: "Recruit's Shield",
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
