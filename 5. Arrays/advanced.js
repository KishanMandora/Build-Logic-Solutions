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

// check if a matrix is identity matrix

const identityMatrixCheck = (matrix) => {
  let check;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix.length !== matrix[i].length) {
      return "It should be a square matrix";
    }

    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        matrix[i][j] === 1 ? (check = true) : (check = false);
      } else if (i !== j) {
        matrix[i][j] === 0 ? (check = true) : (check = false);
      }

      if (!check) {
        return "Not a identity matrix";
      }
    }
  }

  return "It's a identity matrix";
};

// transpose

const transposeMatrix = (matrix) => {
  if (matrix.length <= 1) return "please enter proper matrix";

  const arr = [];

  //   debugger;
  for (let row = 0; row < matrix[0].length; row++) {
    arr[row] = new Array(matrix.length);
    let col = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (row === j) {
          arr[row][col] = matrix[i][j];
          col++;
        }
      }
    }
  }

  return arr;
};
// try to improve the  solution and add edge case
