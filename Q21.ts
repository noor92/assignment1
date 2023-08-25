/* They think of something you could store in a TypeScript Object. Write a program that 
creates Objects containing these items. */

console.log("Answer")
interface Person {
    name: string;
    age: number;
    gender:string;
    
  }
  
  let myinfo : Person = {
    name: "Noor fatima",
    age: 16, 
    gender:"Female"
    
  }
    
   function Personinfo(myinfo: Person): void{
    console.log("Name:", myinfo.name);
    console.log("Age:", myinfo.age);
    console.log("gender:", myinfo.gender);
  }
  console.log(myinfo)
export{}