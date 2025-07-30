// Map method
// array map = array iig uuriig n uurchluhgui
// map neg function avna tuhain function bas neg utga avna
// map method shine array uusgej ugnu
// ymar array uusgehee map iin returneer shiidne

let ages = [10, 20, 24, 25, 65, 46];
ages.map((a) => {
  console.log(a);
  return 10 * a;
});

let data = [
  { name: "boldo", age: 16, grade: 90, balance: 51000, gender: "male" },
  { name: "dorjo", age: 30, grade: 66, balance: 1267000, gender: "male" },
  { name: "narantsetseg", age: 25, grade: 78, balance: 7800, gender: "female" },
  { name: "bayraa", age: 35, grade: 48, balance: 79000, gender: "male" },
  { name: "narka", age: 17, grade: 70, balance: 125000, gender: "male" },
  { name: "dodo", age: 26, grade: 87, balance: 55000, gender: "female" },
];

let newStudent = students.map((student) => {
  return {
    name: student.name,
    ages: student.age,
    grade: student.grade + 1,
  };
});
console.log(newStudent);

// sort method
// sort method function avna
// avjgaa function n 2 utga orj irne
// return deer + esve - too butsaana
// sort method n array-iig ooriig n oorchlono

const sortGender = students.sort((student2, student1) => {
  if (student2.gender > student1.gender) {
    return -1;
  } else {
    return 1;
  }
});
console.log(sortGender);

// filter
// filter ooriig n oorchlohgui
// shine array uusgej ogno
// filter method neg function avna, tuhain function neg utga avna
// return deer true baih buh element iig tsugluulaad array butsaana
// nasand hursen suragchid

function findAdultStudents(students) {
  let filteredAge = students.filter((student) => {
    return student.age > 18;
  });
  return filteredAge;
}
let result = findAdultStudents(data);
console.log(result);

// gender ogonguut tuhain gendereer filterleh function bich
// eg: filterByGender"male"

const filteredByFemale = students.filter((student) => {
  if (student.gender == "male") {
    return 1;
  }
});
console.log("===================");
console.log(filteredByFemale);

// nasaarn sortloh function bich

const sortAge = students.sort((student2, student1) => {
  return student2.age - student1.age;
});
console.log("===================");
console.log(sortAge);

// neg too ogonguut tuhain toonoos deesh balance tai suragchdiig yalgaj bich

const filteredBaance = students.filter((student) => {
  if (student.balance > 900000) {
    return 1;
  }
});
console.log("===================");
console.log(filteredAge);

const filteredBalance = findFilteredBalance(students);
