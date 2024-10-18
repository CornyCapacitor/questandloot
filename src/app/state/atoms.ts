import { atom } from "jotai";
import { Enemy, Player } from "../types";

export const playerAtom = atom<Player | null>(null)
export const enemyAtom = atom<Player | Enemy | null>(null)