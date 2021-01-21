const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const wordlist = ["apa", "baka", "banan", "arnold", "sverige"];

var randomWords = wordlist[Math.floor(Math.random() * wordlist.length)]
console.log(randomWords);

var tries = 7;

const progress = []

for (let i = 0; i < randomWords.length; i++) {
    progress.push ("*");
}

rl.on("line", (input) => {

    var inCorrect = true

    for (let i = 0; i < randomWords.length; i++) {
        if (input === randomWords[i]) {
            console.log("du gissade rätt");
            inCorrect = false;
            progress[i] = randomWords[i];
            console.log(progress[i]);
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
        console.log("du vann!");
        process.exit()
    }
    
    if (tries == 0) {
        console.log("rip");
        console.log("the correct word was " + randomWords);
        process.exit()
    }
});