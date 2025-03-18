// function addition(nbre1, nbre2) {
//   let result = nbre1 + nbre2;
//   return result;
// }

// console.log(addition(12, 34));

// fonction anonyme
// let direBonjour = function (firstName, lastName) {
//   let result = `Hello ${firstName} ${lastName}`;
//   console.log(result);
// };

// direBonjour("John", "Doe");

function sayHello(firstName, lastName) {
  let result = `Hello ${firstName} ${lastName}`;
  console.log(result);
}

let sayHello2 = (firstName, lastName) => {
  let result = `Hello ${firstName} ${lastName}`;
  console.log(result);
};

let addition = (nbre1, nbre2) => {
  let result = nbre1 + nbre2;
  return result;
};

// console.log(addition(5, 8));

// let numbers = [4, 8, 9, 16, 17];

// const newNumbers = numbers.filter((number) => number > 5);
// const newNumbers2 = numbers.map((number) => number * 2);
// const newNumbers3 = numbers.reduce((a, b) => a + b);
// numbers.push(67);
// numbers.pop();
// numbers.forEach((number) => console.log(number));
// console.log(numbers.includes(16));
// console.log(numbers.join());
// console.log(numbers.slice(0, 3));
