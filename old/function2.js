function sum(a, b) {
  return a + b;
}
let result = sum(10, 30);
console.log(result);

function getTriangle(size) {
  let result = "";
  for (i = 0; i < size; i++) {
    let stars = "";
    for (j = 0; j <= 1; j++) {
      stars += "*";
    }

    result += stars + "\n";
  }
  return result;
}
let result1 = getTriangle(5);
console.log(result);
