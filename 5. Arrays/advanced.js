const matrix1 = [
  [4, 3, 8],
  [3, 7, 2],
  [1, 5, 6],
];

const matrix2 = [
  [9, 2, 1],
  [6, 3, 2],
  [4, 6, 9],
];

// sum of matrix

const sumOfTwoMatrix = (a, b) => {
  if (a.length !== b.length) {
    return "No. of rows should be same for both the matrix";
  }

  const matrixSum = new Array(a.length);

  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) {
      return "No of columns should be same for both matrix";
    }

    matrixSum[i] = new Array(a[i].length);

    for (let j = 0; j < a[i].length; j++) {
      matrixSum[i][j] = a[i][j] + b[i][j];
    }
  }

  return matrixSum;
};
