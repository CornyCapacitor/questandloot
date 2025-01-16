'use client'

import { item_list } from "@/app/db/itemList"
import { addMaterial } from "@/app/functions/manageItems"
import { useSocket } from "@/app/middleware/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { Material, Player } from "@/app/types"
import CharacterStat from "@/components/layout/CharacterStat"
import { ExperienceBar } from "@/components/layout/ExperienceBar"
import { ItemFrame } from "@/components/layout/ItemFrame"
import { MaterialRow } from "@/components/layout/Material"
import { TabButton } from "@/components/layout/TabButton"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { successToast } from "@/components/ui/toasts"
import { useAtom } from "jotai"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const CharacterEquipmentSection = ({ className }: { className?: string }) => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <section className={`${className}`}>

      {/* Character display */}
      <div className="flex flex-shrink-0 w-[500px] h-[500px] border-slate-700">

        {/* Left */}
        <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">

          {/* head */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.head ? (
              <ItemFrame itemData={player.equipment.head} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Neck */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.neck ? (
              <ItemFrame itemData={player.equipment.neck} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Chest */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.chest ? (
              <ItemFrame itemData={player.equipment.chest} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Ring */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.ring ? (
              <ItemFrame itemData={player.equipment.ring} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/ringslot.svg" layout="fill" alt="Ring slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col flex-grow border-r border-l border-slate-700">
          <div className="flex flex-col flex-grow">
            <div className="w-full flex flex-shrink-0 items-center border-b h-8 justify-center bg-slate-900 text-orange-400 font-semibold text-lg text-center">{player.name}</div>
            <div className="flex flex-grow">

              {/* Avatar */}
              <div className="w-full relative">
                <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" unoptimized />
                <Link href="/game/settings/portrait" className="absolute p-1 z-10 bottom-2 right-2 cursor-pointer group">
                  <div className="absolute inset-0 bg-black rounded-md opacity-50 group-hover:opacity-75 transition"></div>
                  <Image src="/edit.svg" width={50} height={50} alt="Edit button" className="relative" />
                </Link>
              </div>
            </div>

            {/* Experience bar */}
            <div className="w-full items-center h-8 flex flex-shrink-0 justify-center">
              <ExperienceBar />
            </div>
          </div>

          <div className="flex items-center justify-around gap-2 p-2 flex-shrink-0 border-t border-slate-700">

            {/* Weapon */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.weapon ? (
                <ItemFrame itemData={player.equipment.weapon} isClickable={true} isEquipped={true} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
              )}
            </div>

            {/* Shield (requires being warrior) */}
            {player.profession === 'warrior' && (
              <div className="w-[100px] h-[100px] rounded-md relative">
                {player.equipment.shield ? (
                  <ItemFrame itemData={player.equipment.shield} isClickable={true} isEquipped={true} width={100} height={100} />
                ) : (
                  <Image src="/assets/equipment/slots/secondaryslot.svg" layout="fill" alt="Secondary slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">

          {/* Hands */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.hands ? (
              <ItemFrame itemData={player.equipment.hands} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Belt */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.belt ? (
              <ItemFrame itemData={player.equipment.belt} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Legs */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.legs ? (
              <ItemFrame itemData={player.equipment.legs} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>

          {/* Feet */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.feet ? (
              <ItemFrame itemData={player.equipment.feet} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" unoptimized />
            )}
          </div>
        </div>
      </div>

      {/* Character information */}
      <CharacterInformation player={player} />
    </section>
  )
}

export const CharacterInformation = ({ player }: { player: Player }) => {
  const [currentTab, setCurrentTab] = useState<'attributes' | 'hero'>('attributes')

  const Tabs = () => {
    if (player) return (
      <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
        <TabButton tabName="attributes" currentTab={currentTab} onClick={() => setCurrentTab('attributes')} />
        <TabButton tabName="hero" currentTab={currentTab} onClick={() => setCurrentTab('hero')} />
      </div>
    )
  }

  const AttributesTab = () => {
    if (player) return (
      <div className="py-2 pl-2 flex flex-col items-between">
        <span className="font-semibold text-orange-300 self-center">Level: {player.level}</span>
        <div className="flex h-full w-full">
          <div className="flex flex-col gap-2 flex-1">
            <CharacterStat stat="strength" player={player} />
            <CharacterStat stat="agility" player={player} />
            <CharacterStat stat="intellect" player={player} />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <CharacterStat stat="stamina" player={player} />
            <CharacterStat stat="luck" player={player} />
            <CharacterStat stat="armor" player={player} />
          </div>
        </div>
      </div>
    )
  }

  const HeroTab = () => {
    const [playerDescription, setPlayerDescription] = useState(player.description)
    const { updatePlayer } = useSocket()

    const handleChangePlayerDescription = () => {
      if (!player) return

      updatePlayer({
        ...player,
        description: playerDescription ? playerDescription : null
      })

      successToast({
        text: 'Description changed succesfully',
      })
    }

    if (player) return (
      <div className="p-2 h-full gap-2 flex flex-col items-between">
        <span className="font-semibold text-orange-300 self-center">Description:</span>
        <div className="flex h-full w-full">
          <Textarea placeholder="Describe who is your hero. Other player may read this on your player profile." value={playerDescription ? playerDescription : ''} className="border-slate-700 focus-visible:ring-orange-400 resize-none h-full" onChange={(e) => setPlayerDescription(e.target.value)} />
        </div>
        <Button className="text-white rounded-t-sm py-1 px-2 bg-slate-600 border-slate-700 transition hover:bg-slate-700" onClick={() => handleChangePlayerDescription()}>Save</Button>
      </div>
    )
  }

  return (
    <section className="flex flex-col flex-grow border-t border-slate-700">
      <Tabs />
      {currentTab === 'attributes' ? (
        <AttributesTab />
      ) : currentTab === 'hero' ? (
        <HeroTab />
      ) : null}
    </section>
  )
}

export const CharacterTabs = () => {
  const [currentTab, setCurrentTab] = useState<'items' | 'materials' | 'tests'>('items')

  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
        <TabButton tabName="items" currentTab={currentTab} onClick={() => setCurrentTab('items')} />
        <TabButton tabName="materials" currentTab={currentTab} onClick={() => setCurrentTab('materials')} />
        <TabButton tabName="tests" currentTab={currentTab} onClick={() => setCurrentTab('tests')} />
      </div>
      {currentTab === 'items' ? (
        <CharacterItemsSection className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto" />
      ) : currentTab === 'materials' ? (
        <CharacterMaterialsSection className="flex content-start flex-grow flex-wrap h-full border-slate-700 overflow-y-auto" />
      ) : currentTab === 'tests' ? (
        <CharacterTestsSection className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto" />
      ) : null}
    </div>
  )
}

const CharacterItemsSection = ({ className }: { className?: string }) => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <section className={`${className}`}>
      {player.inventory.length ? player.inventory.map((item, index) => (
        <ItemFrame key={index} itemData={item.item} isClickable={true} isEquipped={false} width={128} height={128} />
      )) : (
        <p>You currently have no items to browse</p>
      )}
    </section>
  )
}

const CharacterMaterialsSection = ({ className }: { className?: string }) => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <section className={`flex-col ${className}`}>
      <div className="border-b border-slate-700 flex justify-between items-center p-2 w-full">
        <div className="flex gap-3 items-center">
          <Image src="/question_mark.png" width={50} height={50} alt="question mark" className="border rounded-md border-slate-700" unoptimized />
          <p>Material name</p>
        </div>
        <p className="w-[80px] text-center">Quantity</p>
      </div>
      <div className="p-2 flex flex-col gap-2 w-full">
        {player.materials.length ? player.materials.map((material, index) => (
          // <p key={index}>{material.material.name}: {material.quantity}</p>
          <MaterialRow material={material} player={player} height={50} width={50} key={index} />
        )) : (
          <p>You currently have no materials to browse</p>
        )}
      </div>
    </section>
  )
}

const CharacterTestsSection = ({ className }: { className?: string }) => {
  const [player] = useAtom(playerAtom)
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

    const material: Material = item_list[201] as Material
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
      }
    })
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

  if (player) return (
    <section className={`${className}`}>
      <Button onClick={() => handleAddGold()}>Add 1000 gold</Button>
      <Button onClick={() => console.log(player)}>Console log player</Button>
      <Button onClick={() => handleAddMaterial()}>Add 1 Test material (test)</Button>
      <Button onClick={() => handleResetPlayer()}>Reset player</Button>
      <Button onClick={() => handleResetMaterials()}>Reset materials</Button>
      <Button onClick={() => handleResetGold()}>Reset gold</Button>
    </section>
  )
}