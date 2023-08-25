/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False
result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than
or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

console.log("Answer");

let fruit = 'apple';
console.log("Is fruit equal to 'apple'? I predict True.", fruit === 'apple');
console.log("Is fruit not equal to 'banana'? I predict True.", fruit !== 'banana');
console.log()
let name = 'John';
console.log("Is name in lowercase 'john'? I predict True.", name.toLowerCase() === 'john');
console.log("Is name in lowercase 'jane'? I predict False.", name.toLowerCase() === 'jane');
console.log()
let age = 25;
console.log("Is age equal to 25? I predict True.", age === 25);
console.log("Is age not equal to 30? I predict True.", age !== 30);
console.log("Is age greater than 18? I predict True.", age > 18);
console.log("Is age less than 30? I predict True.", age < 30);
console.log("Is age greater than or equal to 20? I predict True.", age >= 20);
console.log("Is age less than or equal to 30? I predict True.", age <= 30);
console.log()
let isStudent = true;
let isEmployee = false;
console.log("Is the person a student and not an employee? I predict True.", isStudent && !isEmployee);
console.log("Is the person either a student or an employee? I predict True.", isStudent || isEmployee);
console.log()
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the array? I predict True.", fruits.includes('banana'));
console.log("Is 'grape' not in the array? I predict True.", !fruits.includes('grape'));

export{}