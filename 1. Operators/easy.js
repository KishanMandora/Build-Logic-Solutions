// program to  add 5 numbers

const addFiveNumbers = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5;

// program to find if number is odd or even

const oddOrEven = (num) => (num % 2 === 0 ? `${num} is even` : `${num} is odd`);

// program to find maximum out of two numbers

const maxOfTwo = (n1, n2) =>
	n1 > n2
		? `number1 is greater than number2`
		: `number2 is greater than number1`;

// program to find maximum of 3 numbers

const maxOfThree = (n1, n2, n3) => {
	if (n1 > n2 && n1 > n3) return "n1 is the greatest no";
	else if (n2 > n1 && n2 > n3) return "n2 is the greatest no";
	else return "n3 is the greatest no";
};

// program to find minimum of three numbers

const minOfThree = (n1, n2, n3) => {
	if (n1 < n2 && n1 < n3) return "n1 is the smallest no";
	else if (n2 < n1 && n2 < n3) return "n2 is the smallest no";
	else return "n3 is the smallest no";
};

// program to find if a months has 31 days or not

const monthWith31Days = (month) => {
	switch (month.toLowerCase()) {
		case "january":
			return "It is a 31days month";
		case "march":
			return "It is a 31days month";
		case "may":
			return "It is a 31days month";
		case "july":
			return "It is a 31days month";
		case "august":
			return "It is a 31days month";
		case "october":
			return "It is a 31days month";
		case "december":
			return "It is a 31days month";
		default:
			return "It is not a 31days month";
	}
};
