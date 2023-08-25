/*Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array*/
console.log("Answer");

let magicianNames: string[] = [ "Houdini", "Penn & Teller", "Dynamo"];

function show_magicians(magicianNames: string[]) {
    for (let magician of magicianNames) {
        console.log(magician);
    }
}


show_magicians(magicianNames);



export{}