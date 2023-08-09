"use strict";

const theif = {
    jacket: "black",
    height: "1.7",
    colors: {
        hair: "gray",
        style: "Curley",
    },
};

console.log(Object.keys(theif).length);

for (let key in theif) {
    if (typeof theif[key] === "object") {
        for (let i in theif[key]) {
            console.log(`Property ${i} has valeu ${theif[key][i]}`);
        }
    } else {
        console.log(`Property ${key} has valeu ${theif[key]}`);
    }
}