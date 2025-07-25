let animals = [
  {
    leg: 4,
    name: "dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 10,
  },
  {
    leg: 4,
    name: "cat",
    height: 123,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 145,
  },
];
// [
//   { name: 'dog', height: 10 },
//   { name: 'cat', height: 10 }
// ]
const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg === 4) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};

const filteredAnimals = find4LeggedAnimals(animals);
console.log(filteredAnimals);
