//EXERCISE 1

const foods = [];  

console.log('Exercise 1 result:', foods);


//EXERCISE 2

foods.push("pizza")
foods.push("cheeseburger")

console.log('Exercise 2 result:', foods);


//EXERCISE 3

foods.unshift("taco")

console.log('Exercise 3 result:', foods);

//EXERCISE 4

const favFood = foods[1]

console.log('Exercise 4 result:', favFood);


//EXERCISE 5

//note: insert "tofu" between "pizza" and "cheeseburger"

foods.splice(2,0,"tofu")

console.log('Exercise 5 result:', foods);



//EXERCISE 6 -- replace 
foods.splice(1,1,"sushi","cupcake")
console.log('Exercise 6 result:', foods);

//EXERCISE 7 -- slice() to copy a part of an array (or string).
const yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy);

//EXERCISE 8 -- indexOf() to search 
const soyIdx = foods.indexOf("tofu")
console.log('Exercise 8 result:', soyIdx);

//EXERCISE 9 -- join()
const allFoods = foods.join(" -> ");
console.log('Exercise 9 result:', allFoods);

//EXERCISE 10 -- includes()
const hasSoup = foods.includes("soup")
console.log('Exercise 10 result:', hasSoup);


//EXERCISE 11 -- for loop 

const odds = []

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

for (const num of nums) {
  if (num % 2 !== 0) {              // I copied this 
    odds.push(num);                 // I copied this 
  }
}

console.log('Exercise 11 result:', odds);


//EXERCISE 12 -- fizzbuzz 

const fizz = []
const buzz = []
const fizzbuzz = []

for (const num of nums) {
  if (num % 3 === 0) {              // I copied this 
    fizz.push(num);                 // I copied this 
  }
  if (num % 5 === 0) {              // I copied this 
    buzz.push(num);  
  }
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


//EXERCISE 13 -- two-dimensional arrays 

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length-1]

console.log(numList)

//EXERCISE 14 Accessing within nested arrays
const num = numArrays[2][1]
console.log('Exercise 14 result:', num);


//EXERCISE 15 

let total = 0;

numArrays.forEach(arr => {
    arr.forEach(num => { // I copied this bc it was concatenating my numbers as strings without it 
        total += num;
    });
});

console.log('Exercise 15 result:\n', total);