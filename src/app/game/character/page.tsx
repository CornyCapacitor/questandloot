'use client'

import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import { ExperienceBar } from "@/components/layout/ExperienceBar"
import IconSpinner from "@/components/layout/IconSpinner"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import Image from "next/image"
import { useState } from "react"

const CharacterPage = () => {
  const [player] = useAtom<Player | null>(playerAtom)
  const [old] = useState(false)

  if (!player) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
      </div>
    )
  }

  if (old) return (
    <div className="w-full h-full flex gap-2 items-start overflow-y-auto">
      {/* Character section */}
      <section className="w-full flex flex-shrink-0 border-slate-700">
        {/* Equipment section */}
        <section id="equipment" className="flex flex-shrink-0 border-r border-slate-700">
          <div>
            {/* Upper equipment section */}
            <div className="flex">
              {/* Left items section */}
              <div className="flex flex-col justify-between items-center p-2">
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/ringslot.svg" layout="fill" alt="Ring slot" objectFit="cover" className="grayscale" />
                </div>
              </div>

              {/* Middle portrait + weapon section */}
              <div className="flex flex-col border-l border-r border-slate-700">
                {/* Portrait */}
                <div className="w-[400px] h-[400px] relative">
                  <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" />
                </div>

                {/* Experience & level section */}
                <div className="border-b border-slate-700">
                  <div className="h-10">
                    Experience:
                  </div>
                </div>

                {/* Weapons section */}
                <div className="flex justify-evenly p-2">
                  <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                    <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale" />
                  </div>
                  <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                    <Image src="/assets/equipment/slots/secondaryslot.svg" layout="fill" alt="Secondary slot" objectFit="cover" className="grayscale" />
                  </div>
                </div>

              </div>

              {/* Right items section */}
              <div className="flex flex-col justify-between items-center p-2">
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale" />
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
                  <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
      <section id="items" className="flex flex-grow flex-wrap w-full p-2 gap-2 h-max max-h-[585px] overflow-y-hidden">
        {player.items.map((item, index) => (
          <ItemFrame key={index} itemData={item.item} isClickable={true} isDisabled={false} isEquipped={false} />
        ))}
      </section>
    </div>
  )

  if (!old) return (
    <div className="w-full h-full flex">
      {/* Character */}
      <section className="h-full flex flex-col flex-shrink-0 border-r border-slate-700">

        {/* Character display */}
        <div className="flex flex-shrink-0 w-[500px] h-[500px] border-slate-700">

          {/* Left */}
          <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/ringslot.svg" layout="fill" alt="Ring slot" objectFit="cover" className="grayscale" />
            </div>
          </div>

          {/* Middle */}
          <div className="flex flex-col flex-grow border-r border-l border-slate-700">
            <div className="flex flex-col flex-grow">
              <div className="w-full flex flex-shrink-0 border-b h-8 py-1 justify-center">{player.name}</div>
              <div className="flex flex-grow">
                <div className="w-full relative">
                  <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" />
                </div>
              </div>
              <div className="w-full items-center h-8 flex flex-shrink-0 justify-center">
                <ExperienceBar experience={50} level={1} />
              </div>
            </div>

            <div className="flex items-center justify-around gap-2 p-2 flex-shrink-0 border-t border-slate-700">
              <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
                <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale" />
              </div>
              <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
                <Image src="/assets/equipment/slots/secondaryslot.svg" layout="fill" alt="Secondary slot" objectFit="cover" className="grayscale" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale" />
            </div>
            <div className="w-[100px] h-[100px] border border-slate-700 rounded-md relative">
              <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale" />
            </div>
          </div>
        </div>

        {/* Character attributes */}
        <div className="flex flex-col justify-between flex-grow border-t border-slate-700 p-2">
          <span>Level: {player.level}</span>
          <span>Strength: {player.attributes.strength}</span>
          <span>Agility: {player.attributes.agility}</span>
          <span>Intellect: {player.attributes.intellect}</span>
          <span>Stamina: {player.attributes.stamina}</span>
          <span>Luck: {player.attributes.luck}</span>
        </div>
      </section>

      {/* Right side / Items */}
      <section className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto">
        {player.items.map((item, index) => (
          <ItemFrame key={index} itemData={item.item} isClickable={true} isDisabled={false} isEquipped={false} />
        ))}
      </section>
    </div>
  )
}


export default CharacterPage
