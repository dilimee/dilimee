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

const a = prompt("Oxirgi ko'rgan serialingiz"),
    b = prompt("Necha baho berasiz?"),
    c = prompt("Oxirgi ko'rgan serialingiz"),
    d = prompt("Necha baho berasiz");

seriesDb.series.a = b;
seriesDb.series.c = d;


console.log(seriesDb);
