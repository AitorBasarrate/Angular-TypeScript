let x:number[];
let i:number;
let erantzuna:number;

const FIBONACCI = () => {
    if (x[i] > x[i-1]) {
        erantzuna = x[i] + x[i-1];
        x[i+1] = erantzuna
    }
    i++;
}