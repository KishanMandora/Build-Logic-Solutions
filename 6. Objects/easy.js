const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85,
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30,
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75,
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40,
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60,
	},
];

// from above array of objects

// 1 PRINT NAME AND TOTAL MARKS OF EACH STUDENT

const studentMarksTotal = (arr) =>
	arr.map((student) => {
		console.log(
			`Name of student is ${student.name} and there total marks are ${
				student.maths + student.science + student.computer + student.english
			}`
		);
		return student;
	});

// 2 PRINT THE NAME OF STUDENT WITH HIGHEST MARKS
const highestMarksReducer = (arr) =>
	arr.reduce((prev, curr) =>
		prev.maths + prev.english + prev.science + prev.computer >
		curr.maths + curr.english + curr.science + curr.computer
			? prev
			: curr
	);
const getHighestMarkStudent = (arr) =>
	`student with highest marks is ${highestMarksReducer(arr).name}`;

// 3 Student with lowest marks
const lowestMarksReducer = (arr) =>
	arr.reduce((prev, curr) =>
		prev.maths + prev.english + prev.science + prev.computer <
		curr.maths + curr.english + curr.science + curr.computer
			? prev
			: curr
	);
const getLowestMarkStudent = (arr) =>
	`student with lowest marks is ${lowestMarksReducer(arr).name}`;

// Avg marks of class in computer

const avgCompMarks = (arr) => {
	return arr.reduce(
		(totalMarks, curr) => (totalMarks = totalMarks + curr.computer),
		0
	);
};

// grade of Students

const gradeOfStudents = (arr) =>
	arr.map((student) => {
		const { maths, science, english, computer, name } = student;
		const percentage = (maths + science + computer + english) / 4;
		if (percentage >= 75) return `${name} has A GRADE`;
		else if (percentage >= 60) return `${name} has B GRADE`;
		else if (percentage >= 35) return `${name} has C GRADE`;
		else if (percentage < 35) return `${name} has D GRADE`;
	});
// can use console too

const totalGrads = (arr) => {
	const totalPassed = arr.reduce((prev, curr) => {
		return (curr.maths + curr.english + curr.science + curr.computer) / 4 > 35
			? (prev = prev + 1)
			: prev;
	}, 0);

	const passedStudents = arr.filter(
		(student) =>
			(student.maths + student.english + student.computer + student.science) /
				4 >
			35
	);

	const nameOfPassedStudents = passedStudents.map((student) => student.name);

	console.log(`The no of students passed are ${totalPassed}`);
	console.log(
		`The name of students pass are ${nameOfPassedStudents.map((name) => name)}`
	);
};
