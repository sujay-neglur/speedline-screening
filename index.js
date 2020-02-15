const first = require("./first");
const second = require("./secondFixed");
const random = require("@helvetia/random-names");

const orders = [
    {email:"sujay@gmail.com", toppings:["beef", "chicken", "tomatoes"]},
    {email:"", toppings:["chicken", "oregano"]},
    {email:"", toppings:["chicken", "parmesan", "tomatoes"]},
    {email:"jane@gmail.com", toppings:[]},
    {email:"john@gmail.com", toppings:["beef"]},
    {email:"", toppings:["chilly", "oregano", "tomatoes"]},
    {email:"andrew@gmail.com", toppings:["chilly", "oregano", "tomatoes"]},
    {email:"", toppings:["beef", "garlic", "hummus"]}
]

second(orders);

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// const emails = random.list(20).map(name => name + "@gmail.com");
// const toppings = random.list(300);

// const generateToppings = [];

// while (generateToppings.length < Math.pow(10, 1)) {
//   const current = new Set();
//   while (current.size < 3) {
//     const currentTopping = toppings[randomNumber(0, toppings.length)];
//     current.add(currentTopping);
//   }
//   const currentArray = Array.from(current).sort((a, b) => a.localeCompare(b));
//   generateToppings.push(currentArray);Math.pow(10, 6)
// }

// // console.log(generateToppings);

// const toppingCount = new Map();

// generateToppings.forEach(topping => {
//   const key = topping.toString();
//   if (toppingCount.get(key)) {
//     const value = toppingCount.get(key);
//     toppingCount.set(key, value + 1);
//   } else {
//     toppingCount.set(key, 1);
//   }
// });
// const uniqueComb = [];
// toppingCount.forEach((v, k) => {
//   if (v === 1) uniqueComb.push(k);
// });
// uniqueComb.sort((a, b) => a.localeCompare(b));
// console.log("Unique",uniqueComb);
// console.log("Topping", generateToppings);
// const orders = [];
// for (let i = 0; i < generateToppings.length; i++) {
//   orders.push({
//     email: emails[randomNumber(0, emails.length)],
//     toppings: generateToppings[i]
//   });
// }
// orders.push({email:"sujay@gmail.com", toppings:["zzzzz","zzzzzy","zzzzzz"]})
// console.log("Orders", orders);
// const firstResult = first(orders);
// firstResult.sort((a,b) => a.localeCompare(b));
// console.log(firstResult)
