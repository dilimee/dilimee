"use strict";

let num = 10;

// //Fierst 
// while (startNum <= 20) {
//     console.log(startNum);
//     startNum++;
// }

// //Second
// do {
//     console.log(startNum);
//     startNum++;
// } while (startNum <= 20)

//Third
for (let i = 1; i <= 10; i++) {
    if (i === 8) {
        //break
        continue;
    }
    console.log(i);
}