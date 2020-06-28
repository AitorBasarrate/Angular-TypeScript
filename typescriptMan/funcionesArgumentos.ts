    (function(){

    /**
     * Los argumentos de la funcion se ordenan obligatorios primero
     * y opcionales despues. Los opcionales pueden hacerse dando un valor
     * por defecto, como en 'donde' o poniendo '?:'.
     */
    function activar(quien:string,
                     donde:string = 'Londres',
                     cuando?:string){

        console.log(`${quien} se marchó a ${donde} en ${cuando}`);
    }

    /*
     * Hay que tener en cuenta que el orden en el que se pasan los argumentos debe ser
     * el mismo que al crear la funcion.
     */
    activar('Gordon');
    
    })
    
