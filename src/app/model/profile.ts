export class Profile {
    id?:number;
    nombre?:string;
    apellido?:string;
    titulo?:string;
    fotoPerfil?:string;
    fotobanner?:string;
    descripcion?:string;


    constructor(nombre:string,apellido:string,fotoPerfil:string,fotobanner:string,
        titulo:string,descripcion:string){
            this.nombre=nombre;
            this.apellido=apellido;
            this.fotoPerfil=fotoPerfil;
            this.fotobanner=fotobanner;
            this.descripcion=descripcion;
            this.titulo=titulo;
    }
}
