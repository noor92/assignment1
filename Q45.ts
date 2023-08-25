/*Cars: Write a function that stores information about a car in a Object. The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of
keyword arguments. Call the function with the required information and two other name-value 
pairs, such as a color or an optional feature. Print the Object that’s returned to make sure
all the information was stored correctly. */
console.log("Answer");
function createCar(manufacturer: string, model: string, ...options: [string, any][]): Record<string,any> {
    let car: Record<string,any> = {
      manufacturer,
      model,
    };
  
    for (let [key, value] of options) {
      car[key] = value;
    }
  
    return car;
  }
  
  let carInfo = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2023], ["sunroof", true]);
  
  console.log("Car Information:");
  console.log(carInfo);





export{}