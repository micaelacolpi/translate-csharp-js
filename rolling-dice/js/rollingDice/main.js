// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const roll = () => {
    const dieValue = Math.ceil(Math.random() * 7);
    return dieValue
}

// for (int i = 0; i < 10; i++) {
//     const die1 = roll();
//     const die2 = roll();

//     const message = "${die1}"
// }

const round = () => {
    const die1 = roll();
    const die2 = roll();
    const total = die1 + die2;
    if (die1 === die2) {
        console.log('? + ? = ' + total + ' DOUBLES!')
    } else {
        console.log('? + ? = ' + total)
    }

}

round();
round();
round();
round();
round();
round();
round();
round();
round();
round();
