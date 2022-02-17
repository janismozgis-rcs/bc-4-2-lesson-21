const numbers = [1,2,3,4,5,6,7,8,9];

// const squaredNumber = [];

// for (const number of numbers) {
//     squaredNumber.push(number * number);
// }


// const squaredNumbers = numbers.map((number) => {
//     return number * number;
// })

const squaredNumbers = numbers
                        .filter((number) => number % 2 == 0) 
                        .map((number) => number * number)