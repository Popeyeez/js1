let num1 = document.getElementById("num1input");
let nhurtelhBtn = document.getElementById("nhurtelh");
let nhurtelhtegshBtn = document.getElementById("nhurtelhtegsh");
let sumBtn = document.getElementById("sum");
let oddBtn = document.getElementById("odd");
let multiplyBtn = document.getElementById("multiply");
let countBtn = document.getElementById("count");
let factrialBtn = document.getElementById("factrial");
let ehniiorsuuliinBtn = document.getElementById("ehniiorsuuliin");
let ehniisuuliinniilberBtn = document.getElementById("ehniisuuliinniilber");

nhurtelhBtn.addEventListener("click", () => {
  let n = num1.value;
  let index = 1;

  while (index <= n) {
    console.log(index);
    index = index + 1;
  }
});
nhurtelhtegshBtn.addEventListener("click", () => {
  let n = num1.value;
  let index1 = 0;
  while (index1 <= n) {
    console.log(index1);
    index1 = index1 + 2;
  }
});
sumBtn.addEventListener("click", () => {
  let n = num1.value;
  let index2 = 1;
  let sum = 0;
  while (index2 <= n) {
    sum = sum + index2;
    index2 = index2 + 1;
  }
  console.log("1ees n hurtelh toonii niilber", sum);
});
oddBtn.addEventListener("click", () => {
  let n = num1.value;
  let index3 = 1;
  let odd = 0;
  while (index3 <= n) {
    if (index3 % 2 !== 0) {
      odd += index3;
    }
    index3 = index3 + 1;
  }
  console.log("sondgoi toonii niilber", odd);
});
multiplyBtn.addEventListener("click", () => {
  let n = num1.value;
  let index4 = 1;
  while (index4 <= 9) {
    let multiply = n * index4;
    index4 = index4 + 1;
    console.log("Urjver", multiply);
  }
});
countBtn.addEventListener("click", () => {
  let n = num1.value;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  console.log(count + " orontoi too ");
});
factrialBtn.addEventListener("click", () => {
  let n = num1.value;
  let index5 = 0;
  let factrial = 1;

  while (index5 < n) {
    index5 = index5 + 1;
    factrial = factrial * index5;
  }
  console.log("factrial", factrial);
});
ehniiorsuuliinBtn.addEventListener("click", () => {
  let n = num1.value;
  let lastdigit = n % 10;
  let firstdigit = n;

  while (firstdigit >= 10) {
    firstdigit = Math.floor(firstdigit / 10);
  }
  console.log("ehnii oron", firstdigit);
  console.log("suuliin oron", lastdigit);
});
ehniisuuliinniilberBtn.addEventListener("click", () => {
  let n = num1.value;
  let lastdigit = n % 10;
  let firstdigit = n;

  while (firstdigit >= 10) {
    firstdigit = Math.floor(firstdigit / 10);
  }
  console.log("ehnii oron", firstdigit);
  console.log("suuliin oron", lastdigit);
  console.log("niilber", firstdigit + lastdigit);
});
