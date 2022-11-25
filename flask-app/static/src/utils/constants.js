const diagonallyFromTopLeft = [0, 4, 8];
const diagonallyFromTopRight = [2, 4, 6];
const topHorizontal = [0, 1, 2];
const middleHorizontal = [3, 4, 5];
const bottomHorizontal = [6, 7, 8];
const leftVertical = [0, 3, 6];
const middleVertical = [1, 4, 7];
const rightVertical = [2, 5, 8];

// prettier-ignore
export const possibilitiesOfGameEnd = {
  0: [topHorizontal, leftVertical, diagonallyFromTopLeft],
  1: [topHorizontal, middleVertical],
  2: [topHorizontal, rightVertical, diagonallyFromTopRight],

  3: [leftVertical, middleHorizontal],
  4: [diagonallyFromTopLeft, middleVertical, diagonallyFromTopRight, middleHorizontal],
  5: [rightVertical, middleHorizontal],

  6: [leftVertical, diagonallyFromTopRight, bottomHorizontal],
  7: [bottomHorizontal, middleVertical],
  8: [bottomHorizontal, diagonallyFromTopLeft, rightVertical],
};

export const none = 0;
export const cross = 1;
export const circle = 2;

// prettier-ignore
export const rowMapTable = {
  0: "0", 1: "0", 2: "0",
  3: "1", 4: "1", 5: "1",
  6: "2", 7: "2", 8: "2"
}

// prettier-ignore
export const columnMapTable = {
  0: "0", 1: "1", 2: "2",
  3: "0", 4: "1", 5: "2",
  6: "0", 7: "1", 8: "2"
}
