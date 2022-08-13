import { PlayerAugmented } from "../index"
import { msToHhmmss } from "./utils"

export const sendMessage = (room: RoomObject, p: PlayerObject | null, msg: string) => {
    if (p) {
        room.sendAnnouncement(`[DM] ${msg}`, p.id, 0xe6e9f2, "small", 0)
    } else {
        room.sendAnnouncement(`[Server] ${msg}`, undefined, 0xe6e9f2, "small", 0)
    }
}

export const playerMessage = (room: RoomObject, p: PlayerAugmented, msg: string) => {
    let bestTime = `[Not finished]`
    let color = 0xd6d6d6
    if (p.bestTime){
        bestTime = `[${msToHhmmss(p.bestTime)}]`
        color = 0xfaf6f0
    } 

    room.sendAnnouncement(`${p.name} ${bestTime}: ${msg}`, undefined, color, "normal", 1)
}
