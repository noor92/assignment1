/*More Guests: You just found a bigger dinner table, so now more space is available. Think of
three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
console.log("Answer")
let guestname : string[] = ["Ayman","Zara","Ayesha"]
let GuestRemove = guestname.splice(0,1,"Noor");
console.log(`${GuestRemove}, can't make it to the dinner`)
guestname.unshift("Fatima");
guestname.splice(2,0,"Hareem");
guestname.push("Arfa");
let message:string = "You are invited to the Big Dinner!";
for(let names of guestname){
    console.log(`Dear ${names}, ${message}`)
}
let invitation:string = "Good news! We found a Big Dinner Table"
console.log(invitation);

export{}