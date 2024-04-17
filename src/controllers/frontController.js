import {getNotesFromDB} from './dbControllers'

export const notes = ["Nota 1", "Nota 2", "Nota 3"]

export const getNotes = async () => {
    const notes = await getNotesFromDB();
    return notes;
}