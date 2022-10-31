export class Experience {
    id?:number;
    nombre?:string;
    puesto?:string;
    logo?:string;
    anoInicio?:number;
    anoFin?:number;
    tipoEmpleo?:string;

    constructor(  puesto:string,nombre:string,logo:string,
        anoInicio:number,anoFin:number,tipoEmpleo:string){
       this.puesto=puesto;
       this.nombre=nombre;
       this.logo=logo;
       this.anoInicio=anoInicio;
       this.anoFin=anoFin;
       this.tipoEmpleo=tipoEmpleo;
   }

}
