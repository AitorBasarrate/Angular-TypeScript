/**
 * Crear un objeto y usar obj.atributo para obtener la información del atributo
 * deseado.
 */

const avenger = {
    nombre:'Steve',
    clave:'Capitán America',
    poder:'Escudo'
}
/**
 * De esta manera guardamos el valor de cada atributo en variables con el mismo nombre
 * para no tener que hacer referencia al objeto y solo al atributo.
 */
const{nombre, clave, poder} = avenger;

/**
 * Lo mismo con las funciones y sus parametros, solo que a los parametros
 * hay que especificarles el tipo de dato.
 * (Usamos any como ejemplo pero no se recomienda usarlo) 
 */
const extraer = ({nombre, clave}:any) => {

    console.log(nombre);
    console.log(clave);

}

const avengers:string[] = ['Thor', 'Iron Man', 'Spiderman'];

/**
 * Para desestructurar un array, se hace igual que con los objetos pero
 * en vez de usar '{}' usaremos '[]'. Les damos cualquier nombre a las variables
 * manteniendo el orden del array.
 */
const [thor, ironMan, spiderman] = avengers;

console.log(avengers[0]);
console.log(thor);

/**
 * En las funciones se desestructuran los arrays en los parametros
 * de la misma manera que los objetos, respetando los '[]' y 
 * definiendo el tipo de array.
 */
const extraerArr = ([thor, ironMan, spiderman]:string[]) => {

    console.log(thor);
    console.log(spiderman);

}