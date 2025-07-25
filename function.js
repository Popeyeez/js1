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
    } else console.log(n1);
  } else if (n2 > n3) {
    console.log(n2);
  } else console.log(n3);
}
findMax(1150, 167, 466);

// n1 - baraanii une
// n2 - avsan too shirheg
// n3 - zarah une
// n4 - zarsan too shirheg

function findResult(n1, n2, n3, n4) {
  let zardal = n1 * n2;
  let ashig = n3 * n4;
  let resultzardal = n1 * n2 - n3 * n4;
  let resultashig = n3 * n4 - n2 * n1;

  if (zardal > ashig) {
    return "aldagdal " + resultzardal;
  } else {
    return "ashig " + resultashig;
  }
}
let result = findResult(100, 20, 150, 10);
console.log(result);

function findDay(n1) {
  if (n1 == 1) {
    return "Davaa-Garag";
  } else if (n1 == 2) {
    return "Myagmar-Garag";
  } else if (n1 == 3) {
    return "Lhagva-Garag";
  } else if (n1 == 4) {
    return "Purev-Garag";
  } else if (n1 == 5) {
    return "Baasan-Garag";
  } else if (n1 == 6) {
    return "Byamba-Garag";
  } else if (n1 == 7) {
    return "Nyam-Garag";
  }
  return "No-Garag";
}
let day = findDay(8);
console.log(day);
