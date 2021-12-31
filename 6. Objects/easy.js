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

// CART

const cartItems = [
  {
    id: "101",
    name: "Oreo",
    count: 2,
    price: 30.0,
    discount: 0.18,
  },
  {
    id: "102",
    name: "Red Bull",
    count: 1,
    price: 99.0,
    discount: 0.15,
  },
  {
    id: "103",
    name: "Dairy Milk Silk",
    count: 3,
    price: 175.0,
    discount: 0.05,
  },
  {
    id: "104",
    name: "Pulse Candy Pack",
    count: 1,
    price: 135.0,
    discount: 0.2,
  },
];

// Print total no of  items in cart

const totalItems = (cart) =>
  cart.reduce((total, item) => (total = total + item.count), 0);

// total discount
const totalDiscout = (cart) =>
  cart.reduce(
    (discount, item) => (discount = discount + item.count * item.discount),
    0
  );

// total CartValue
const totalCartValue = (cart) => {
  const totalDiscoutPrice = totalDiscout(cart);
  const totalPrice = cart.reduce(
    (total, item) => (total = total + item.price * item.count),
    0
  );

  return totalPrice - totalDiscoutPrice;
};

// Total Tax Amount

const totalTax = (cart) => (totalCartValue(cart) * 18) / 100;

// Salary calculation using OOPs

class Employee {
  constructor(name, id, basicSalary, rentAllowance, allowances) {
    this.name = name;
    this.id = id;
    this.basicSalary = basicSalary;
    this.rentAllowance = rentAllowance;
    this.allowances = allowances;
  }

  getSalary() {
    console.log(`Net salary of ${this.name} is ${this.netSalary()} ₹`);
  }

  netSalary() {
    return this.basicSalary + this.allowances + this.rentAllowance;
  }
}

const firstEmployee = new Employee("kishan", 13, 500, 50, 30);
const secondEmployee = new Employee("bond", 7, 2000, 300, 100);

firstEmployee.getSalary();
secondEmployee.getSalary();

// Bank  Account
class BankAccount {
  constructor(name, accountNumber, balance, accountType, ifsc) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountType = accountType;
    this.ifsc = ifsc;
  }

  balanceInfo() {
    console.log(`${this.name} your balance is ${this.balance}`);
  }
}

const customer1 = new BankAccount("luffy", 2, 30000000, "current", "xyz");
const customer2 = new BankAccount("naruto", 7, 50000, "current", "abc");
const customer3 = new BankAccount("goku", 9000, 20000, "savings", "jkl");

customer1.balanceInfo();
customer2.balanceInfo();
customer3.balanceInfo();

const averageBalance = (...customers) =>
  customers.reduce((avg, customer) => (avg = avg + customer.balance), 0) /
  customers.length;
