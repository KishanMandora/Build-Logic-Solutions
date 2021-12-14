// replace characters in a string

const replaceCharaters = (str, oldCharacter, newCharater) => {
  if (oldCharacter.length !== 1 || newCharater.length !== 1) {
    return "Please enter only one charater to replace and be replaced";
  }

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === oldCharacter) {
      newStr = newStr + newCharater;
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

const removeSpaces = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr = newStr;
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};

// alternate ToggleCase

const alternateToggleCase = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);
    if (i % 2 !== 0 && characterCode >= 97 && characterCode <= 122) {
      newStr = newStr + String.fromCharCode(characterCode - 32);
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
};
// used character code for just coverting lowercase into uppercase

// counts most repeated character

const mostRepeatedCharacter = (str) => {
  const charactersCountObj = {};
  let countObj = {
    count: 0,
    character: "none",
  };

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (charactersCountObj[currentChar]) {
      charactersCountObj[currentChar] = charactersCountObj[currentChar] + 1;
    } else {
      charactersCountObj[currentChar] = 1;
    }
  }

  for (const objKey in charactersCountObj) {
    if (charactersCountObj[objKey] > countObj["count"]) {
      countObj["character"] = objKey;
      countObj["count"] = charactersCountObj[objKey];
    }
  }

  return `The most repeated character is ${countObj["character"]} with ${countObj["count"]} repeatations`;
};

// reverse words of sentence

const reverseWordsOfString = (str) => {
  const stringArr = str.split(" ");
  let newStr = "";

  for (let i = stringArr.length - 1; i >= 0; i--) {
    newStr = newStr + stringArr[i] + " ";
  }

  return newStr.trim();
};

// remove word from the string

const removeWordFromString = (str, wordToRemove) => {
  const stringArr = str.split(" ");
  let newStr = "";

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === wordToRemove.trim()) {
      newStr = newStr;
    } else {
      newStr = newStr + stringArr[i] + " ";
    }
  }

  return newStr.trim();
};
