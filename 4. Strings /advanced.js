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
