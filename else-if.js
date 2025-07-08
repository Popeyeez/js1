let num1 = document.getElementById("num1input");
let num2 = document.getElementById("num2input");
let num3 = document.getElementById("num3input");
const baga = document.getElementById("baga");

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

baga.addEventListener("click", () => {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let num3 = parseInt(num3input.value);
  if (num1 < num2) {
    if (num3 < num1) {
      console.log(num3);
    } else {
      console.log(num1);
    }
  } else {
    if (num2 < num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }
});
