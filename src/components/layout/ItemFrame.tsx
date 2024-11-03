import { isArmor, isJewelery, isMaterial, isPotion, isWeapon } from '@/app/functions/itemCheckers'
import { addGold, addItem, removeGold, removeItem, removeShopItem } from '@/app/functions/manageItems'
import { playerAtom } from '@/app/state/atoms'
import { Armor, ArmorSlot, Items, Jewelery, JewelerySlot, Potion, Weapon } from '@/app/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRef } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ItemFrame = ({ itemData, isClickable, isEquipped, inShop, width, height }: { itemData: Items, isClickable: boolean, isEquipped: boolean, inShop: boolean, width: number, height: number }) => {
  const [player, setPlayer] = useAtom(playerAtom)
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

    return unequippedItem
  }

  const handleBuyItem = (itemData: Items) => {
    if (!player) return

    const buyPrice = itemData.sellPrice * 4
    console.log(`Buying item: ${itemData.name} for ${buyPrice}`)
    if (buyPrice > player.gold) {
      alert('Not enough gold')
      return
    }

    setPlayer((prevPlayer) => {
      if (!prevPlayer) return null

      return {
        ...prevPlayer,
        items: addItem(itemData, prevPlayer.items),
        gold: removeGold(buyPrice, prevPlayer.gold),
        shop: removeShopItem(itemData, prevPlayer.shop)
      }
    })
  }

  const handleSellItem = (itemData: Items) => {
    if (!player) return

    console.log(`Selling item: ${itemData.name} for ${itemData.sellPrice}`)
    setPlayer((prevPlayer) => {
      if (!prevPlayer) return null

      return {
        ...prevPlayer,
        items: removeItem(itemData, prevPlayer.items),
        gold: addGold(itemData.sellPrice, prevPlayer.gold)
      }
    })
  }

  const PopoverComponent = ({ inShop, itemData, isEquipped }: { inShop: boolean, itemData: Items, isEquipped: boolean }) => {
    return (
      <>
        {inShop ? (
          // Item in shop active tooltip
          <div>
            <button onClick={() => handleBuyItem(itemData)}>Buy</button>
          </div>
          // Item equipped active tooltip
        ) : isEquipped && hasSlot(itemData) ? (
          <div>
            <button onClick={() => handleUnequipItem(itemData.slot)}>Unequip</button>
          </div>
          // Item in bag active tooltip
        ) : (
          <div className="flex flex-col gap-5">
            <button onClick={() => handleEquipItem(itemData)}>Equip</button>
            <button onClick={() => handleSellItem(itemData)}>Sell</button>
          </div>
        )}
      </>
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
                  <PopoverComponent inShop={inShop} itemData={itemData} isEquipped={isEquipped} />
                </PopoverContent>
              </Popover>
            ) : (
              <Image src={`/placeholderItem.svg`} width={width} height={height} alt={itemData.name} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} />
            )}
          </TooltipTrigger>
          <TooltipContent>
            {isArmor(itemData) ? (
              <ArmorDescription item={itemData} inShop={inShop} />
            ) : isWeapon(itemData) ? (
              <WeaponDescription item={itemData} inShop={inShop} />
            ) : isJewelery(itemData) ? (
              <JeweleryDescription item={itemData} inShop={inShop} />
            ) : isPotion(itemData) && <PotionDescription item={itemData} inShop={inShop} />}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default ItemFrame

const PotionDescription = ({ item, inShop }: { item: Potion, inShop: boolean }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
      <h2 className="text-wrap">Increases {item.enchancing.attribute} by {item.enchancing.value}% for 24h</h2>
      <div className="flex gap-1">
        {inShop ? (
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

const WeaponDescription = ({ item, inShop }: { item: Weapon, inShop: boolean }) => {
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
        {inShop ? (
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

const ArmorDescription = ({ item, inShop }: { item: Armor, inShop: boolean }) => {
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
        {inShop ? (
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

const JeweleryDescription = ({ item, inShop }: { item: Jewelery, inShop: boolean }) => {
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
        {inShop ? (
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