import { Items } from '@/app/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

const ItemFrame = ({ itemData, isClickable, isDisabled, isEquipped }: { itemData: Items, isClickable: boolean, isDisabled: boolean, isEquipped: boolean }) => {
  const [isActiveTooltipVisible, setActiveTooltipVisible] = useState(false)
  const itemFrameRef = useRef<HTMLDivElement | null>(null)

  const handleItemClick = () => {
    if (isClickable && !isDisabled) setActiveTooltipVisible(!isActiveTooltipVisible)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (itemFrameRef.current && !itemFrameRef.current.contains(event.target as Node)) {
      setActiveTooltipVisible(false)
    }
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
              <Image src={`/placeholderItem.svg`} width={128} height={128} alt={itemData.name} className="border border-slate-700 rounded-md" />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div>{itemData.name}</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {isActiveTooltipVisible && (
        <div className="absolute flex flex-col gap-2 a-10 bg-black border border-slate-700 rounded-md text-sm p-2 w-[128px] tooltip-button-animation z-10">
          <button className="w-full bg-slate-800 py-1 px-2 rounded-md">Equip</button>
          <button className="w-full bg-slate-800 py-1 px-2 rounded-md">Sell</button>
        </div>
      )}
    </div>
  )
}

export default ItemFrame
