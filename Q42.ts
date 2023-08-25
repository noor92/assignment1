/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
make_great() that modifies the array of magicians by adding the phrase the Great to each
magician’s name. Call show_magicians() to see that the list has actually been modified */

console.log("Answer");
let magicians: string[] = [ "Houdini", "Penn & Teller", "Dynamo"];

let magicianNames: string[] = [ "Houdini", "Penn & Teller", "Dynamo"];

function show_magicians(magicianNames: string[]) {
    for (let magician of magicianNames) {
        console.log(magician);
    }
}
function make_great(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

make_great(magicianNames);
show_magicians(magicianNames);
export{}