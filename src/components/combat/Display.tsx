import { Items, LogEntry, Monster, Player } from "@/app/types"
import { CombatLog } from "./CombatLog"
import { Participient } from "./Participient"
import { TurnManagement } from "./TurnManagement"

export const Display = ({ character1, character2, combatLog, turn, setTurn, gold, experience, loot }: { character1: Player, character2: Monster, combatLog: LogEntry[], turn: number, setTurn: (turn: number) => void, gold: number, experience: number, loot: Items[] }) => {
  return (
    <main className="p-2 flex flex-col w-full h-screen overflow-y-auto 2xl:flex-row 2xl:bg-inherit">
      {/* Player and monster section for small devices */}
      <section className="flex flex-[1] 2xl:h-[50%] w-full justify-between 2xl:hidden">
        <Participient participient={character1} combatLog={combatLog} turn={turn} className="flex" />
        <Participient participient={character2} combatLog={combatLog} turn={turn} className="flex" />
      </section>

      {/* Player section for big devices */}
      <Participient participient={character1} combatLog={combatLog} turn={turn} className="2xl:flex hidden" />

      <section className="w-full lg:flex-[1] xl:overflow-y-auto 2xl:h-full flex flex-col flex-grow border-t border-b">
        <section className="w-full flex flex-col flex-grow scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
          <CombatLog combatLog={combatLog} turn={turn} gold={gold} experience={experience} loot={loot} />
        </section>
        <TurnManagement setTurn={setTurn} turn={turn} combatLog={combatLog} />
      </section>

      {/* Monster section for big devices */}
      <Participient participient={character2} combatLog={combatLog} turn={turn} className="2xl:flex hidden" />
    </main>
  )
}