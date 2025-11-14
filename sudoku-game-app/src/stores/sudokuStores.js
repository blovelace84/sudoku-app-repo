import { writable } from "svelte/store";

export const puzzle = writable([]);
export const editable = writable([]);

export function updateCell(row, col, value){
    puzzle.update(p => {
        const newGrid = [...p];
        newGrid[row][col] = value;
        return newGrid;
    });
}