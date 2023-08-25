/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call
provides, and it should print a summary of the sandwich that is being ordered. Call the
function three times, using a different number of arguments each time. */
console.log("Answer");
// function makeSandwich(...items: string[]): void {
//     console.log("Sandwich Order Summary:");
//     if (items.length === 0) {
//       console.log("You ordered an empty sandwich. Are you sure?");
//     } else {
//       console.log(`You ordered a sandwich with: ${items.join(', ')}`);
//     }
//     console.log("---------------------------");
//   }
  
//   makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
//   makeSandwich("Ham", "Swiss Cheese", "Mustard");
//   makeSandwich("Peanut Butter", "Jelly");
//   makeSandwich();



function sandwich_summary (...items: string[]){
  console.log("A sandwich ordered with items: ");
  items.map((item: string) => console.log(item));
};
let items1: string[] = ["pepperoni", "cheese", "onions", "ham"];
sandwich_summary(...items1);
let items2 = ["mayo", "garlic", "cheese", "onions", "chicken", "onion"];
sandwich_summary(...items2);




export{}