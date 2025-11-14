export const initialPuzzle = [
  [2, 3, 9, 8, 7, 5, 1, null, null],
  [4, 5, 6, null, 9, 2, null, null, 7],
  [7, null, 8, 6, 4, null, null, null, null],
  [7, null, 1, null, null, null, 3, null, 8],
  [null, 4, 2, 5, 3, null, 7, null, 1],
  [3, null, null, 7, 8, null, 4, 2, 9],
  [9, 8, null, 3, 6, 5, 1, 4, null],
  [5, null, 4, 9, 1, null, null, 8, null],
  [6, null, 3, 4, 5, 9, null, null, null]
];

export function generateEditableMask(puzzle) {
  return puzzle.map(row => row.map(cell => cell === null));
}