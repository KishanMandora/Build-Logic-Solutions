// arrayLength

const arrayLength = (arr) => arr.reduce((length) => (length = length + 1), 0);

//idexOf

const indexOfArr = (arr, no) => {
  for (let i = 0; i <= arr.length; i++) {
    if (no === arr[i]) return i;
  }
};

// replace numbers

const numReplace = (arr, n1, n2) => {
  for (let i = 0; i <= arr.length; i++) {
    if (n1 === arr[i]) {
      arr[i] = n2;
    }
  }
  return arr;
};
//  can also be done by returning new arr (try it out)

// merge array

const mergeArr = (arr1, arr2) => {
  const mergedArr = [];

  const pushToArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      mergedArr.push(arr[i]);
    }
  };

  pushToArr(arr1);
  pushToArr(arr2);
  return mergedArr;
};

// character from index

const charAt = (str, index) => {
  for (let i = 0; i < str.length; i++) {
    if (i === index) return str[i];
  }
};

// minimum of two dates

const minDate = (date1, date2) => {
  const dateArr1 = date1.split("/").map((num) => parseInt(num));
  const dateArr2 = date2.split("/").map((num) => parseInt(num));

  // test cases
  if (dateArr2.length > 3 || dateArr1.length > 3) {
    return "please enter valid dates";
  }

  // validate Function

  const validate = (value1, value2, greaterThan, lesserThan) => {
    if (!(value1 > greaterThan))
      return `${value1} should be equal to or greater than ${greaterThan + 1}`;
    if (!(value2 > greaterThan))
      return `${value2} should be equal to greater than ${greaterThan + 1}`;
    if (!(value1 < lesserThan))
      return `${value1} should be equal to lesser than ${lesserThan - 1}`;
    if (!(value2 < lesserThan))
      return `${value2} should be equal to lesser than ${lesserThan - 1}`;
  };

  // for year validation
  const yearValidate = validate(dateArr1[2], dateArr2[2], 0000, 10000);
  if (yearValidate) return `year ${yearValidate}`;

  // for month validation
  const monthValidate = validate(dateArr1[1], dateArr2[1], 00, 13);
  if (monthValidate) return `month ${monthValidate}`;

  // for days validation
  const dayValidation = validate(dateArr1[0], dateArr2[0], 00, 32);
  if (dayValidation) return `day ${dayValidation}`;

  // minimum check
  const minimumCheck = (valueFromDate1, valueFromDate2) => {
    if (valueFromDate1 < valueFromDate2)
      return `${date1} comes before ${date2}`;
    if (valueFromDate2 < valueFromDate1)
      return `${date2} comes before ${date1}`;
  };

  // year minimum check
  const minimumYear = minimumCheck(dateArr1[2], dateArr2[2]);
  if (minimumYear) return minimumYear;

  // month check
  const minimumMonth = minimumCheck(dateArr1[1], dateArr2[1]);
  if (minimumMonth) return minimumMonth;

  // day check
  const minimumDay = minimumCheck(dateArr1[1], dateArr2[1]);
  if (minimumDay) {
    return minimumDay;
  } else {
    return `${date1} and ${date2} are both equal`;
  }
};

// can add more specific test case for months with 30,31 days
// can also add the test case for feb month according to leap year and check it
