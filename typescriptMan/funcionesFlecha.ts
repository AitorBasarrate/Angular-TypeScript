const miFuncion = function(a:string) {
    return a;
}

const miFuncionF = (a:string)=>a;

const suma = (a:number, b:number)=>a+b;

/*
 * Constructor de un objeto con atributo 'nombre' y una funcion 'smash' con un 'timeout' para llamar
 * a funciones creadas fuera del constructor. Y como usamos una funcion flecha podemos hacer referencia
 * a variables y demas cosas de fuera de la funcion como el 'this.name'
 */
const hulk = {
    nombre:"Hulk",
    smash(){
    setTimeout(() => {
        console.log(`${this.nombre} smash!!!`);
    }, 1000);}
}

console.log(suma(5,3));
console.log(miFuncion('Normal'));
console.log(miFuncionF('Flecha'));