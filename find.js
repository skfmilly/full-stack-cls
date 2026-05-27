const students = [
  { name: "Ram", marks: 92 },
  { name: "Sita", marks: 100 },
  { name: "Gita", marks: 100 }
];

const topper = students.find(student => student.marks === 100);

console.log(topper);

const stockPrices = [180, 165, 148, 130, 155];

const priceDrop = stockPrices.find(price => price < 150);

console.log(priceDrop);
