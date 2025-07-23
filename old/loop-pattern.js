console.log(result2);
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let plusBtn = document.getElementById("plusBtn");

plusBtn.addEventListener("click", () => {
  let number1 = num1.value;
  let number2 = num2.value;
  let numberNumber1 = parseInt(number1);
  let numberNumber2 = parseInt(number2);
  document.getElementById("answer").innerText = numberNumber1 + numberNumber2;
});

let too = 100;

while (too > 0) {
  if (too % 2 === 0) {
    console.log(too);
  }
  too = too - 1;
}

// star pattern 1
// *****
// *****
// *****
// *****
// *****

let mor = 5;

while (mor > 0) {
  let bagna = 5;
  let sp1Result = "";
  while (bagna > 0) {
    sp1Result = sp1Result + "*";
    bagna = bagna - 1;
  }
  console.log(sp1Result);
  mor = mor - 1;
}
/** Star Pattern 2
 *****
 *   *
 *   *
 *   *
 *****
 */
let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let result = "";
  while (column > 0) {
    if (
      row == 1 ||
      row == size ||
      column == 1 ||
      column == size ||
      row - 1 == size - column
    ) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}
//  12345
//1 *****
//2 *  ** //2-4
//3 * * * //3-3
//4 **  * //4-2
//5 *****
//

// *****
// ****
// ***
// **
// *

let size11 = 5;
let row11 = size11;
while (row11 > 0) {
  let result = "";
  let column = row11;
  while (column > 0) {
    result = result + "*";
    column = column - 1;
  }
  console.log(result);
  row11 = row11 - 1;
}

// *****
// ****
// ***
// **
// *

let n = 5;
let row1 = 1;
while (row1 <= n) {
  let result = "";
  let column = 1;
  while (column <= n - row1) {
    result = result + " ";
    column++;
  }
  let star = row1;
  while (star > 0) {
    result = result + "*";
    star--;
  }
  row1++;
  console.log(result);
}

// ----*
// ---**
// --***
// -****
// *****
