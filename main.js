// 1
// let userNumber = prompt("Enter a number from 1 to -100:");
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber) && userNumber >= -100 && userNumber <= 1) {
//   let oddNumbers = [];

//   for (let i = 1; i <= userNumber; i += 2) {
//     oddNumbers.push(i);
//   }

//   console.log("Odd numbers from 0 to", userNumber, "are:", oddNumbers);
// } else {
//   console.log("Invalid input. Please enter a number from 1 to -100.");
// }


// 2
// let userNumber = prompt("Enter a number between 300 and 500:");
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber) && userNumber >= 300 && userNumber <= 500) {
//   let randomNum = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
//   let multiplesOfTwo = [];

//   for (let i = randomNum; i <= userNumber; i += 2) {
//     multiplesOfTwo.push(i);
//   }

//   console.log("Random number:", randomNum);
//   console.log("Multiples of 2 from", randomNum, "to", userNumber, "are:", multiplesOfTwo);
// } else {
//   console.log("Invalid input. Please enter a number between 300 and 500.");
// }


// 3
// let userNumber = prompt("Enter a number between 70 and 100:");
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber) && userNumber >= 70 && userNumber <= 100) {
//   let sum = 0;

//   for (let i = 0; i <= userNumber; i++) {
//     sum += i;
//   }

//   let mean = sum / (userNumber + 1);

//   console.log("Arithmetic mean of numbers from 0 to", userNumber, "is:", mean);
// } else {
//   console.log("Invalid input. Please enter a number between 70 and 100.");
// }


// 4
// let multiplesOfFive = [];

// for (let i = 0; i <= 1600; i += 5) {
//   if (i % 10 !== 0) {
//     multiplesOfFive.push(i);
//   }
// }

// console.log("Multiples of 5 from 0 to 1600 not divisible by 10 are:", multiplesOfFive);


// 5
// let userNumber = prompt("Enter a number between 50 and 100:");
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber) && userNumber >= 50 && userNumber <= 100) {
//   let factorial = 1;

//   for (let i = 2; i <= userNumber; i++) {
//     factorial *= i;
//   }

//   console.log("Factorial of", userNumber, "is:", factorial);
// } else {
//   console.log("Invalid input. Please enter a number between 50 and 100.");
// }


// 6
// let userNumber = prompt("Enter a number between 100 and 200:");
// userNumber = parseInt(userNumber);

// if (!isNaN(userNumber) && userNumber >= 100 && userNumber <= 200) {
//   let divisors = [];

//   for (let i = 0; i <= userNumber; i++) {
//     if (userNumber % i === 0) {
//       divisors.push(i);
//     }
//   }

//   console.log("Numbers from 0 to", userNumber, "that divide", userNumber, "without remainder are:", divisors);
// } else {
//   console.log("Invalid input. Please enter a number between 100 and 200.");
// }


// 7
// let userInput = prompt("Enter a number:");

// let number = parseInt(userInput);

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// if (isPrime(number)) {
//   console.log(number + " is a prime number.");
// } else {
//   console.log(number + " is a composite number.");
// }


// 8
// let userInput = prompt("Enter a number:");

// let number = parseInt(userInput);

// function calculateProduct(n) {
//   let product = 1;
//   for (let i = 1; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }

// let result = calculateProduct(number);
// console.log("The product of all numbers from 1 to " + number + " is: " + result);


// 9
// let userInput = prompt("Enter a number between 1 and 10:");

// let number = parseInt(userInput);

// if (number >= 1 && number <= 10) {
//   console.log("Multiplication table for " + number + ":");
//   for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(number + " * " + i + " = " + result);
//   }
// } else {
//   console.log("Please enter a number between 1 and 10.");
// }
