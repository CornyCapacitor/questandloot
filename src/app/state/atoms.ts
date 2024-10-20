import { atom } from "jotai";
import { Monster, Player } from "../types";

export const playerAtom = atom<Player | null>(null)
export const enemyAtom = atom<Monster | null>(null)