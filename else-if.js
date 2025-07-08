let num1 = document.getElementById("num1input");
let num2 = document.getElementById("num2input");
let num3 = document.getElementById("num3input");

multiply.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) * parseInt(num2.value) * parseInt(num3.value)
  );
});
sum.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value)
  );
});
minus.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) - parseInt(num2.value) - parseInt(num3.value)
  );
});
divide.addEventListener("click", () => {
  console.log(
    parseInt(num1.value) / parseInt(num2.value) / parseInt(num3.value)
  );
});

minimum.addEventListener("click", () => {
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
maximum.addEventListener("click", () => {
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
average.addEventListener("click", () => {
  console.log(
    (parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value)) / 3
  );
});
