console.log(`Inicio`);

/**
 * Las promesas son como los 'try' en JAVA.
 */
const prom1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject('Se termino la promesa')
    }, 1000);
});

/**
 * 'Then' y 'Catch' funcionan igual que en JAVA.
 */
prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));
console.log(`Final`);