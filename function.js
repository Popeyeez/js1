function findBirthYear(age) {
  let birthYear = 2025 - age;
  console.log(birthYear);
}

findBirthYear(20);
findBirthYear(35);

function hi(name) {
  let hello = "sain uu " + name;
  console.log(hello);
}

hi("bob");

// Hamgiin baga too
function findMin(n1, n2, n3) {
  if (n1 < n2) {
    if (n3 < n1) {
      console.log(n3);
    } else console.log(n1);
  } else if (n2 < n3) {
    console.log(n2);
  } else console.log(n3);
}
findMin(15, 35, 65);

// Hamgiin ih too
function findMax(n1, n2, n3) {
  if (n1 > n2) {
    if (n3 > n1) {
      console.log(n3);
    } else {
      console.log(n1);
    }
  } else {
    if (n2 > n3) {
      console.log(n2);
    } else {
      console.log(n3);
    }
  }
}
findMax(1150, 167, 466);
