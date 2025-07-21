let num1 = document.getElementById("num1input");
let num2 = document.getElementById("num2input");
let num3 = document.getElementById("num3input");
let num4 = document.getElementById("num4input");
let num5 = document.getElementById("num5input");
let num6 = document.getElementById("num6input");
let num7 = document.getElementById("num7input");

let maximumBtn = document.getElementById("maximum");
let eyregsorogBtn = document.getElementById("eyreg-sorog");
let guravortavBtn = document.getElementById("3or5");
let leapyearBtn = document.getElementById("leapyear");
let weekBtn = document.getElementById("week");
let resultBtn = document.getElementById("result");

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
  document.getElementById("answer2").innerText = "";
  document.getElementById("answer3").innerText = "";
  document.getElementById("answer4").innerText = "";

  if (n1 == 1) {
    console.log("Davaa-Garag");
    document.getElementById("answer2").innerText += "Davaa";
  } else if (n1 == 2) {
    console.log("Myagmar-Garag");
    document.getElementById("answer2").innerText += "Myagmar";
  } else if (n1 == 3) {
    console.log("Lhagva-Garag");
    document.getElementById("answer2").innerText += "Lhagva";
  } else if (n1 == 4) {
    console.log("Purev-Garag");
    document.getElementById("answer2").innerText += "Purev";
  } else if (n1 == 5) {
    console.log("Baasan-Garag");
    document.getElementById("answer2").innerText += "Baasan";
  } else if (n1 == 6) {
    console.log("Byamba-Garag");
    document.getElementById("answer2").innerText += "Byamba";
  } else if (n1 == 7) {
    console.log("Nyam-Garag");
    document.getElementById("answer2").innerText += "Nyam";
  }
  if (n2 == 1) {
    console.log("Davaa-Garag");
    document.getElementById("answer3").innerText += "Davaa";
  } else if (n2 == 2) {
    console.log("Myagmar-Garag");
    document.getElementById("answer3").innerText += "Myagmar";
  } else if (n2 == 3) {
    console.log("Lhagva-Garag");
    document.getElementById("answer3").innerText += "Lhagva";
  } else if (n2 == 4) {
    console.log("Purev-Garag");
    document.getElementById("answer3").innerText += "Purev";
  } else if (n2 == 5) {
    console.log("Baasan-Garag");
    document.getElementById("answer3").innerText += "Baasan";
  } else if (n2 == 6) {
    console.log("Byamba-Garag");
    document.getElementById("answer3").innerText += "Byamba";
  } else if (n2 == 7) {
    console.log("Nyam-Garag");
    document.getElementById("answer3").innerText += "Nyam";
  }
  if (n3 == 1) {
    console.log("Davaa-Garag");
    document.getElementById("answer4").innerText += "Davaa";
  } else if (n3 == 2) {
    console.log("Myagmar-Garag");
    document.getElementById("answer4").innerText += "Myagmar";
  } else if (n3 == 3) {
    console.log("Lhagva-Garag");
    document.getElementById("answer4").innerText += "Lhagva";
  } else if (n3 == 4) {
    console.log("Purev-Garag");
    document.getElementById("answer4").innerText += "Purev";
  } else if (n3 == 5) {
    console.log("Baasan-Garag");
    document.getElementById("answer4").innerText += "Baasan";
  } else if (n3 == 6) {
    console.log("Byamba-Garag");
    document.getElementById("answer4").innerText += "Byamba";
  } else if (n3 == 7) {
    console.log("Nyam-Garag");
    document.getElementById("answer4").innerText += "Nyam";
  }
});

maximumBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  document.getElementById("answer2").innerText = "";

  if (n1 > n2) {
    if (n3 > n1) {
      console.log(n3);
      document.getElementById("answer4").innerText += n3;
    } else {
      console.log(n1);
      document.getElementById("answer2").innerText += n1;
    }
  } else {
    if (n2 > n3) {
      console.log(n2);
      document.getElementById("answer3").innerText += n2;
    } else {
      console.log(n3);
      document.getElementById("answer4").innerText += n3;
    }
  }
});
resultBtn.addEventListener("click", () => {
  let n4 = parseInt(num4.value);
  let n5 = parseInt(num5.value);
  let n6 = parseInt(num6.value);
  let n7 = parseInt(num7.value);
  document.getElementById("answer").innerText = "";
  document.getElementById("answer1").innerText = "";

  let zardal = n4 * n5;
  let ashig = n6 * n7;
  let resultzardal = n4 * n5 - n6 * n7;
  let resultashig = n6 * n7 - n5 * n4;
  if (zardal > ashig) {
    console.log("aldagdal " + resultzardal);
    document.getElementById("answer").innerText += "aldagdal " + resultzardal;
  } else {
    console.log("ashig " + resultashig);
    document.getElementById("answer1").innerText += "ashig " + resultashig;
  }
});
