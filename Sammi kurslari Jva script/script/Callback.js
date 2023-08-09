"use strict";

function first(cb) {
    //code
    setTimeout(() => {
        console.log(1);
        cb();
    }, 1000);
}

function second() {
    //code
    console.log(2);
}

first(second);

function edu(subject, callback) {
    console.log(`I vanna teach ${subject}`)
    callback();
}

function done() {
    console.log("That's great");
}

edu("Java script", done);