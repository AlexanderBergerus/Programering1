const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const rightguess = []
const wrongguess = []


function info() {
    console.log("Välkommen till hänga gubbe!")
    console.log("Du ska gissa på ett slumpat ord,")
    console.log("Men du har bara 7 försök på dig innan gubben blir hallal")
    console.log("Du får endast gissa en liten bokstav i taget")
    console.log("Var inte sämst :)")
}
// array av ord sim spelaren kan gissa
const words = ['sverige', 'flygplan', 'fotboll', 'fängelse', 'arnold']

function guessWord() {
    let randomWords = words[Math.floor(words.lenght = Math.random())]
    let splitWords = randomWords.split('')
    console.log(splitWords);

}

let tries = 7; //antalet gissningar spelaren har

// let clue = splitWords;



info() // informerar spelaren om spelets regler
rl.on('line', (input) => {
    
    let answer = parseInt(input);

    if (tries == 7) {
        console.log("The game has begun");
    } else if (tries == 4) {
        console.log(clue);
    
    }
    
    for (let i = 0; i < words.length; i++) {
    
    
        if (words !== input) {
            console.log("wrong letter");
    
        }
    }
    
    
    if (words == input) {
        console.log("correct guess");
    
    
    } else if (yes) {
        console.log(words, "you have won the game!!");
        process.exit();
    }
    
    
    
    // gissa rätt och skriv ut bokstaven i rätt ordning
    
    // 
    
    
    tries--;
    if (tries == 0) {
        console.log("Du förlorade... Sämst");
        process.exit();
    }
})
