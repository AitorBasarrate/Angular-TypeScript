"use strict";
let x;
let i;
const CONT = 10;
let erantzuna;
const FIBONACCI = () => {
    x = [0, 1];
    while (CONT < 10) {
        if (x[i] > x[i - 1]) {
            erantzuna = x[i] + x[i - 1];
            x[i + 1] = erantzuna;
        }
        console.log(x[i]);
        i++;
    }
};
FIBONACCI;
