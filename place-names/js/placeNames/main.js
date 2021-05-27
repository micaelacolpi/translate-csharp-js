// Put your code here

console.log("All Place Names")
const namesOfCities = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];
for (let name of namesOfCities) {
    console.log(` ${name}`);
}
console.log("`The` Place Names")
let namesWithThe = namesOfCities.filter(name => name.includes("The"))
for (let name of namesWithThe) { console.log(`${name}`) }

