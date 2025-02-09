import { LogEntry } from "@/app/types"


type Actions = 'decrease' | 'increase' | 'skip'
// Dupe of this type, need to fix that
type CombatLog = LogEntry[]

export const TurnManagement = ({ setTurn, turn, combatLog }: { setTurn: (turn: number) => void, turn: number, combatLog: CombatLog }) => {
  const handleChangeTurn = (action: string) => {
    if (combatLog && action === 'increase') {
      if (turn < combatLog.length - 1) {
        setTurn(turn + 1)
      }
    } else if (action === 'decrease') {
      if (turn > 0) {
        setTurn(turn - 1)
      }
    } else if (combatLog && action === 'skip') {
      setTurn(combatLog.length - 1)
    } else {
      return turn
    }
  }

  const TurnButton = ({ action, text }: { action: Actions, text: string }) => {
    return (
      <button className="bg-blue-500 p-2 rounded-lg" onClick={() => handleChangeTurn(action)}>{text}</button>
    )
  }

  return (
    <section className="w-full items-center justify-center flex gap-2 h-16 flex-shrink-0">
      <TurnButton action="decrease" text="Previous turn" />
      <TurnButton action="increase" text="Next turn" />
      <TurnButton action="skip" text="Skip to the end turn" />
    </section>
  )
}