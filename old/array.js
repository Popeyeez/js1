let grades = [90, 70, 30, 100, 1];

function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

let pSum = findSum(grades);
console.log("Eyreg dungiin niilber", pSum);

function findMax(arr) {
  let max = arr[2];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let maxResult = findMax(grades);
console.log("Max grades", maxResult);

function Tsum(arr) {
  Tsum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      Tsum = Tsum + arr[i];
    }
  }
  return Tsum;
}

let FindTSum = Tsum(grades);
console.log("Tegsh too", FindTSum);
