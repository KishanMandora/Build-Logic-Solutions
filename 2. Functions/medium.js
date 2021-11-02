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
