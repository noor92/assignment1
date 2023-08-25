/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each 
magician’s name. */
console.log("Answer");

let magicians: string[] = ["Merlin", "Gandalf", "Houdini"];
function make_Great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];

  for (let magician of magicians) {
    greatMagicians.push(`The Great ${magician}`);
  }
  return greatMagicians;
}

function show_Magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  
  
  console.log("Original Magicians:");
  show_Magicians(magicians);
  

  let greatMagicians: string[] = make_Great([...magicians]);
   
  
  console.log("\nGreat Magicians:");
  show_Magicians(greatMagicians);



export{}