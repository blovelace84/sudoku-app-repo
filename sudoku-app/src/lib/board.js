export function createEmptyBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(null));
}