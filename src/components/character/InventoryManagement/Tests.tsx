import { item_list } from "@/app/db/itemList"
import { addMaterial } from "@/app/functions/manageItems"
import { useSocket } from "@/app/middleware/SocketContext"
import { combatTypeAtom } from "@/app/state/atoms"
import { Material, Player } from "@/app/types"
import { Button } from "@/components/ui/button"
import { useAtom } from "jotai"

export const Tests = ({ player }: { player: Player }) => {
  const [, setCombatType] = useAtom(combatTypeAtom)
  const { updatePlayer } = useSocket()

  const handleAddGold = () => {
    if (!player) return

    updatePlayer({
      ...player,
      gold: player.gold += 1000
    })
  }

  const handleAddMaterial = () => {
    if (!player) return

    const id = Math.floor((Math.random() * 9) + 201)

    const material: Material = item_list[id] as Material
    const newMaterials = addMaterial(material, player.materials)

    updatePlayer({
      ...player,
      materials: newMaterials
    })
  }

  const handleResetPlayer = () => {
    if (!player) return

    updatePlayer({
      ...player,
      experience: 0,
      level: 1,
      attributes: {
        strength: 10,
        agility: 10,
        intellect: 10,
        stamina: 10,
        luck: 10
      },
      activePotion: null,
      dungeon: {
        dungeonProgress: {
          dungeon1: 0,
          dungeon2: 0,
          dungeon3: 0,
          dungeon4: 0,
          dungeon5: 0,
          dungeon6: 0,
          dungeon7: 0,
          dungeon8: 0,
          dungeon9: 0,
          dungeon10: 0,
        },
        refreshDate: null
      }
    })

    setCombatType(null)
  }

  const handleResetMaterials = () => {
    if (!player) return

    updatePlayer({
      ...player,
      materials: []
    })
  }

  const handleResetGold = () => {
    if (!player) return

    updatePlayer({
      ...player,
      gold: 100
    })
  }

  const applyTestPotion = () => {
    if (!player) return

    updatePlayer({
      ...player,
      activePotion: {
        expiringDate: new Date(Date.now() + 1 * 1000 * 15),
        potion: {
          id: 'testid',
          description: "Test potion",
          enchancing: {
            attribute: 'strength',
            value: 10
          },
          image: "lesser_strength_potion.png",
          name: "Test potion",
          quality: 'rare',
          sellPrice: 12,
          type: 'potion'
        }
      }
    })
  }

  return (
    <section className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto">
      <Button onClick={() => handleAddGold()}>Add 1000 gold</Button>
      <Button onClick={() => console.log(player)}>Console log player</Button>
      <Button onClick={() => handleAddMaterial()}>Add 1 Test material (test)</Button>
      <Button onClick={() => handleResetPlayer()}>Reset player</Button>
      <Button onClick={() => handleResetMaterials()}>Reset materials</Button>
      <Button onClick={() => handleResetGold()}>Reset gold</Button>
      <Button onClick={() => applyTestPotion()}>Apply test potion</Button>
    </section>
  )
}