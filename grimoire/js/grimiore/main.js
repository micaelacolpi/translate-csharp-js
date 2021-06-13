// // Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to heal",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emperor of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
]

const displaySpellBook = (book) => {
    console.log(book.title)
    for (let spell of book.spells) {
        console.log(`  ${spell}`)
    }
}

const makeGoodSpellBook = (array) => {
    let newArr = []
    for (let element of array) {
        if (element.isEvil === false) {
            newArr.push(element.name)
        }
    }
    const goodBookObj = {
        title: "Good Book",
        spells: newArr
    }
    return goodBookObj
}

const makeEvilSpellBook = (array) => {
    let newArr = []
    for (let element of array) {
        if (element.isEvil === true) {
            newArr.push(element.name)
        }
    }
    const evilBookObj = {
        title: "Evil Book",
        spells: newArr
    }
    return evilBookObj
}

const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);

displaySpellBook(goodBook);
console.log(" ");
displaySpellBook(evilBook);
