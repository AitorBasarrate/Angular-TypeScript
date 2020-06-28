/**
 * Al igual que en JAVA son clases que no se declaran. Son condiciones
 * que tienen que cumplir los objetos.
 */
interface Xmen {
    nombre:string;
    edad:number;
    poder?:string; //con la interrogacion indicamos que es un campo opcional.
}

/**
 * En los parametros de una funcion si el tipo de dato lo ponemos entre '{}'
 * entiende que le pasamos un objeto con el atributo especificado entre las llaves.
 */
const enviarMision = (xmen: {nombre:string}) => {

    console.log(`Enviando a ${xmen.nombre} a una mision`);

}

const volverMision = (xmen: Xmen) => {

    console.log(`${xmen.nombre} ha vuelto de una mision`);

}

const lobezno:Xmen = {
    nombre:'Logan',
    edad:60
}

enviarMision(lobezno);
volverMision(lobezno);