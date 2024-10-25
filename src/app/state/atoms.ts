import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Monster, Player } from "../types";

export const playerAtom = atomWithStorage<Player | null>('playerAtom', null)
export const enemyAtom = atom<Monster | null>(null)