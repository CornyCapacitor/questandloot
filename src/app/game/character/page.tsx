'use client'

import { playerAtom } from "@/app/state/atoms"
import { Player } from "@/app/types"
import IconSpinner from "@/components/layout/IconSpinner"
import { useAtom } from "jotai"
import Image from "next/image"

const CharacterPage = () => {
  const [player] = useAtom<Player | null>(playerAtom)

  if (!player) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
      </div>
    )
  }

  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center overflow-y-auto">

      {/* Upper character section */}
      <section className="w-full flex flex-shrink-0 border-b border-slate-700">
        {/* Equipment section */}
        <section id="equipment" className="flex flex-shrink-0 border-r border-slate-700">
          <div className="w-[700px]">
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

            {/* Lower equipment section */}
            <div>

            </div>
          </div>
        </section>

        {/* Items section */}
        <section id="items" className="flex flex-grow w-full p-2">
          Player items
        </section>
      </section>

      {/* Lower character section */}
      {/* Materials section */}
      <section id="materials" className="flex flex-grow p-2">
        Player materials
      </section>

    </div>
  )
}

export default CharacterPage
