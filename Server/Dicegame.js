// jag vill få slumpmässiga tal från en tärning
// Jag vill skriva ut dessa slumpmässiga tal
// jag vill addera talen som skrivs ut till ett större tal
// jag vill göra detta med en annan person
// jag vill jämflra dessa tal för skriva ut vinnaren som hade högst tal
// 6+1/2 = 3,5

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []

function code() {
    let side1 = Number(lines[0])
    let side2 = Number(lines[1])
    let side3 = Number(lines[2])
    let side4 = Number(lines[3])
    let side5 = Number(lines[4])
    let side6 = Number(lines[5])
    let side7 = Number(lines[6])
    let side8 = Number(lines[7])
    
    let ResultGunnar = ((side1 + side2)/2) + ((side3 + side4)/2)
    let ResultEmma = ((side5 + side6)/2) + ((side7 + side8)/2)

    if (ResultGunnar < ResultEmma) {
        console.log("Gunnar Wins!")
    }
    else if (ResultGunnar > ResultEmma) {
        console.log("Emma Wins!")
    }
    else if (ResultGunnar == ResultEmma) {
        console.log("It's a tie!")
    }
}


rl.on('line', (input) => {
    lines.push(input)
    if(lines.length == 8){
        code(); {
            rl.close()
        }
    }
});


// (5+1)/2

// let a = "5"
// Number(a)