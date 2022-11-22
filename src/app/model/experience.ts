export class Experience {
    id?:number;
    nombre?:string;
    puesto?:string;
    logo?:string;
    descripcion?:string;
    anoInicio?:number;
    anoFin?:number;
    tipoEmpleo?:string;

    constructor(  puesto:string,nombre:string,logo:string,
        anoInicio:number,anoFin:number,tipoEmpleo:string,descripcion:string){
       this.puesto=puesto;
       this.nombre=nombre;
       this.logo=logo;
       this.descripcion=descripcion;
       this.anoInicio=anoInicio;
       this.anoFin=anoFin;
       this.tipoEmpleo=tipoEmpleo;
   }

}
