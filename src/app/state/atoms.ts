import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Player } from "../types";

export const playerAtom = atomWithStorage<Player | null>('playerAtom', null)
export const combatReadyAtom = atom<boolean>(false)