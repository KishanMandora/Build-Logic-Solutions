// power

const power = (n1, n2) => n1 ** n2;

// area of hexagon
const areaOfHexagon = (a) => (3 * Math.sqrt(3) * a * a) / 2;

// no of words

// minimum of all numbers
const findMin = (...args) =>
	args.reduce((prev, current) => (prev < current ? prev : current));

// maximum of all numbers
const findMax = (...args) =>
	args.reduce((prev, current) => (prev > current ? prev : current));

// type of triangle

const typeOfTriangle = (side1, side2, side3) => {
	if (side1 + side2 + side3 !== 180)
		return "The sum of all side should be 180 degree";
	else {
		if (side1 === side2 && side2 === side3 && side1 === side3)
			return "It is an Equilateral Triangle";
		else if (side1 === side2 || side2 === side3 || side3 === side1)
			return "It is an Isoceles Triangle";
		else if (side1 !== side2 && side1 !== side3 && side3 !== side2)
			return "It is a scalene triangle";
	}
};
