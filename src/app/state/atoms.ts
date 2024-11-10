import { atom } from "jotai";
import { Player } from "../types";

export const playerAtom = atom<Player | null>(null)
export const combatReadyAtom = atom<boolean>(false)