'use client'

import { calculatePlayerAttributes } from "@/app/functions/characterCalculations"
import { playerAtom } from "@/app/state/atoms"
import { Attributes, Player } from "@/app/types"
import { ExperienceBar } from "@/components/layout/ExperienceBar"
import IconSpinner from "@/components/layout/IconSpinner"
import ItemFrame from "@/components/layout/ItemFrame"
import { useAtom } from "jotai"
import Image from "next/image"
import { useEffect, useState } from "react"

const CharacterPage = () => {
  const [player] = useAtom<Player | null>(playerAtom)
  const [playerStats, setPlayerStats] = useState<Attributes | null>(null)
  const [old] = useState(false)

  useEffect(() => {
    if (!player) return
    const totalStats = calculatePlayerAttributes(player.equipment, player.attributes, player.activePotion)
    setPlayerStats(totalStats)
  }, [player])

  if (!player) {
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <IconSpinner icon="/assets/portraits/gnome.png" size={150} />
      </div>
    )
  }

  // if (old) return (
  //   <div className="w-full h-full flex gap-2 items-start overflow-y-auto">
  //     {/* Character section */}
  //     <section className="w-full flex flex-shrink-0 border-slate-700">
  //       {/* Equipment section */}
  //       <section id="equipment" className="flex flex-shrink-0 border-r border-slate-700">
  //         <div>
  //           {/* Upper equipment section */}
  //           <div className="flex">
  //             {/* Left items section */}
  //             <div className="flex flex-col justify-between items-center p-2">
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/ringslot.svg" layout="fill" alt="Ring slot" objectFit="cover" className="grayscale" />
  //               </div>
  //             </div>

  //             {/* Middle portrait + weapon section */}
  //             <div className="flex flex-col border-l border-r border-slate-700">
  //               {/* Portrait */}
  //               <div className="w-[400px] h-[400px] relative">
  //                 <Image src={`/assets/portraits/${player.image}`} layout="fill" objectFit="cover" alt="Player portrait" className="border-b border-slate-700" />
  //               </div>

  //               {/* Experience & level section */}
  //               <div className="border-b border-slate-700">
  //                 <div className="h-10">
  //                   Experience:
  //                 </div>
  //               </div>

  //               {/* Weapons section */}
  //               <div className="flex justify-evenly p-2">
  //                 <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                   <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale" />
  //                 </div>
  //                 <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                   <Image src="/assets/equipment/slots/secondaryslot.svg" layout="fill" alt="Secondary slot" objectFit="cover" className="grayscale" />
  //                 </div>
  //               </div>

  //             </div>

  //             {/* Right items section */}
  //             <div className="flex flex-col justify-between items-center p-2">
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale" />
  //               </div>
  //               <div className="w-[128px] h-[128px] border border-slate-700 rounded-md relative">
  //                 <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>

  //     </section>
  //     <section id="items" className="flex flex-grow flex-wrap w-full p-2 gap-2 h-max max-h-[585px] overflow-y-hidden">
  //       {player.items.map((item, index) => (
  //         <ItemFrame key={index} itemData={item.item} isClickable={true} isDisabled={false} isEquipped={false} height={128} width={128} />
  //       ))}
  //     </section>
  //   </div>
  // )

  if (!old) return (
    <div className="w-full h-full flex">
      {/* Character */}
      <section className="h-full flex flex-col flex-shrink-0 border-r border-slate-700">

        {/* Character display */}
        <div className="flex flex-shrink-0 w-[500px] h-[500px] border-slate-700">

          {/* Left */}
          <div className="flex flex-col flex-shrink-0 items-center justify-between gap-2 p-2">

            {/* head */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.head ? (
                <ItemFrame itemData={player.equipment.head} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/headslot.svg" layout="fill" alt="Head slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Neck */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.neck ? (
                <ItemFrame itemData={player.equipment.neck} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/neckslot.svg" layout="fill" alt="Neck slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Chest */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.chest ? (
                <ItemFrame itemData={player.equipment.chest} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/chestslot.svg" layout="fill" alt="Chest slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Ring */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.ring ? (
                <ItemFrame itemData={player.equipment.ring} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
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
                <ExperienceBar experience={player.experience} level={player.level} />
              </div>
            </div>

            <div className="flex items-center justify-around gap-2 p-2 flex-shrink-0 border-t border-slate-700">

              {/* Weapon */}
              <div className="w-[100px] h-[100px] rounded-md relative">
                {player.equipment.weapon ? (
                  <ItemFrame itemData={player.equipment.weapon} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
                ) : (
                  <Image src="/assets/equipment/slots/primaryslot.svg" layout="fill" alt="Primary slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
                )}
              </div>

              {/* Shield (requires being warrior) */}
              {player.profession === 'warrior' && (
                <div className="w-[100px] h-[100px] rounded-md relative">
                  {player.equipment.shield ? (
                    <ItemFrame itemData={player.equipment.shield} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
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
                <ItemFrame itemData={player.equipment.hands} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/handsslot.svg" layout="fill" alt="Hands slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Belt */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.belt ? (
                <ItemFrame itemData={player.equipment.belt} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/beltslot.svg" layout="fill" alt="Belt slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Legs */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.legs ? (
                <ItemFrame itemData={player.equipment.legs} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/legsslot.svg" layout="fill" alt="Legs slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>

            {/* Feet */}
            <div className="w-[100px] h-[100px] rounded-md relative">
              {player.equipment.feet ? (
                <ItemFrame itemData={player.equipment.feet} isClickable={true} isEquipped={true} isDisabled={false} width={100} height={100} />
              ) : (
                <Image src="/assets/equipment/slots/feetslot.svg" layout="fill" alt="Feet slot" objectFit="cover" className="grayscale border border-slate-700 rounded-md" />
              )}
            </div>
          </div>
        </div>

        {/* Character attributes */}
        <div className="flex flex-col justify-between flex-grow border-t border-slate-700 p-2">
          <span>Level: {player.level}</span>
          {playerStats && (
            <>
              <span>Strength: {playerStats.strength}</span>
              <span>Agility: {playerStats.agility}</span>
              <span>Intellect: {playerStats.intellect}</span>
              <span>Stamina: {playerStats.stamina}</span>
              <span>Luck: {playerStats.luck}</span>
            </>
          )}
        </div>
      </section>

      {/* Right side / Items */}
      <section className="flex content-start flex-grow flex-wrap h-full gap-2 p-2 border-slate-700 overflow-y-auto">
        {player.items.map((item, index) => (
          <ItemFrame key={index} itemData={item.item} isClickable={true} isDisabled={false} isEquipped={false} width={128} height={128} />
        ))}
        <button onClick={() => console.log(player)}>Console.log player</button>
      </section>
    </div>
  )
}


export default CharacterPage
