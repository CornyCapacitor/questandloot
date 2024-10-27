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
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Head
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Neck
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Chest
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Ring
                </div>
              </div>

              {/* Middle portrait + weapon section */}
              <div className="flex flex-col border-l border-r border-slate-700">
                {/* Portrait */}
                <Image src={`/assets/portraits/${player.image}`} width={500} height={500} alt="Player portrait" className="border-b border-slate-700" />

                {/* Experience & level section */}
                <div className="border-b border-slate-700">
                  <div className="h-10">
                    Experience:
                  </div>
                </div>

                {/* Weapons section */}
                <div className="flex justify-evenly p-2">
                  <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                    Weapon
                  </div>
                  <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                    Shield (if warrior)
                  </div>
                </div>

              </div>

              {/* Right items section */}
              <div className="flex flex-col justify-between items-center p-2">
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Hands
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Belt
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Legs
                </div>
                <div className="w-[128px] h-[128px] border border-slate-700 rounded-md">
                  Feet
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
