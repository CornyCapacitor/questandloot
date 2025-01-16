import { isArmor, isJewelery, isMaterial, isPotion, isShield, isWeapon } from '@/app/functions/itemCheckers'
import { Items, Player } from '@/app/types'
import Image from 'next/image'

const DynamicItemFrame = ({ itemData, player, width, height }: { itemData: Items, player: Player, width: number, height: number }) => {
  const BaseImage = ({ src }: { src: string }) => {
    return (
      <Image src={src} alt={itemData.name || "item"} width={width} height={height} className={`border ${itemData.quality === 'uncommon' ? 'border-green-500' : itemData.quality === 'rare' ? 'border-blue-500' : itemData.quality === 'epic' ? 'border-purple-500' : 'border-slate-700'} rounded-md`} unoptimized />
    )
  }

  let basePath = "/assets"
  if (isPotion(itemData)) {
    basePath += "/potions"
  } else if (isMaterial(itemData)) {
    basePath += "/materials"
  } else if (isJewelery(itemData)) {
    basePath += `/equipment/${itemData.slot}`
  } else if (isWeapon(itemData)) {
    if (player.profession === "mage") {
      basePath += `/equipment/${player.profession}/staves`
    } else if (player.profession === "hunter") {
      basePath += `/equipment/${player.profession}/bowsncrossbows`
    } else {
      basePath += `/equipment/${player.profession}/${itemData.family}`
    }
  } else if (isArmor(itemData) || isShield(itemData)) {
    basePath += `/equipment/${player.profession}/${itemData.slot}`
  } else {
    const srcPath = `${basePath}/placeholderItem.svg`
    return <BaseImage src={srcPath} />
  }

  const srcPath = `${basePath}/${itemData.image}`

  return (
    <BaseImage src={srcPath} />
  )
}

export default DynamicItemFrame
