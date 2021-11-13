// sum of two number

const sumOfTwo = (num1, num2) => console.log(num1 + num2);

// Simple Interest

const simpleInterest = (p, r, t) => `Simple interest is ${(p * r * t) / 100}`;

// kinetic energy

const kineticEnergy = (mass, velocity) =>
  `Kinetic energy is ${0.5 * mass * velocity * velocity}`;

// fahrenheit to celsuis converter

const degreeConverter = (c) => `Fahrenheit for ${c}C is ${(9 * c) / 5 + 32}F`;

// area, perimeter, surface area, volume

const measurementAreas = (l) => {
  const area = l * l;
  const perimeter = 4 * l;
  const surfaceArea = 6 * l * l;
  const volume = l * l * l;

  return console.log(
    `Area of square is ${area}, Perimeter of square is ${perimeter}, Surface area of cube is ${surfaceArea}, Volume of cube is ${volume}`
  );
};

// profit loss calculator

const profitOrLoss = (cp, sp) =>
  cp > sp ? `${cp - sp} Loss` : `${sp - cp} profit`;

// sum of N natural digits
const sumOfNDigits = (n) => (n * (n + 1)) / 2;

// print n number of odd numbers

const nOddNums = (n) => {
  const arrOfOddNum = [];

  for (let i = 1; n >= 1; i++) {
    if (i % 2 !== 0) {
      n = n - 1;
      arrOfOddNum.unshift(i);
    }
  }
  return arrOfOddNum;
};

// sum of all digits in a string

const sumOfStrDigits = (digits) => {
  const strOfDigits = JSON.stringify(digits);
  let sum = 0;

  for (let i = 0; i < strOfDigits.length; i++) {
    sum = sum + parseInt(strOfDigits[i]);
  }
  return sum;
};

// reverse a number

const reverseNumber = (num) => {
  if (typeof num !== "number") return "Please enter numbers";
  const numStr = JSON.stringify(num);

  let reverse = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    reverse = reverse + numStr[i];
  }

  return parseInt(reverse);
};
// Note:  doesn't work in floats, can also do it using toString()

// decimal to  binary

const decimalToBinary = (num) => {
  let remainder;
  let binary = "";

  while (num !== 0) {
    remainder = num % 2;
    num = parseInt(num / 2);
    binary = remainder + binary;
  }

  return parseInt(binary);
};
