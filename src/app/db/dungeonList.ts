import { MonsterInfo } from "../types";


export const dungeonList: Record<string, MonsterInfo[]> = {
  'first_dungeon': [
    {
      name: "dungeon_enemy1",
      image: "1.png",
      loot: {
        common: [1],
        uncommon: [2],
        rare: [3],
        epic: [3]
      }
    },
    {
      name: "dungeon_enemy2",
      image: "2.png",
      loot: {
        common: [1],
        uncommon: [2],
        rare: [3],
        epic: [3]
      }
    }
  ]
}