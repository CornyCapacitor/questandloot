import { getFolderName } from "@/app/functions/getFolderName"
import { LogEntry, Monster, Player } from "@/app/types"
import Image from "next/image"
import { HealthBar } from "./HealthBar"

type CombatLog = LogEntry[]

export const Participient = ({ participient, combatLog, turn }: { participient: Player | Monster, combatLog: CombatLog, turn: number }) => {
  const isMonster = (participient: Player | Monster): participient is Monster => {
    return "loot" in participient
  }

  return (
    <section className="w-full flex items-center flex-col p-2 max-w-[300px] border">
      <div className="relative w-full h-auto aspect-square border">
        <Image src={`/assets/portraits/${isMonster(participient) ? `${getFolderName(participient.image)}/${participient.image}` : `${participient.image}`}`} alt={isMonster(participient) ? 'Monster image' : 'Player image'} fill className={`object-cover ${isMonster(participient) ? 'invertX' : ''}`} unoptimized />
      </div>
      <h1>{participient.name}</h1>
      <h1>Level: {participient.level}</h1>
      <HealthBar currentHP={combatLog ? combatLog[turn][isMonster(participient) ? 'HP2' : 'HP1'] : 0} maxHP={combatLog ? combatLog[turn][isMonster(participient) ? 'maxHP2' : 'maxHP1'] : 0} />
      {participient.attributes && Object.entries(participient.attributes).map(([key, value]) => (
        <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</span>
      ))}
    </section>
  )
}