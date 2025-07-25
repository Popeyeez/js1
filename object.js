let boldo = {
  lastName: "dorjo",
  firstName: "boldo",
  age: 16,
  grade: 90,
  gender: "male",
};

let grades = [10, 20, 30, 100];
let names = ["boldo", "dorjo", "naraa"];
let students = [
  { name: "boldo", age: 16, grade: 90, balance: 51000, gender: "male" },
  { name: "dorjo", age: 30, grade: 66, balance: 1267000, gender: "male" },
  { name: "narantsetseg", age: 25, grade: 78, balance: 7800, gender: "female" },
  { name: "bayraa", age: 35, grade: 48, balance: 79000, gender: "male" },
  { name: "narka", age: 17, grade: 70, balance: 125000, gender: "male" },
];

function findTopStudent(arr) {
  let topStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topStudent.grade < arr[i].grade) {
      topStudent = arr[i];
    }
  }
  return topStudent;
}
let topStudent = findTopStudent(students);
console.log("Onts suragch", topStudent);

function findOldStudent(arr) {
  let oldStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (oldStudent.age < arr[i].age) {
      oldStudent = arr[i];
    }
  }
  return oldStudent;
}
let oldStudent = findOldStudent(students);
console.log("Hamgiin hugshin", oldStudent);

function findTopBalance(arr) {
  let topBalance = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (topBalance.balance < arr[i].balance) {
      topBalance = arr[i];
    }
  }
  return topBalance;
}
let topBalance = findTopBalance(students);
console.log("Hamgiin ih mungutei", topBalance);

function findStudentByAge(arr, nas) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age === nas) {
      return arr[i];
    }
  }
  return " :No students this age";
}

let studentsAge = findStudentByAge(students, 30);
console.log("Find student by age", studentsAge);

function findAvgAge(arr) {
  let avgAge = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 0) {
      avgAge = avgAge + arr[i].age;
    }
  }
  return avgAge / arr.length;
}
let avgAge = findAvgAge(students);
console.log("Suragchdiin dundaj nas", avgAge);

function findAvgBalance(arr) {
  let avgBalance = 0;
  let old = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      avgBalance = avgBalance + arr[i].balance;
      old++;
    }
  }
  return avgBalance / old;
}
let avgBalance = findAvgBalance(students);
console.log("18s deesh nasnii suragchdiin balance ", avgBalance);

function findMaleStudent(arr) {
  let maleStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "male") {
      maleStudent++;
    }
  }
  return maleStudent;
}
let maleStudent = findMaleStudent(students);
console.log("Eregtei suragchdiin too", maleStudent);

const findFemaleStudent = (arr) => {
  let femaleStudent = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].gender == "female") {
      femaleStudent++;
    }
  }
  return femaleStudent * (100 / arr.length);
};

const femaleStudent = findFemaleStudent(students);
console.log("Emegtei suragch hedn huvi be", femaleStudent, "%");

function findLongName(arr) {
  let longName = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (longName.name.length < arr[i].name.length) {
      longName = arr[i];
    }
  }
  return longName;
}
let longName = findLongName(students);
console.log("Urt nertei suragch", longName);

const findBadStudent = (arr) => {
  let badStudent = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (badStudent.grade > arr[i].grade) {
      badStudent = arr[i];
    }
  }
  return badStudent;
};
const badStudent = findBadStudent(students);
console.log("Hamgiin muu suragch", badStudent);
