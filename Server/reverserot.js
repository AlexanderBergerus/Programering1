const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_."

rl.question('Type in a number and a answer ', (answer) => {
  // TODO: Log the answer in a database


  let splitAnswer = answer.split(' ')

  let rotation = Number(splitAnswer[0])
  let message = splitAnswer[1]
  let result = ""

  
  for (const letter of message) {
        console.log (letter);
        let letterIndex = alphabet.indexOf(letter)
        let newIndex = letterIndex + rotation
        if(newIndex > 27){
          newIndex = newIndex - 28
        }
        let newLetter = alphabet[newIndex]
        result += newLetter
      }

      let reversedResult = result.split('').reverse().join('')
      


  console.log(reversedResult);

  rl.close();
});