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
};

// shift array by to right
