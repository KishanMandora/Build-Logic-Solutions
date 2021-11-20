// sum of all nos in an array

const sumOfArray = (arr) => arr.reduce((prev, curr) => (prev = prev + curr), 0);

// find avg of an array

const avgOfArray = (arr) =>
  arr.reduce((prev, curr) => (prev = prev + curr), 0) / arr.length;

// const Maximum and minimum of an array

const maxMinOfArr = (arr) => {
  const max = arr.reduce((prev, curr) => (prev > curr ? prev : curr));
  const min = arr.reduce((prev, curr) => (prev < curr ? prev : curr));

  return console.log(`Max no is ${max}, min no is ${min}`);
};

// median and mode

const FindMedianMode = (arr) => {
  const newArr = [...arr].sort((a, b) => a - b);

  let median;
  let i;
  let mode;

  if (newArr.length % 2 === 0) {
    i = newArr.length / 2;
    median = (newArr[i] + newArr[i - 1]) / 2;
  }
  if (newArr.length % 2 !== 0) {
    i = parseInt(newArr.length / 2);
    median = newArr[i];
  }

  const modeObj = newArr.reduce((obj, curr) => {
    `${curr}` in obj ? obj[curr]++ : (obj[curr] = 1);
    return obj;
  }, {});

  mode = { no: 0, count: 0 };
  for (const key in modeObj) {
    if (modeObj[key] > mode.count) {
      mode.no = key;
      mode.count = modeObj[key];
    }
  }

  return `${median} is median and ${mode.no} is mode `;
};

// sum of two arrays

const sumOfTwoArr = (arr1, arr2) =>
  arr1.reduce((prev, curr) => (prev = prev + curr), 0) +
  arr2.reduce((prev, curr) => (prev = prev + curr), 0);

// no of constants and vowels in a string

const countVowelsAndConstants = (str) => {
  const vowelsArr = ["a", "e", "i", "o", "u"];
  let vowelsAndConstantsObj = { vowels: 0, constants: 0 };

  for (let i = 0; i < str.length; i++) {
    if (vowelsArr.includes(str[i])) {
      vowelsAndConstantsObj = {
        ...vowelsAndConstantsObj,
        vowels: vowelsAndConstantsObj.vowels + 1,
      };
    }
    if (!vowelsArr.includes(str[i]) && str[i] !== " ") {
      vowelsAndConstantsObj = {
        ...vowelsAndConstantsObj,
        constants: vowelsAndConstantsObj.constants + 1,
      };
    }
  }

  return vowelsAndConstantsObj;
}; // can be done by reduce as well try it out

// shift array by to right
// ex [1,2,3,4,5] by 1 = [5, 1, 2, 3, 4]
// ex [1, 2, 3, 4, 5, 6, 7] by 3 = [7, 6, 5, 1, 2, 3, 4]

const arrayRightRotatation = (arr, shift) => {
  if (shift > arr.length) {
    return "please enter a value of shift less than  the length of the array";
  }

  const newArr = [...arr];
  const rotation = [];

  for (let i = newArr.length - 1; shift > 0; i--) {
    rotation.push(newArr[i]);
    newArr.pop();
    shift--;
  }

  return [...rotation, ...newArr];
};
