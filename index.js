// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//     A. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
//     B.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//     C.  Use a loop to iterate through the array and calculate the average age.

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 18];
let firstElement = ages[0];
let lastElement = ages[ages.length - 1];
let result =  (firstElement - lastElement);
console.log(result);

let sum = 0

for (let number of ages) {
    sum += number;
}
let averageAge = sum / ages.length;

console.log(averageAge);

// I started with my variables and then I created a result function and logged the last age from the first age. I then created a for loop to get the average of all those ages.



// 2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//     A. Use a loop to iterate through the array and calculate the average number of letters per name.
//     B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// let names = ("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob");





// 3. How do you access the last element of any array?

arrayName[length - 1]
console.log(arrayName);



// 4. How do you access the first element of any array?

arrayName[0]
console.log(arrayName);



// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let length = name.length;
}



// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.



// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').



// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
let firstName = "Hunter";
let lastName = "Baker";

console.log(`${firstName} ${lastName}`);
// I created my variables and then used template literals to put log my full name.



// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let myNumbers = [23, 14, 10, 60, 12]
let sum = 0;
for (let i =0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
}  
console.log(sum);

if (sum > 100) {
    console.log(true);
} else if (sum < 100) {
    console.log(false);
}
//  NOTES: I started with my variables and and then created my main function using a for loop and consoled the sum. After I created an if statement to get a boolean answer. 



// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
array = [1, 2, 3, 4, 5];
let sum = 0;

for (let number of array) {
    sum += number;
}
let average = sum / array.length;

console.log(average);
// First I made my array and then set the sum variable to 0. i used a for loop to create the function and created a new variable "average" which took the sum 
// of the array and divided it by the length of the array and logged it.




// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let sum = 0;
let sum2 = 0

for (let numbers of array1) {
    sum += numbers;
}
let average = sum / array1.length;
console.log(average);

for (let numbers of array2) {
    sum2 += numbers;
}
let average2 = sum2 / array2.length;
console.log(average2);

if (average > average2) {
    console.log(true);
} else if (average < average2) {
    console.log(false);
}
// I started with making my variables and then my average funtions for each array. Then i used an if statement to log if the first one was greater 
// than the second one.



// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true;
let moneyInPocket = 11.23;

let willBuyDrink = (isHotOutside = true) && (moneyInPocket >= 10.50);

console.log(willBuyDrink);

// I created my variables and then made a function in the willBuyDrink varible then logged it



// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
function findingSum(num1 , num2){
    return num1 + num2;
}

console.log(findingSum(13, 6));
console.log(findingSum(23, 82));

// This function is an addition problem  and I created it because I have been trying to practice the basics of JavaScript.