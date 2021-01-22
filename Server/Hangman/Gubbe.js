const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function info() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du ska gissa på ett slumpat ord,")
    console.log("Men du har bara 7 försök på dig innan gubben blir hallal")
    console.log("Du får endast gissa en liten bokstav i taget")
    console.log("Var inte sämst :)")
}


info() // informerar spelaren om spelets regler
