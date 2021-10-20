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
