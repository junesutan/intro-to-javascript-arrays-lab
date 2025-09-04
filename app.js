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