/**
 * Mas de lo mismo, 'try catch' y tal.
 * Pero ahora limitando el tipo de dato que devuelve.
 */

const retirarDinero = (dineroRetirar:number):Promise<number> => {

    let dineroActual = 1000;
    return new Promise((resolve, reject) => {
        if(dineroRetirar > dineroActual){
            reject('No hay suficiente dinero')
        }else{
            dineroActual -= dineroRetirar;
            resolve(dineroActual);
        }
    });

}


retirarDinero(5000)
                .then(mensaje => console.log(mensaje))
                .catch(err => console.error(err));