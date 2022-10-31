export class Education {
    id?:number;
    titulo?:string;
    nombreInstitucion?:string;
    logo?:string;
    anoInicio?:number;
    anoFin?:number;
    tipoEducacion?:string;
    
    constructor(  titulo:string,nombreInstitucion:string,logo:string,
         anoInicio:number,anoFin:number,tipoEducacion:string){
        this.titulo=titulo;
        this.nombreInstitucion=nombreInstitucion;
        this.logo=logo;
        this.anoInicio=anoInicio;
        this.anoFin=anoFin;
        this.tipoEducacion=tipoEducacion;

    }


}
