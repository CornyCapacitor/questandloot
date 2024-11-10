'use client'

import { dummyPlayer } from "@/app/dummies"
import { useSocket } from "@/app/SocketContext"
import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import CharacterStat from "@/components/layout/CharacterStat"
import { ExperienceBar } from "@/components/layout/ExperienceBar"
import ItemFrame from "@/components/layout/ItemFrame"
import { TabButton } from "@/components/layout/TabButton"
import { useAtom } from "jotai"
import Image from "next/image"
import { useState } from "react"
import { Socket } from "socket.io-client"

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
              <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Neck */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.neck ? (
              <ItemFrame itemData={player.equipment.neck} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Chest */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.chest ? (
              <ItemFrame itemData={player.equipment.chest} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Ring */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.ring ? (
              <ItemFrame itemData={player.equipment.ring} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/ringslot.svg" layout="fill" alt="Ring slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col flex-grow border-r border-l border-slate-700">
          <div className="flex flex-col flex-grow">
            <div className="w-full flex flex-shrink-0 items-center border-b h-8 justify-center bg-slate-900 text-orange-400 font-semibold text-lg text-center">{player.name}</div>
            <div className="flex flex-grow">
              <div className="w-full relative">
                <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" />
              </div>
            </div>
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
                <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Shield (requires being warrior) */}
            {player.profession === 'warrior' && (
              <div className="w-[100px] h-[100px] rounded-md relative">
                {player.equipment.shield ? (
                  <ItemFrame itemData={player.equipment.shield} isClickable={true} isEquipped={true} width={100} height={100} />
                ) : (
                  <Image src="/assets/equipment/slots/secondaryslot.svg" layout="fill" alt="Secondary slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
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
              <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Belt */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.belt ? (
              <ItemFrame itemData={player.equipment.belt} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Legs */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.legs ? (
              <ItemFrame itemData={player.equipment.legs} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>

          {/* Feet */}
          <div className="w-[100px] h-[100px] rounded-md relative">
            {player.equipment.feet ? (
              <ItemFrame itemData={player.equipment.feet} isClickable={true} isEquipped={true} width={100} height={100} />
            ) : (
              <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
            )}
          </div>
        </div>
      </div>

      {/* Character attributes */}
      <div className="flex flex-col flex-grow border-t border-slate-700 p-2">
        <span className="font-semibold text-orange-300 self-center py-1">Level: {player.level}</span>
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
    </section>
  )
}

export const CharacterTabs = () => {
  const [currentTab, setCurrentTab] = useState<'items' | 'materials'>('items')

  return (
    <div className="flex flex-col h-full flex-grow">
      <div className="w-full flex gap-2 px-4 pt-2 border-b border-slate-700">
        <TabButton tabName="items" currentTab={currentTab} onClick={() => setCurrentTab('items')} />
        <TabButton tabName="materials" currentTab={currentTab} onClick={() => setCurrentTab('materials')} />
      </div>
      {currentTab === 'items' ? (
        <CharacterItemsSection className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto" />
      ) : currentTab === 'materials' ? (
        <CharacterMaterialsSection className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto" />
      ) : (
        null
      )}
    </div>
  )
}

const CharacterItemsSection = ({ className }: { className?: string }) => {
  const [player, setPlayer] = useAtom(playerAtom)
  const { socket } = useSocket()

  const messageSocket = (socket: Socket | null, player: Player) => {
    if (!socket || !player) return

    socket.emit('playerUpdate', player)
  }

  if (player) return (
    <section className={`${className}`}>
      {player.items.map((item, index) => (
        <ItemFrame key={index} itemData={item.item} isClickable={true} isEquipped={false} width={128} height={128} />
      ))}
      <button onClick={() => console.log(player)}>Console.log player</button>
      <button onClick={() => setPlayer({
        ...player,
        experience: player.experience + 100
      })}>Add 100 experience</button>
      <button onClick={() => setPlayer({
        ...player,
        experience: player.experience + 250
      })}>Add 250 experience</button>
      <button onClick={() => setPlayer({
        ...player,
        gold: player.gold + 500
      })}>Add 500 gold</button>
      <button onClick={() => setPlayer(dummyPlayer)}>Reset player</button>
      <button onClick={() => messageSocket(socket, player)}>Send player</button>
    </section>
  )
}

const CharacterMaterialsSection = ({ className }: { className?: string }) => {
  const [player] = useAtom(playerAtom)

  if (player) return (
    <section className={`${className}`}>
      {player.materials.length ? player.materials.map((material, index) => (
        <p key={index}>{material.material.name}: {material.quantity}</p>
      )) : (
        <p>You currently have no materials to browse</p>
      )}
    </section>
  )
}