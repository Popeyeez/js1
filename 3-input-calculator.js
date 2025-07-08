let num1 = document.getElementById("num1-input");
let num2 = document.getElementById("num2-input");
let num3 = document.getElementById("num3-input");

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
