// FizzBuzz

const fizzBuzz = (arr) => {
	const numArr = Array(arr).fill();

	return numArr.map(
		(n, i) =>
			`${(i + 1) % 3 === 0 ? "Fizz" : ""}${(i + 1) % 5 === 0 ? " Buzz" : ""}` ||
			i + 1
	);
};

// print star pattern

const starPattern = (n) => {
	let str = "";
	for (let i = 1; i <= n; i++) {
		str = str + "*";
		console.log(str);
	}
	return `str is ${str}`;
};

// multiplication table

const multiplicationTable = (n) => {
	for (let i = 1; i <= 12; i++) {
		console.log(`${n} * ${i} = ${n * i}`);
	}
};

// fibonacci

// factorial

const factorial = (num) => {
	let factorial = 1;
	for (let i = 1; i <= num; i++) {
		factorial = factorial * i;
	}
	return factorial;
};

// program to find if no is prime or not

// weekend or weekday

const dayChecker = (day) => {
	switch (day.toLowerCase()) {
		case "monday":
			return `${day}  is a weekday`;
		case "tuesday":
			return `${day}  is a weekday`;
		case "wednesday":
			return `${day}  is a weekday`;
		case "thursday":
			return `${day}  is a weekday`;
		case "friday":
			return `${day}  is a weekday`;
		case "saturday":
			return `${day}  is a weekend`;
		case "sunday":
			return `${day}  is a weekend`;
		default:
			return `${day} doesn't exist, please enter a valid day`;
	}
};
