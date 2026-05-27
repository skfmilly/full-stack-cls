const mailingList = ["user1@gmail.com", "user2@gmail.com", "user3@microsoft.com"];
const result = mailingList.every((mail)=>{
    return mail.includes("@gmail.com");
})
console.log(result);
const orders = [
  { orderId: 101, status: "delivered" },
  { orderId: 102, status: "delivered" },
  { orderId: 103, status: "delivered" }
];
const allDelivered = orders.every(order => order.status === "delivered");
console.log(allDelivered);