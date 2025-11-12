import { isValid } from "./sudoku";

//generate an empty 9X9 board
export function createEmptyBoard(){
    return Array.from({ length: 9 }, () => Array(9).fill(null));
}

// Fill a few random valid numbers (basic pseudo-puzzle)
export function generateRandomPuzzle(filledCells = 25){
    const board = createEmptyBoard();
    let attempts = 0;

    while (filledCells > 0 && attempts < 200){
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if(board[row][col] !== null){
            attempts++;
            continue; // already filled
        }
        const num = Math.floor(Math.random() * 9) + 1;
        if(isValid(board, row, col, num)){
            board[row][col] = num;
            filledCells--;
        }
    }
    return board;
}