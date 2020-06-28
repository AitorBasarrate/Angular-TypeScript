class Vengador {
/*  nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;*/

     constructor(public nombre:string, 
                 public equipo:string, 
                 public nombreReal?:string, 
                 public puedePelear:boolean = true,
                 public peleasGanadas:number = 25){
        /*this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;*/
    }

    
}

const ironMan:Vengador = new Vengador('Iron Man', 'Iron Man', 'Tony Stark', true, 26);

console.log(ironMan);