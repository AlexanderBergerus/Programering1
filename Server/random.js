const { read } = require('fs')
const { listeners } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



let random = Math.floor(Math.random() * 100) +1

let tries = 6

console.log("Guess the random number bich boi: ");
    

rl.on('line', (input)=>{
    let answer = parseInt(input)
    tries--;

if (tries == 0){
    console.log("out of tries mate");
    console.log("The right number was: ", random);
    process.exit()
}

else if (answer == random) {
    console.log("Victory")
    process.exit()
    
}
else if (answer < random) {
    console.log("Too low bitch boy")
    console.log("You now have ", tries, "tries left");
    
}
else if (answer > random) {
    console.log("Too high like Snoop Dogg")
    console.log("You now have ", tries, "tries left");
}




})

