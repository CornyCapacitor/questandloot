import { parseCombatLog } from "@/app/functions/combatLogParser";
import { Items, LogEntry } from "@/app/types";
import { useMemo } from "react";
import { Result } from "./Result";

export const CombatLog = ({ combatLog, turn, gold, experience, loot }: { combatLog: LogEntry[], turn: number, gold: number | null, experience: number | null, loot: Items[] }) => {
  const parsedCombatLog = useMemo(() => parseCombatLog(combatLog), [combatLog]);
  const log = parsedCombatLog.slice(0, turn + 1)

  if (parsedCombatLog) return (
    <>
      {log.map((entry, index) => (
        <Entry key={index} turn={turn} entry={entry} />
      ))}
      {turn === combatLog.length - 1 && (
        <Result gold={gold} experience={experience} loot={loot} />
      )}
    </>
  )
}

const Entry = ({ turn, entry }: { turn: number, entry: string }) => {
  return (
    <div className="w-full px-5 py-1 border-b">
      <h1 className="w-full text-center">{turn}</h1>
      <span className="">{entry}</span>
    </div>
  )
}