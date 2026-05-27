// let transaction = [100,300,200,500];
// let result = transaction.map((valuee)=>{
//     let gst = valuee*0.18;
//     return{
//         originalAmount : valuee,
//         gst : gst,
//         totalAmount : valuee+gst

//     }
// })
// console.log(result)
let sentence = ["All the best",
    "welcome to our clss"
]
let long = sentence.map((word)=>{
    let longest=word.split(' ');
    return Math.max(...longest.map((longest=>longest.length)))

} )
console.log(long)
