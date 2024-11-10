import { isArmor, isJewelery, isMaterial, isPotion, isWeapon } from '@/app/functions/itemCheckers'
import { addGold, addItem, removeGold, removeItem, removeShopItem } from '@/app/functions/manageItems'
import { useSocket } from '@/app/SocketContext'
import { playerAtom } from '@/app/state/atoms'
import { Armor, ArmorSlot, Items, Jewelery, JewelerySlot, Potion, Shops, Weapon } from '@/app/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRef } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ItemFrame = ({ itemData, isClickable, isEquipped, shop, width, height }: { itemData: Items, isClickable: boolean, isEquipped: boolean, shop?: Shops, width: number, height: number }) => {
  const [player] = useAtom(playerAtom)
  const { updatePlayer } = useSocket()
  const itemFrameRef = useRef<HTMLDivElement | null>(null)

  // Slot typeguard
  const hasSlot = (item: Items): item is Items & { slot: ArmorSlot | 'weapon' | 'shield' | JewelerySlot } => {
    return 'slot' in item;
  };

  const handleEquipItem = (item: Items) => {
    if (!player || !player.equipment) return

    if (isPotion(item) || isMaterial(item)) {
      return
    }

    const slot = item.slot

    // First, unequipping old item if exists
    handleUnequipItem(slot)

    // Equip new item if slot is free
    updatePlayer({
      ...player,
      equipment: {
        ...player.equipment,
        [slot]: item
      },

      // Remove item from player's bag
      items: removeItem(item, player.items)
    })

    return
  }

  const handleUnequipItem = (slot: ArmorSlot | 'weapon' | 'shield' | JewelerySlot) => {
    if (!player || !player.equipment) return

    const unequippedItem = player.equipment[slot]

    if (!unequippedItem) return null

    // Remove item from the character
    updatePlayer({
      ...player,
      equipment: {
        ...player.equipment,
        [slot]: null
      },

      // Add unequipped item to character bag
      items: addItem(unequippedItem, player.items)
    })

    return unequippedItem
  }

  const handleBuyItem = (itemData: Items, shop: Shops) => {
    if (!player) return

    const buyPrice = itemData.sellPrice * 4
    console.log(`Buying item: ${itemData.name} for ${buyPrice}`)
    if (buyPrice > player.gold) {
      alert('Not enough gold')
      return
    }

    updatePlayer({
      ...player,
      items: addItem(itemData, player.items),
      gold: removeGold(buyPrice, player.gold),
      shop: removeShopItem(itemData, player.shop, shop)
    })
  }

  const handleSellItem = (itemData: Items) => {
    if (!player) return

    console.log(`Selling item: ${itemData.name} for ${itemData.sellPrice}`)

    updatePlayer({
      ...player,
      items: removeItem(itemData, player.items),
      gold: addGold(itemData.sellPrice, player.gold)
    })
  }

  const PopoverComponent = ({ itemData, isEquipped, shop }: { itemData: Items, isEquipped: boolean, shop?: Shops }) => {
    return shop ? (
      // Item in shop active tooltip
      <div className="min-w-[100px]">
        <button onClick={() => handleBuyItem(itemData, shop)}>Buy</button>
      </div>
      // Item equipped active tooltip
    ) : isEquipped && hasSlot(itemData) ? (
      <div className="min-w-[100px]">
        <button onClick={() => handleUnequipItem(itemData.slot)}>Unequip</button>
      </div>
      // Item in bag active tooltip
    ) : (
      <div className="flex flex-col gap-5 min-w-[100px]">
        <button onClick={() => handleEquipItem(itemData)}>Equip</button>
        <button onClick={() => handleSellItem(itemData)}>Sell</button>
      </div>
    )
  }

  return (
    <div ref={itemFrameRef} className="relative">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {isClickable ? (
              <Popover>
                <PopoverTrigger>
                  <Image src={`/placeholderItem.svg`} width={width} height={height} alt={itemData.name} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverComponent shop={shop} itemData={itemData} isEquipped={isEquipped} />
                </PopoverContent>
              </Popover>
            ) : (
              <Image src={`/placeholderItem.svg`} width={width} height={height} alt={itemData.name} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} />
            )}
          </TooltipTrigger>
          <TooltipContent>
            {isArmor(itemData) ? (
              <ArmorDescription item={itemData} shop={shop} />
            ) : isWeapon(itemData) ? (
              <WeaponDescription item={itemData} shop={shop} />
            ) : isJewelery(itemData) ? (
              <JeweleryDescription item={itemData} shop={shop} />
            ) : isPotion(itemData) && <PotionDescription item={itemData} shop={shop} />}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ItemFrame

const PotionDescription = ({ item, shop }: { item: Potion, shop?: Shops }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
      <h2 className="text-wrap">Increases {item.enchancing.attribute} by {item.enchancing.value}% for 24h</h2>
      <div className="flex gap-1">
        {shop ? (
          <>
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        )}
      </div>
    </div>
  )
}

const WeaponDescription = ({ item, shop }: { item: Weapon, shop?: Shops }) => {
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
      <div className="flex gap-1">
        {shop ? (
          <>
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        )}
      </div>
    </div>
  )
}

const ArmorDescription = ({ item, shop }: { item: Armor, shop?: Shops }) => {
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
      <div className="flex gap-1">
        {shop ? (
          <>
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        )}
      </div>
    </div>
  )
}

const JeweleryDescription = ({ item, shop }: { item: Jewelery, shop?: Shops }) => {
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
      <div className="flex gap-1">
        {shop ? (
          <>
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" /></h1>
        )}
      </div>
    </div>
  )
}