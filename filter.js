const employees = [
  { name: "Vijay", joinYear: 2021, salary: 60000 },
  { name: "Ajith", joinYear: 2019, salary: 75000 },
  { name: "Surya", joinYear: 2022, salary: 45000 },
  { name: "Vikram", joinYear: 2023, salary: 80000 }
];
let result = employees.filter((emp) =>{
    return(emp.joinYear>2020 && emp.salary>5000);
})
console.log(result)

const books = [
  { title: "Book A", categories: ["Fantasy", "Sci-Fi"] },
  { title: "Book B", categories: ["Biography"] },
  { title: "Book C", categories: ["Drama", "Thriller"] }
];

const multiGenreBooks = books.filter(book => book.categories.length > 1);

console.log(multiGenreBooks);