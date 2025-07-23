let current = 1;
let end = 100;

while (end >= current) {
  if (current % 2 == 0) {
    console.log(current);
  }
  current++;
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//*****
// *****
//  *****
//   *****
//    *****

let size = 5;

for (let i = 0; i < size; i++) {
  let star = "";
  for (j = 0; j < i; j++) {
    star += " ";
  }
  for (let j = 0; j < size; j++) {
    star += "*";
  }
  console.log(star);
}
// *****
//  *   *
//   *   *
//    *   *
//     *****
for (let i = 0; i < size; i++) {
  let star = "";
  for (j = 0; j < i; j++) {
    star += " ";
  }
  for (let j = 0; j < size; j++) {
    if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

//*****
//****
//***
//**
//*

for (let i = 0; i < size; i++) {
  let star = "";
  for (j = 0; j < size - i; j++) {
    star += "*";
  }
  console.log(star);
}

//*   *
// * *
//  *
// * *
//*   *

for (let i = 0; i < size; i++) {
  let star = "";

  for (j = 0; j < size; j++) {
    if (i == j || size - i - 1 == j) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

//  *
//  *
//*****
//  *
//  *

let size = 5;
for (let i = 0; i < size; i++) {
  let star = "";
  let center = Math.floor(size / 2);
  for (j = 0; j < size; j++) {
    if (i === center || j === center) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}
