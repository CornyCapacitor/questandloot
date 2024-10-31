import { addItem, removeItem } from '@/app/functions/manageItems'
import { playerAtom } from '@/app/state/atoms'
import { ArmorSlot, Items, JewelerySlot, Material, Potion } from '@/app/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ItemFrame = ({ itemData, isClickable, isDisabled, isEquipped, width, height }: { itemData: Items, isClickable: boolean, isDisabled: boolean, isEquipped: boolean, width: number, height: number }) => {
  const [player, setPlayer] = useAtom(playerAtom)
  const [isActiveTooltipVisible, setActiveTooltipVisible] = useState(false)
  const itemFrameRef = useRef<HTMLDivElement | null>(null)

  // Slot typeguard
  const hasSlot = (item: Items): item is Items & { slot: ArmorSlot | 'weapon' | 'shield' | JewelerySlot } => {
    return 'slot' in item;
  };


  const handleItemClick = () => {
    if (isClickable && !isDisabled) setActiveTooltipVisible(!isActiveTooltipVisible)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (itemFrameRef.current && !itemFrameRef.current.contains(event.target as Node)) {
      setActiveTooltipVisible(false)
    }
  }

  const isPotion = (item: Items): item is Potion => {
    return item.type === 'potion'
  }

  const isMaterial = (item: Items): item is Material => {
    return item.type === 'material'
  }

  const handleEquipItem = (item: Items) => {
    if (!player || !player.equipment) return

    if (isPotion(item) || isMaterial(item)) {
      console.log('This item is either a potion or material')
      return
    }

    const slot = item.slot

    // First, unequipping old item if exists
    handleUnequipItem(slot)

    // Equip new item if slot is free
    if (!player.equipment[slot]) {
      setPlayer({
        ...player,
        equipment: {
          ...player.equipment,
          [slot]: item
        },

        // Remove item from the bag
        items: removeItem(item, player.items)
      })
    }

    console.log('Equipped:', item)
    return
  }

  const handleUnequipItem = (slot: ArmorSlot | 'weapon' | 'shield' | JewelerySlot) => {
    if (!player || !player.equipment) return

    const unequippedItem = player.equipment[slot]

    if (!unequippedItem) return null

    // Remove item from the character
    setPlayer({
      ...player,
      equipment: {
        ...player.equipment,
        [slot]: null
      },

      items: addItem(unequippedItem, player.items)
    })

    console.log('Unequipped:', unequippedItem)
    return unequippedItem
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={itemFrameRef} className="relative w-[128px] h-[128px]">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => handleItemClick()}>
              <Image src={`/placeholderItem.svg`} width={width} height={height} alt={itemData.name} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex flex-col">
              <h1>{itemData.name}</h1>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isActiveTooltipVisible && (
        <div className="absolute flex flex-col gap-2 a-10 bg-black border border-slate-700 rounded-md text-sm p-2 w-[128px] tooltip-button-animation z-10">
          {isEquipped && hasSlot(itemData) ? (
            <button className="w-full bg-slate-800 py-1 px-2 rounded-md" onClick={() => handleUnequipItem(itemData.slot)}>Unequip</button>
          ) : (
            <button className="w-full bg-slate-800 py-1 px-2 rounded-md" onClick={() => handleEquipItem(itemData)}>Equip</button>
          )}
          <button className="w-full bg-slate-800 py-1 px-2 rounded-md">Sell</button>
        </div>
      )}
    </div>
  )
}

export default ItemFrame

// Exporting just for compiler
export const PotionFrame = (item: Potion) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-600' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap">{item.description}</h2>
      <h3 className="text-wrap">Increases {item.enchancing.attribute} by {item.enchancing.value}% for 24h</h3>
    </div>
  )
}