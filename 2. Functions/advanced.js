// encode string

const encodeString = (str, shiftBy) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);
    newStr = newStr + String.fromCharCode(characterCode + shiftBy);
  }

  return newStr;
};

// sentence case

const toSentenceCase = (str) => {
  let spaceCheck = false;
  let sentenceCaseString = "";

  for (let i = 0; i < str.length; i++) {
    const characterCode = str.charCodeAt(i);

    if (i === 0) {
      sentenceCaseString =
        sentenceCaseString + String.fromCharCode(characterCode - 32);
    } else if (str[i] === " ") {
      sentenceCaseString =
        sentenceCaseString + String.fromCharCode(characterCode);
      spaceCheck = true;
    } else if (spaceCheck) {
      sentenceCaseString =
        sentenceCaseString + String.fromCharCode(characterCode - 32);
      spaceCheck = false;
    } else {
      sentenceCaseString =
        sentenceCaseString + String.fromCharCode(characterCode);
    }
  }

  return sentenceCaseString;
};
