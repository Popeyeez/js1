let num1 = document.getElementById("num1input");
let num2 = document.getElementById("num2input");
let num3 = document.getElementById("num3input");
let maximumBtn = document.getElementById("maximum");
let eyregsorogBtn = document.getElementById("eyreg-sorog");
let guravortavBtn = document.getElementById("3or5");
let leapyearBtn = document.getElementById("leapyear");
let weekBtn = document.getElementById("week");
let minimumBtn = document.getElementById("minimum");

let averageBtn = document.getElementById("average");

eyregsorogBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  if (n1 > 0) {
    console.log("eyreg");
  } else if (n1 < 0) {
    console.log("sorog");
  } else {
    console.log("0");
  }
  if (n2 > 0) {
    console.log("eyreg");
  } else if (n2 < 0) {
    console.log("sorog");
  } else {
    console.log("0");
  }
  if (n3 > 0) {
    console.log("eyreg");
  } else if (n3 < 0) {
    console.log("sorog");
  } else {
    console.log("0");
  }
});
guravortavBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  if (n1 % 3 == 0 && n1 % 5 == 0) {
    console.log("3 bolon 5d huvaagdna");
  } else if (n1 % 3 == 0) {
    console.log("3d huvaagdana");
  } else if (n1 % 5 == 0) {
    console.log("5d huvaagdana");
  } else {
    console.log("3 5 alind ch huvaagdahgui");
  }
  if (n2 % 3 == 0 && n2 % 5 == 0) {
    console.log("3 bolon 5d huvaagdna");
  } else if (n2 % 3 == 0) {
    console.log("3d huvaagdana");
  } else if (n2 % 5 == 0) {
    console.log("5d huvaagdana");
  } else {
    console.log("3 5 alind ch huvaagdahgui");
  }
  if (n3 % 3 == 0 && n3 % 5 == 0) {
    console.log("3 bolon 5d huvaagdna");
  } else if (n3 % 3 == 0) {
    console.log("3d huvaagdana");
  } else if (n3 % 5 == 0) {
    console.log("5d huvaagdana");
  } else {
    console.log("3 5 alind ch huvaagdahgui");
  }
});
leapyearBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  if ((n1 % 4 == 0 && n1 % 100 !== 0) || n1 % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("No Leap Year");
  }
  if ((n2 % 4 == 0 && n2 % 100 !== 0) || n2 % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("No Leap Year");
  }
  if ((n3 % 4 == 0 && n3 % 100 !== 0) || n3 % 400 == 0) {
    console.log("Leap Year");
  } else {
    console.log("No Leap Year");
  }
});
weekBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  if (n1 == 1) {
    console.log("Davaa-Garag");
  } else if (n1 == 2) {
    console.log("Myagmar-Garag");
  } else if (n1 == 3) {
    console.log("Lhagva-Garag");
  } else if (n1 == 4) {
    console.log("Purev-Garag");
  } else if (n1 == 5) {
    console.log("Baasan-Garag");
  } else if (n1 == 6) {
    console.log("Byamba-Garag");
  } else if (n1 == 7) {
    console.log("Nyam-Garag");
  }
  if (n2 == 1) {
    console.log("Davaa-Garag");
  } else if (n2 == 2) {
    console.log("Myagmar-Garag");
  } else if (n2 == 3) {
    console.log("Lhagva-Garag");
  } else if (n2 == 4) {
    console.log("Purev-Garag");
  } else if (n2 == 5) {
    console.log("Baasan-Garag");
  } else if (n2 == 6) {
    console.log("Byamba-Garag");
  } else if (n2 == 7) {
    console.log("Nyam-Garag");
  }
  if (n3 == 1) {
    console.log("Davaa-Garag");
  } else if (n3 == 2) {
    console.log("Myagmar-Garag");
  } else if (n3 == 3) {
    console.log("Lhagva-Garag");
  } else if (n3 == 4) {
    console.log("Purev-Garag");
  } else if (n3 == 5) {
    console.log("Baasan-Garag");
  } else if (n3 == 6) {
    console.log("Byamba-Garag");
  } else if (n3 == 7) {
    console.log("Nyam-Garag");
  }
});

maximumBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
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
});
