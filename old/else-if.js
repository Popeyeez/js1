let num1 = document.getElementById("num1input");
let num2 = document.getElementById("num2input");
let num3 = document.getElementById("num3input");
let multiplyBtn = document.getElementById("multiply");
let sumBtn = document.getElementById("sum");
let minusBtn = document.getElementById("minus");
let divideBtn = document.getElementById("divide");
let minimumBtn = document.getElementById("minimum");
let maximumBtn = document.getElementById("maximum");
let averageBtn = document.getElementById("average");

multiplyBtn.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) * parseInt(num2.value) * parseInt(num3.value)
  );
});
sumBtn.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value)
  );
});
minusBtn.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) - parseInt(num2.value) - parseInt(num3.value)
  );
});
divideBtn.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) / parseInt(num2.value) / parseInt(num3.value)
  );
});

minimumBtn.addEventListener("click", () => {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  let n3 = parseInt(num3.value);
  if (n1 < n2) {
    if (n3 < n1) {
      console.log(n3);
    } else {
      console.log(n1);
    }
  } else {
    if (n2 < n3) {
      console.log(n2);
    } else {
      console.log(n3);
    }
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
averageBtn.addEventListener("click", () => {
  console.log(
    (parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value)) / 3
  );
});
