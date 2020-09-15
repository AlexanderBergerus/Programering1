let index = 0

let names = ["Niklas", "Oliver", "Emil", "Melker", "Alex"]

 for (let i = 1;  i <= 100; i++) {
     if (i % 2 == 0)  {
     
        console.log(i)
     }
     
 }

 for (let i = 5; i <= 79 ; i++) {
     if (i % 3 == 0) {
         
        console.log(i)
     }
     
     
 }



while (true) {
    if (names[index] === "Niklas") {
       break;
    }
     {
        index++
    }
}

console.log("I found Niklas at index " + index)