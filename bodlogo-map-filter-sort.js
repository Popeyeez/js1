let data = [
  {
    name: "boldo",
    age: 16,
    grade: 90,
    balance: 51000,
    gender: "male",
    classCode: "3A",
  },
  {
    name: "dorjo",
    age: 30,
    grade: 66,
    balance: 1267000,
    gender: "male",
    classCode: "3C",
  },
  {
    name: "narantsetseg",
    age: 25,
    grade: 78,
    balance: 7800,
    gender: "female",
    classCode: "3B",
  },
  {
    name: "bayraa",
    age: 35,
    grade: 48,
    balance: 79000,
    gender: "male",
    classCode: "3B",
  },
  {
    name: "narka",
    age: 17,
    grade: 70,
    balance: 125000,
    gender: "male",
    classCode: "3A",
  },
  {
    name: "dodo",
    age: 26,
    grade: 87,
    balance: 55000,
    gender: "female",
    classCode: "3D",
  },
];

// nasand hursen suragchid

function findAdultStudents(students) {
  let filteredAge = students.filter((student) => {
    return student.age > 18;
  });
  return filteredAge;
}
let resultAdult = findAdultStudents(data);
console.log("Filter Adult Students");
console.log(resultAdult);

// gender ogonguut tuhain gendereer filterleh function bich
// eg: filterByGender"male"

function findGenderByStudents(students, gender) {
  let filteredGender = students.filter((student) => {
    return student.gender == gender;
  });
  return filteredGender;
}
let resultGender = findGenderByStudents(data, "male");
console.log("Filter Gender");
console.log(resultGender);

// nasaarn sortloh function bich

function sortAge(students) {
  let sortAgeStudents = students.sort((student2, student1) => {
    return student2.age - student1.age;
  });
  return sortAgeStudents;
}

let sortAges = sortAge(data);
console.log("Sort AGE");
console.log(sortAges);

// neg too ogonguut tuhain toonoos deesh balance tai suragchdiig yalgaj bich

function findBalanceStudents(students, target) {
  let findBalanceStudents = students.filter((student) => {
    return student.balance > target;
  });
  return findBalanceStudents;
}
let highBalanceStudents = findBalanceStudents(data, 900000);
console.log("High Balance Students");
console.log(highBalanceStudents);

// // classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]

function addClassCodeToSdutents(students) {
  let ClassStudents = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      balance: student.balance,
      gender: student.gender,
      classCode: "3A",
    };
  });
  return ClassStudents;
}
let addClassStudents = addClassCodeToSdutents(data);
console.log("ADD Class 3A");
console.log(addClassStudents);

// removeGenders from student array function bich

function removedGenders(students) {
  let removeGenders = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      balance: student.balance,
    };
  });
  return removeGenders;
}
let resultRemoveGenders = removedGenders(data);
console.log("removed gender");
console.log(resultRemoveGenders);
