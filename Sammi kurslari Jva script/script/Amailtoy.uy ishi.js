"use strict";

const numberOfseries = +prompt("Nechta serial ko'rdingiz", "");


//Object
const seriesDb = {
    //key valeu 
    count: numberOfseries, //number
    series: {}, //string
    actors: {}, //boolen
    geners: [],
    privat: "false",
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz"),
        b = prompt("Necha baho berasiz?");

    if (a != null && b != null && a != "" && b != "") {
        seriesDb.series.a = b;
        console.log("done");
    } else {
        console.log("eror");
        i--;
    }
}


console.log(seriesDb);




let series = prompt("How many series have you watched?")
let message;

if (series < 5) {
    message = 'Kam serial koripsiz!';
} else if (series < 10) {
    message = 'Siz klasik tomoshabin ekansiz';
} else if (series > 10) {
    message = 'Siz serialchi zvezda ekansiz';
}

console.log(message);
