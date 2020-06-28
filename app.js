"use strict";
let x;
let i;
let erantzuna;
const FIBONACCI = () => {
    if (x[i] > x[i - 1]) {
        erantzuna = x[i] + x[i - 1];
        x[i + 1] = erantzuna;
    }
    i++;
};
