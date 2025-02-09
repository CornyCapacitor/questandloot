import { Items, LogEntry, Monster, Player } from "@/app/types"
import { CombatLog } from "./CombatLog"
import { Participient } from "./Participient"
import { TurnManagement } from "./TurnManagement"

export const Display = ({ character1, character2, combatLog, turn, setTurn, gold, experience, loot }: { character1: Player, character2: Monster, combatLog: LogEntry[], turn: number, setTurn: (turn: number) => void, gold: number, experience: number, loot: Items[] }) => {
  return (
    <main className="p-2 flex w-full h-full">
      <Participient participient={character1} combatLog={combatLog} turn={turn} />
      <section className="w-full flex flex-col flex-grow border-t border-b">
        <section className="w-full flex flex-col flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
          <CombatLog combatLog={combatLog} turn={turn} gold={gold} experience={experience} loot={loot} />
        </section>
        <TurnManagement setTurn={setTurn} turn={turn} combatLog={combatLog} />
      </section>
      <Participient participient={character2} combatLog={combatLog} turn={turn} />
    </main>
  )
}