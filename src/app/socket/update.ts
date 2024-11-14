import { Socket } from "socket.io-client";
import { Player } from "../types";

export const update = (socket: Socket, data: Player) => {
  socket.emit('update', data)
}