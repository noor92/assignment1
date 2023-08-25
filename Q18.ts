/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original
list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its 
order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.*/
console.log("Answer")
let placesToVisit: string[] = ["Makkah", "Madina", "Dubai", "Istanbul", "UK"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetic Order:", placesToVisit.slice().sort());
console.log("Original Order (still):", placesToVisit);
console.log("Reverse Alphabetic Order:",placesToVisit.slice().sort().reverse());
console.log("Original Order (still):", placesToVisit);
console.log("Reversed Order:",placesToVisit.reverse());
console.log("Back to original order:",placesToVisit.reverse());
console.log("Alphabetical Order changed;",placesToVisit.sort());
console.log("Reverse Alphabetic Order (Changed):",placesToVisit.sort().reverse());

export{}