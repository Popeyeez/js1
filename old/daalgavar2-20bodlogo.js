let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let availableCars = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return availableCars;
}
let result1 = getAvailableCars(cars);
console.log("(isAvailable === true) ", result1);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let recentCars = cars.filter((car) => {
    return car.year > 2018;
  });
  return recentCars;
}
let result2 = getRecentCars(cars);
console.log("2018 оноос хойш", result2);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars, price) {
  let expensiveCars = cars.filter((car) => {
    return car.price > price;
  });
  return expensiveCars;
}
let result3 = getExpensiveCars(cars, 5000000);
console.log("Expensive cars ", result3);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars, type) {
  let sedans = cars.filter((car) => {
    return car.type == type;
  });
  return sedans;
}
let result4 = getSedans(cars, "Sedan");
console.log("Sedan төрөлтэй", result4);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brand) {
  let filterBrand = cars.filter((car) => {
    return car.brand == brand;
  });
  return filterBrand;
}
let result5 = filterByBrand(cars, "Hyundai");
console.log("Брэндээр шүүж буцаадаг", result5);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars, mileage) {
  let highMileage = cars.filter((car) => {
    return car.mileage > mileage;
  });
  return highMileage;
}
let result6 = getHighMileageCars(cars, 100000);
console.log("100,000 км-ээс их явсан", result6);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  let addEfficiency = cars.map((car) => {
    if (car.fuelEfficiency < 5) {
      car.efficiency = true;
    } else {
      car.efficiency = false;
    }
  });
  return cars;
}
let result7 = addEfficiencyFlag(cars);
console.log("`efficient: true/false`", result7);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let increasePrice = cars.map((car) => {
    return (car.price = car.price * 1.15);
  });
  return cars;
}
let result8 = increaseCarPrices(cars);
console.log("машины үнийг 15% нэмдэг", result8);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars, mileage) {
  let lowMileageCars = cars.filter((car) => {
    return car.mileage < mileage;
  });
  return lowMileageCars;
}
let result9 = getLowMileageCars(cars, 50000);
console.log("50,000 км-ээс бага явсан", result9);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let mostEfficientCar = cars.sort((car2, car1) => {
    return car2.fuelEfficiency - car1.fuelEfficiency;
  });
  return mostEfficientCar[0];
}
let result10 = getMostEfficientCar(cars);
console.log("Хамгийн бага түлш зарцуулалттай", result10);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let mostExpensiveCar = cars.sort((car2, car1) => {
    return car1.price - car2.price;
  });
  return mostExpensiveCar[0];
}
let result11 = getMostExpensiveCar(cars);
console.log("Хамгийн өндөр үнэтэй машин", result11);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalMileage = 0;
  cars.map((car) => {
    return (totalMileage = totalMileage + car.mileage);
  });
  return totalMileage;
}
let result12 = getTotalMileage(cars);
console.log("нийлбэр mileage-г буцаадаг", result12);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filterBySupplier = cars.filter((car) => {
    return car.supplier == supplierName;
  });
  return filterBySupplier;
}
let result13 = filterBySupplier(cars, "E-Car Dealer");
console.log("нэрээр шүүж буцаадаг", result13);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let carModels = cars.map((car) => {
    return car.model;
  });
  return carModels;
}
let result14 = getCarModels(cars);
console.log("Машины model нэрсийг массив", result14);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let sortByPrice = cars.sort((car2, car1) => {
    return car1.price - car2.price;
  });
  return sortByPrice;
}
let result15 = sortByPriceAscending(cars);
console.log("үнийн өсөхөөр эрэмбэлж", result15);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let engineSize = cars.filter((car) => {
    return car.engineSize > 2;
  });
  return engineSize;
}
let result16 = getLargeEngineCars(cars);
console.log("Engine size нь 2.0-аас их", result16);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let modelAndYear = cars.map((car) => {
    return car.model + " " + car.year;
  });
  return modelAndYear;
}
let result18 = getModelAndYearList(cars);
console.log("Model And Year", result18);

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  let tagSuper = cars.map((car) => {
    if (car.fuelEfficiency < 4) {
      car.fuelEfficiency = car.fuelEfficiency + "super efficient";
    } else {
      car.fuelEfficiency = car.fuelEfficiency;
    }
  });
  return cars;
}
let result19 = tagSuperEfficientCars(cars);
console.log("4.0 бага ", result19);

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  cars.map((car, index) => {
    return (car.id = index + 1);
  });
  return cars;
}
let result20 = addIdToCars(cars, 0);
console.log("Add Id", result20);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let uniqueBrand = cars.map((car) => {
    return car.brand;
  });
  return uniqueBrand;
}
let result17 = getUniqueBrands(cars);
console.log("Brands", result17);
