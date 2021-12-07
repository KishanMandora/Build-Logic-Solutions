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

// reverse characters of word

const reverseCharactersOfWord = (str) => {
  const splitWordsArray = str.split(" ");

  let reversedString = "";

  for (let i = 0; i < splitWordsArray.length; i++) {
    const wordFromArray = splitWordsArray[i];

    for (let j = wordFromArray.length - 1; j >= 0; j--) {
      reversedString = reversedString + wordFromArray[j];
    }

    if (i !== splitWordsArray.length - 1) {
      reversedString = reversedString + " ";
    }
  }

  return reversedString;
};

// bubble sort

const bubbleSort = (arr) => {
  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 1; j < newArr.length - i - 1; j++) {
      if (newArr[j] > newArr[i]) {
        const temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return newArr;
};
