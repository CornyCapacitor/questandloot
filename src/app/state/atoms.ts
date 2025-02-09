import { atom } from "jotai";
import { DungeonKey, Player } from "../types";

export const playerAtom = atom<Player | null>(null)
export const combatTypeAtom = atom<DungeonKey | 'journey' | null>(null)