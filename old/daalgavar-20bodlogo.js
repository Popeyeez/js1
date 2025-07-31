let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  let discountedProducts = products.filter((product) => {
    return product.isDiscounted === true;
  });
  return discountedProducts;
}

let resultBodlogo1 = getDiscountedProducts(data);
console.log("Хямдралтай бүтээгдэхүүнүүд ", ...resultBodlogo1);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.

function getOutOfStockProducts(products) {
  let outOfStocks = products.filter((product) => {
    return product.stock === 0;
  });
  return outOfStocks;
}
let resultBodlogo2 = getOutOfStockProducts(data);
console.log("Нөөц дууссан ", ...resultBodlogo2);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.

function getExpensiveProducts(products, target) {
  let expensiveProducts = products.filter((product) => {
    return product.price > target;
  });
  return expensiveProducts;
}
let resultBodlogo3 = getExpensiveProducts(data, 1000000);
console.log("1 сая төгрөгөөс дээш бүтээгдэхүүнүүд", ...resultBodlogo3);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.

function getComputers(products) {
  let computers = products.filter((product) => {
    return product.category == "Computers";
  });
  return computers;
}
let resultBodlogo4 = getComputers(data);
console.log("Computers категорийн бүтээгдэхүүнүүд", ...resultBodlogo4);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.

function filterByBrand(products, brandName) {
  let findByBrand = products.filter((product) => {
    return product.brand == brandName;
  });
  return findByBrand;
}
let resultBodlogo5 = filterByBrand(data, "Apple");
console.log(
  "Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц",
  ...resultBodlogo5
);

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).

function addIsHeavyFlag(products) {
  products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else {
      product.isHeavy = false;
    }
  });
  return products;
}

let resultBodlogo6 = addIsHeavyFlag(data);
console.log("`isHeavy: true/false`", ...resultBodlogo6);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.

function increasePriceByTenPercent(products) {
  products.map((product) => {
    return (product.price = product.price * 1.1);
  });
  return products;
}
const resultBodlogo7 = increasePriceByTenPercent(data);
console.log("Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.", ...resultBodlogo7);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.

function addFinalPrice(products) {
  products.map((product) => {
    return (product.finalPrice =
      (product.price * (100 - product.discountPercent)) / 100);
  });
  return products;
}
const resultBodlogo8 = addFinalPrice(data);
console.log("`finalPrice`", ...resultBodlogo8);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let topRated = products.sort((product2, product1) => {
    return product1.rating - product2.rating;
  });
  return topRated[0];
}
let resultBodlogo9 = getTopRatedProduct(data);
console.log("Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг", resultBodlogo9);

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let cheapest = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return cheapest[0];
}
let resultBodlogo10 = getCheapestProduct(data);
console.log("Үнэ хамгийн бага бүтээгдэхүүн", resultBodlogo10);

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let totalStock = 0;
  products.map((product) => {
    totalStock = totalStock + product.stock;
  });
  return totalStock;
}
let resultBodlogo11 = getTotalStock(data);
console.log("Бүх бүтээгдэхүүний нийт нөөц (stock)", resultBodlogo11);

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.

function getTotalPrice(products) {
  let totalPrice = 0;
  products.map((product) => {
    totalPrice = totalPrice + product.price;
  });
  return totalPrice;
}
let resultBodlogo12 = getTotalPrice(data);
console.log("Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог", resultBodlogo12);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.

function filterBySupplier(products, supplierName) {
  let filterSupply = products.filter((product) => {
    return product.supplier == supplierName;
  });
  return filterSupply;
}
let resultBodlogo13 = filterBySupplier(data, "PCMall");
console.log("supplier-аар шүүж", resultBodlogo13);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.

function getProductNames(products) {
  let productNames = products.map((product) => {
    return product.name;
  });
  return productNames;
}
let resultBodlogo14 = getProductNames(data);
console.log(
  "Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.",
  resultBodlogo14
);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.

function sortByPriceAscending(products) {
  let sortByAscending = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return sortByAscending;
}
let resultBodlogo15 = sortByPriceAscending(data);
console.log(
  "Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич",
  resultBodlogo15
);

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.

function getLowStockProducts(products, target) {
  let filterLowStock = products.filter((product) => {
    return product.stock <= target;
  });
  return filterLowStock;
}
let resultBodlogo16 = getLowStockProducts(data, 5);
console.log("Нөөц багатай (≤ 5)", resultBodlogo16);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.

function getNameAndPriceList(products) {
  let productNameAndPrice = products.map((product) => {
    return product.name + " , price  " + product.price;
  });
  return productNameAndPrice;
}
let resultBodlogo18 = getNameAndPriceList(data);
console.log("Зөвхөн name ба price", resultBodlogo18);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.

function getHighlyRatedProducts(products, target) {
  let highlyRated = products.filter((product) => {
    return product.rating > target;
  });
  return highlyRated;
}

let resultBodlogo19 = getHighlyRatedProducts(data, 4.5);
console.log("Үнэлгээ нь 4.5-аас их", resultBodlogo19);

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).

function addIdToProducts(products) {
  products.map((product, index) => {
    return (product.id = index + 1);
  });
  return products;
}
let resultBodlogo20 = addIdToProducts(data, 0);
console.log("бүтээгдэхүүнд `id` талбар нэм", resultBodlogo20);

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let arrSuppliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSuppliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });
  return uniqueSuppliers;
}
const resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("Array Of Unique Suppliers", resultUniqueSuppliers);
