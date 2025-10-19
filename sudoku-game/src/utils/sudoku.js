//some simple logic for sudoku game
export function generateSudoku() {
    //Example of static puzzle
    return[
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];
}

export function isvalid(board, row, col, value) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === value || board[i][col] === value) return false;
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for(let r = boxRow; r < boxRow + 3; r++) {
        for(let c = boxCol; c < boxCol + 3; c++) {
            if(board[r][c] === value) return false;
        }
}
        return true;
}