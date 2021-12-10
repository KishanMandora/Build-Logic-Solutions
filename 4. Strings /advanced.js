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
