import { isArmor, isJewelery, isMaterial, isPotion, isShield, isWeapon } from '@/app/functions/checkers'
import { addGold, addItem, applyPotion, removeGold, removeItem, removeShopItem } from '@/app/functions/manageItems'
import { formatTime } from '@/app/functions/time'
import { useSocket } from '@/app/middleware/SocketContext'
import { playerAtom } from '@/app/state/atoms'
import { Armor, ArmorSlot, Items, Jewelery, JewelerySlot, Material, Potion, Shield, Shops, Weapon } from '@/app/types'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useRef, useState } from 'react'
import DynamicItemFrame from '../items/DynamicItemFrame'
import { questionAlert } from '../ui/alerts'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { errorToast, successToast } from '../ui/toasts'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export const ItemFrame = ({ itemData, isClickable, isEquipped, shop, width, height }: { itemData: Items, isClickable: boolean, isEquipped: boolean, shop?: Shops, width: number, height: number }) => {
  const [player] = useAtom(playerAtom)
  const [popoverOpen, setPopoverOpen] = useState(false)
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
    const equippedItem = player.equipment[slot]

    if (equippedItem) {
      // Swapping items if slot is occupied already
      const inventory = removeItem(item, addItem(equippedItem, player.inventory))
      updatePlayer({
        ...player,
        equipment: {
          ...player.equipment,
          [slot]: item, // Overwrites changed item
        },
        inventory, // Overwrites updated inventory
      })
      return
    } else {
      // Equip new item if the slot's free
      updatePlayer({
        ...player,
        equipment: {
          ...player.equipment,
          [slot]: item
        },
        inventory: removeItem(item, player.inventory) // Remove item from player's bag
      })
      return
    }
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
      inventory: addItem(unequippedItem, player.inventory)
    })

    return unequippedItem
  }

  const handleBuyItem = (itemData: Items, shop: Shops) => {
    if (!player) return

    const buyPrice = itemData.sellPrice * 4
    if (buyPrice > player.gold) {
      errorToast({ text: 'Not enough gold' })
      return
    }

    updatePlayer({
      ...player,
      inventory: addItem(itemData, player.inventory),
      gold: removeGold(buyPrice, player.gold),
      shop: removeShopItem(itemData, player.shop, shop)
    })

    successToast({ text: `${itemData.name} bought for ${buyPrice} gold` })
  }

  const handleSellItem = (itemData: Items) => {
    if (!player) return

    updatePlayer({
      ...player,
      inventory: removeItem(itemData, player.inventory),
      gold: addGold(itemData.sellPrice, player.gold)
    })

    successToast({ text: `${itemData.name} sold for ${itemData.sellPrice} gold` })
  }

  const handleDrinkPotion = (potion: Potion) => {
    if (!player) return

    if (player.activePotion) {
      const expiringDate = new Date(player.activePotion.expiringDate).getTime()
      const timeLeft = (expiringDate - Date.now()) / 1000
      questionAlert({
        text: `Are you sure you want to overwrite ${player.activePotion.potion.name} with ${potion.name}? You still have ${formatTime(timeLeft).uniText} left of your current potion.`,
        confirmFunction: () => {
          return updatePlayer({
            ...player,
            inventory: removeItem(potion, player.inventory),
            activePotion: applyPotion(potion)
          })
        },
        cancelFunction: () => {
          return
        }
      })

      return
    }

    return updatePlayer({
      ...player,
      inventory: removeItem(potion, player.inventory),
      activePotion: applyPotion(potion)
    })
  }

  const PopoverComponent = ({ itemData, isEquipped, shop, onAction }: { itemData: Items, isEquipped: boolean, shop?: Shops, onAction: () => void }) => {
    return shop ? (
      // Item in shop active tooltip
      <div className="min-w-[100px]">
        <button onClick={() => { handleBuyItem(itemData, shop); onAction() }}>Buy</button>
      </div>
      // Item equipped active tooltip
    ) : isEquipped && hasSlot(itemData) ? (
      <div className="min-w-[100px]">
        <button onClick={() => { handleUnequipItem(itemData.slot); onAction() }}>Unequip</button>
      </div>
      // Item in bag active tooltip
    ) : isPotion(itemData) ? (
      <div className="flex flex-col gap-5 min-w-[100px]">
        <button onClick={() => { handleDrinkPotion(itemData); onAction() }}>Drink</button>
        <button onClick={() => { handleSellItem(itemData); onAction() }}>Sell</button>
      </div>
    ) : (
      <div className="flex flex-col gap-5 min-w-[100px]">
        <button onClick={() => { handleEquipItem(itemData); onAction() }}>Equip</button>
        <button onClick={() => { handleSellItem(itemData); onAction() }}>Sell</button>
      </div>
    )
  }

  if (player) return (

    <div ref={itemFrameRef} className={`relative ${width === 0 && height === 0 && 'h-full'}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {isClickable ? (
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger>
                  <DynamicItemFrame itemData={itemData} player={player} width={width} height={height} />
                </PopoverTrigger>
                <PopoverContent >
                  <PopoverComponent shop={shop} itemData={itemData} isEquipped={isEquipped} onAction={() => setPopoverOpen(false)} />
                </PopoverContent>
              </Popover>
            ) : (
              <DynamicItemFrame itemData={itemData} player={player} width={width} height={height} />
            )}
          </TooltipTrigger>
          <TooltipContent>
            {isArmor(itemData) ? (
              <ArmorDescription item={itemData} shop={shop} />
            ) : isWeapon(itemData) ? (
              <WeaponDescription item={itemData} shop={shop} />
            ) : isJewelery(itemData) ? (
              <JeweleryDescription item={itemData} shop={shop} />
            ) : isShield(itemData) ? (
              <ShieldDescription item={itemData} shop={shop} />
            ) : isPotion(itemData) ? (
              <PotionDescription item={itemData} shop={shop} />
            ) : isMaterial(itemData) && <MaterialDescription item={itemData} />}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

const PotionDescription = ({ item, shop }: { item: Potion, shop?: Shops }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
      <h2 className="text-wrap">Increases {item.enchancing.attribute} by {item.enchancing.value}% for 24h</h2>
      <div className="flex gap-1">
        {shop ? (
          <>
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
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
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
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
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
        )}
      </div>
    </div>
  )
}

const ShieldDescription = ({ item, shop }: { item: Shield, shop?: Shops }) => {
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
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
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
            <h2 className="flex gap-1 justify-center">Buy price: {item.sellPrice * 4} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h2>
          </>
        ) : (
          <h1 className="flex gap-1 justify-center">Sell price: {item.sellPrice} <Image width={20} height={20} src="/coin.svg" alt="Gold coin" unoptimized /></h1>
        )}
      </div>
    </div>
  )
}

export const MaterialDescription = ({ item }: { item: Material }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className={`${item.quality === 'uncommon' ? 'text-green-500' : item.quality === 'rare' ? 'text-blue-500' : item.quality === 'epic' ? 'text-purple-500' : 'text-white'}`}>{item.name}</h1>
      <h2 className="text-gray-300 text-sm text-wrap max-w-[350px]">{item.description}</h2>
    </div>
  )
}