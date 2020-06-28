(function(){
    const nombre = 'Aitor';
    const apellido = 'Basarrate';
    const edad = 20;

    //Las dos variables de abajo darian el mismo resultado, pero la segunda es mas sencilla.
    let salida1 = nombre + " " + apellido + " ( " + edad + " )";
    //Lo que se introduzca dentro de `` se va a imprimir literalmente, TODO
    let salida2 = `${nombre} ${apellido} ( ${edad} )`;

    console.log(salida2);
})
    
