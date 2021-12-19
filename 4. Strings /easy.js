// toUpperCase

const convertToUpperCase = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);

    if (characterCode >= 97 && characterCode <= 122) {
      console.log("char code ", characterCode);
      newStr = newStr + String.fromCharCode(characterCode - 32);
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

// append String

const appendStrings = (str1, str2) => `${str2} ${str1}`;

// last four characters into #

const encodeLastFour = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length - 4; i++) {
    newStr = newStr + str[i];
  }

  for (let i = str.length - 4; i < str.length; i++) {
    newStr = newStr + "#";
  }

  return newStr;
};

// first 6 characters in uppercase

const firstSixToUpperCase = (str) => {
  let newStr = "";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (count < 6) {
      const characterCode = str.charCodeAt(i);
      if (characterCode >= 97 && characterCode <= 122) {
        newStr = newStr + String.fromCharCode(characterCode - 32);
        count = count + 1;
      } else {
        newStr = newStr + str[i];
      }
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

// characters in a string

const stringLength = (str) => {
  const newStr = str + "❌";
  let length = 0;

  for (let i = 0; newStr[i] !== "❌"; i++) {
    length = length + 1;
  }

  return length;
};
// the problem with above solution is it won't be useful when we have ❌ emoji

// convert string into integers

const convertToInt = (str) => parseInt(str);
// try to make own function with same functionality as parseInt

// filter out the vowels from string

const filterVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const vowelCheck = vowels.find((vowel) => vowel === str[i]);
    vowelCheck ? (newStr = newStr) : (newStr = newStr + str[i]);
  }

  return newStr;
};
// can also be done without .find
// ex: by using multiple or in if statement or second for loop for vowels

// check if string is alphabetic or not

const alphanumericStringCheck = (str) => {
  let digitsStr = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);

    characterCode >= 48 && characterCode <= 57
      ? (digitsStr = digitsStr + str[i])
      : digitsStr;
  }

  return digitsStr
    ? `yes it's alphanumeric  string with digits ${digitsStr}`
    : `not a alphanumeric string`;
};

// program that finds longest and smallest of strings

const longestAndSmallestStrings = (...args) => {
  const longestStr = args.reduce(
    (prev, curr) =>
      prev.longest.length < curr.length ? { ...prev, longest: curr } : prev,
    { longest: "" }
  );

  const smallestStr = args.reduce(
    (prev, curr) =>
      prev.smallest.length < curr.length ? prev : { ...prev, smallest: curr },
    { smallest: args[0] }
  );

  console.log(longestStr);
  console.log(smallestStr);
};
// the question was just for 3 strings but we have made it more flexible for n number of strings
// we can add test case to ensure that only string is entered as argument

// program that counts vowels and constants in a string
const consonantsAndVowelsCounter = (str) => {
  const vowelsArr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  const alphabetCount = {
    consonants: 0,
    vowels: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);

    const characterCheck =
      (characterCode >= 65 && characterCode <= 90) ||
      (characterCode >= 97 && characterCode <= 122);

    const vowelCheck = vowelsArr.find((e) => e === str[i]);

    if (vowelCheck) {
      alphabetCount.vowels = alphabetCount.vowels + 1;
    } else if (characterCheck) {
      alphabetCount.consonants = alphabetCount.consonants + 1;
    }
  }

  return alphabetCount;
};

// string greater than 7
const stringLengthGreaterThanSeven = (str) => {
  const length = stringLength(str); // my own stringLength func I created earlier

  return length > 7 ? true : false;
};
