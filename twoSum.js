let elements = [2, 7, 10, 56, 1, 8, 5, 4];

const findNine = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};

const nine = findNine(elements, 9);
console.log(nine);
