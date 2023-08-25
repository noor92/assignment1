/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each
person’s name, print a message to them. The text of each message should be the same, but each
message should be personalized with the person’s name.*/

console.log("Answer")
let guestname : string[] = ["Ayman","Zara","Ayesha","Eman"]
let message : string = "You are personally invited in my home"

for(let names of guestname){
    console.log(`${names}, ${message}`)
}


export{}