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

  debugger;
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
