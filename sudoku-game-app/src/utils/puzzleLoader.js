// Sample puzzles (you can expand this later)
export const puzzles = [
  [
    [2, 3, 9, 8, 7, 5, 1, null, null],
    [4, 5, 6, null, null, 9, 2, null, 7],
    [7, null, 1, 8, 6, 4, null, null, null],
    [7, null, 1, null, null, 3, null, null, 8],
    [null, 4, 2, 5, 3, null, 7, null, 1],
    [3, null, null, 7, 8, 4, 2, null, 9],
    [9, null, 8, 3, 6, 5, 1, 4, null],
    [5, null, 4, 9, 1, null, null, null, 8],
    [6, null, 3, 4, 5, 9, null, null, null]
  ],
  [
    [null, null, null, 2, 6, null, 7, null, 1],
    [6, 8, null, null, 7, null, null, 9, null],
    [1, 9, null, null, null, 4, 5, null, null],
    [8, 2, null, 1, null, null, null, 4, null],
    [null, null, 4, 6, null, 2, 9, null, null],
    [null, 5, null, null, null, 3, null, 2, 8],
    [null, null, 9, 3, null, null, null, 7, 4],
    [null, 4, null, null, 5, null, null, 3, 6],
    [7, null, 3, null, 1, 8, null, null, null]
  ]
];

// Generate editable mask
export function generateEditableMask(puzzle) {
  return puzzle.map(row => row.map(cell => cell === null));
}

// Get a random puzzle
export function getRandomPuzzle() {
  const index = Math.floor(Math.random() * puzzles.length);
  return puzzles[index];
}