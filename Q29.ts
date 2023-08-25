/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like
bananas! */
console.log("Answer");
let favorite_fruits : string[] = ['Orange','Mango','Apple'];

if(favorite_fruits.includes("Apple")) {
    console.log("You really like Apples!");
  }
if(favorite_fruits.includes("Bananas")){
    console.log("You really like Bananas!")
}
if(favorite_fruits.includes("Orange")){
    console.log("You really like Oranges!")
}
if(favorite_fruits.includes("Mango")){
    console.log("You really like Mangoes!")
}
if(favorite_fruits.includes("Grape")){
    console.log("You really like Grapes!")
}





export{}