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
    console.log("Var inte sämst :)")}

const wordlist = ["wolfenstein", "seanbanan", "arnold", "sverige", "iridociclytis"];

var randomWords = wordlist[Math.floor(Math.random() * wordlist.length)]


var tries = 7;

const progress = []

for (let i = 0; i < randomWords.length; i++) {
    progress.push ("*");
}
info()
rl.on("line", (input) => {

    var inCorrect = true

    for (let i = 0; i < randomWords.length; i++) {
        if (input === randomWords[i]) {
            console.log("du gissade rätt");
            inCorrect = false;
            progress[i] = randomWords[i];
            
        }
    }
   
    if (inCorrect) {

        tries--;
        console.log("stoopid that's wrong");
        console.log("u have " + tries + " left ");
    } else {
        console.log("rätt")
        console.log(progress);

    }
    if (progress.join("") === randomWords) {
        console.log("du vann! Ordet var " + randomWords);
        
        process.exit()
    }
    
    if (tries == 0) {
        console.log("rip");
        console.log("the correct word was " + randomWords);
        process.exit()
    }
});