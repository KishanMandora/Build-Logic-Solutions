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
