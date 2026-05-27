let company = {
    companyDetails:{
        name:"milly",
        location:"kamuthi",
        block:"south"
    },
    owner:{
name : "vicky",
age:26,
contact:{
    phone:345678998,
    email:"vicky@gmail.com",
    website: "www.milly.com"
},
address:{
    address1:"kamuthii,kottaimedu",
    address2:"muthukulathur,ramanad",
    address3:["chennai","madurai","salem"]
}
    },
    manager:{
 name : "santhsoh",
age:28,
contact:{
    phone:3567897658,
    email:"santhsoh@gmail.com",
    website: "www.santhosh.com"
    },
    address:{
    address1:"kamuthii,kottaimedu",
    address2:"muthukulathur,ramanad"
}
}, 
employee:[
    {
    name:"kutty",
    age:30,
    qualification:"B.E",
    phone:909345677
},
{
    name:"elango",
    age:30,
    qualification:"B.E",
    phone:909345677
},{
    name:"kutty",
    age:30,
    qualification:"B.E",
    phone:909345677
}
]
}
company.employee.forEach(({name,age,qualification,phone})=>{
    console.log(`Employee 1: Employee_name ${name},Employee_age ${age} ,
        Employee_qualification ${qualification}
        Employee_phone ${phone}`)
})

let {
    name: owner_name,
    age : owner_age,
    contact:{
        phone:owner_phone,
        email:owner_email,
        website:owner_website
    },
    address:{
        address1:owner_address1,
        address2:owner_address2,
        address3:[city1,city2,city]
    }
} = company.owner;
console.log(`owner name is ${owner_name}`)


