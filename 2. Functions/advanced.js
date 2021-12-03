// encode string

const encodeString = (str, shiftBy) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);
    newStr = newStr + String.fromCharCode(characterCode + shiftBy);
  }

  return newStr;
};
