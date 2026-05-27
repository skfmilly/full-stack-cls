let para = "Welcome to Our Company";
let words = para.toLocaleLowerCase().split(" ");
console.log(words);
let vowelcount = {};
words.forEach((word)=>{
    let matches = word.match(/[a,e,i,o,u]/g) || [];
    vowelcount[word] = matches.length;
    
});
console.log(vowelcount);

let shopping  = [
    {name:"laptop", category: "electonics"},
    {name: "shirt", category:"clothing" },
    {name: "pant", category:"clothing" },
     {name:"phone", category: "electonics"}
]
let counter ={};
shopping.forEach((items)=>{
    counter[items.category] = (counter[items.category] || 0)+1;
})
console.log(counter);

