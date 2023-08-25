/*Conditional Tests: Write a series of conditional tests. Print a statement describing each
test and your prediction for the results of each test. Your code should look something like
this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True
or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate
to False. */

console.log("Answer");
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car == 'toyota'? I predict False.");
console.log(car !== 'toyota');

console.log("Is car === 'subara'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car == 'KIA'I predict False.");
console.log(car == 'KIA');

console.log("Is car.startsWith('aru') I predict False.");
console.log(car.startsWith('aru'));

console.log("Is car.length === 6? I predict True.");
console.log(car.length === 6);

console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));

console.log("Is car.endsWith('aru')? I predict True.");
console.log(car.endsWith('aru'));

export{}