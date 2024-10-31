import { isArmor, isJewelery, isMaterial, isPotion, isWeapon } from '@/app/functions/itemCheckers'
import { addItem, removeItem } from '@/app/functions/manageItems'
import { playerAtom } from '@/app/state/atoms'
import { Armor, ArmorSlot, Items, Jewelery, JewelerySlot, Potion, Weapon } from '@/app/types'
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

  const handleEquipItem = (item: Items) => {
    if (!player || !player.equipment) return

    if (isPotion(item) || isMaterial(item)) {
      console.log('This item is either a potion or material')
      return
    }

    setActiveTooltipVisible(false)

    const slot = item.slot

    // First, unequipping old item if exists
    handleUnequipItem(slot)

    // Equip new item if slot is free
    setPlayer((prevPlayer) => {
      if (!prevPlayer) return null;

      return {
        ...prevPlayer,
        equipment: {
          ...prevPlayer.equipment,
          [slot]: item,
        },

        // Remove item from player's bag
        items: removeItem(item, prevPlayer.items),
      };
    });

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
    <div ref={itemFrameRef} className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div onClick={() => handleItemClick()}>
              <Image src={`/placeholderItem.svg`} width={width} height={height} alt={itemData.name} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            {isArmor(itemData) ? (
              <ArmorDescription item={itemData} />
            ) : isWeapon(itemData) ? (
              <WeaponDescription item={itemData} />
            ) : isJewelery(itemData) ? (
              <JeweleryDescription item={itemData} />
            ) : isPotion(itemData) && <PotionDescription item={itemData} />}
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

const PotionDescription = ({ item }: { item: Potion }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
      <h2 className="text-wrap">Increases {item.enchancing.attribute} by {item.enchancing.value}% for 24h</h2>
    </div>
  )
}

const WeaponDescription = ({ item }: { item: Weapon }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[300px]">{item.description}</h2>
      <h2>{item.slot}</h2>
      <h2>({item.damage.min} - {item.damage.max}) (~{((item.damage.max + item.damage.min) / 2)})</h2>
      <div className="flex flex-col">
        {item.attributes.strength > 0 && (
          <span>Strength: {item.attributes.strength}</span>
        )}
        {item.attributes.agility > 0 && (
          <span>Agility: {item.attributes.agility}</span>
        )}
        {item.attributes.intellect > 0 && (
          <span>Intellect: {item.attributes.intellect}</span>
        )}
        {item.attributes.stamina > 0 && (
          <span>Stamina: {item.attributes.stamina}</span>
        )}
        {item.attributes.luck > 0 && (
          <span>Luck: {item.attributes.luck}</span>
        )}
      </div>
    </div>
  )
}

const ArmorDescription = ({ item }: { item: Armor }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[300px]">{item.description}</h2>
      <h2>{item.slot}</h2>
      <h2>Armor: {item.armor}</h2>
      <div className="flex flex-col">
        {item.attributes.strength > 0 && (
          <span>Strength: {item.attributes.strength}</span>
        )}
        {item.attributes.agility > 0 && (
          <span>Agility: {item.attributes.agility}</span>
        )}
        {item.attributes.intellect > 0 && (
          <span>Intellect: {item.attributes.intellect}</span>
        )}
        {item.attributes.stamina > 0 && (
          <span>Stamina: {item.attributes.stamina}</span>
        )}
        {item.attributes.luck > 0 && (
          <span>Luck: {item.attributes.luck}</span>
        )}
      </div>
    </div>
  )
}

const JeweleryDescription = ({ item }: { item: Jewelery }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
      <h2>{item.slot}</h2>
      <div className="flex flex-col">
        {item.attributes.strength > 0 && (
          <span>Strength: {item.attributes.strength}</span>
        )}
        {item.attributes.agility > 0 && (
          <span>Agility: {item.attributes.agility}</span>
        )}
        {item.attributes.intellect > 0 && (
          <span>Intellect: {item.attributes.intellect}</span>
        )}
        {item.attributes.stamina > 0 && (
          <span>Stamina: {item.attributes.stamina}</span>
        )}
        {item.attributes.luck > 0 && (
          <span>Luck: {item.attributes.luck}</span>
        )}
      </div>
    </div>
  )
}