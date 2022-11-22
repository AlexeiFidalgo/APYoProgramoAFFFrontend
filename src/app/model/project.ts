export class Project {
    id?: number;
    nombre?: string;
    descripcion?: string;
    logo?: string;
    urlProyecto?: string;
    anoFin?: number;

    constructor(
        nombre: string,
        descripcion: string,
        logo: string,
        urlProyecto: string,
        anoFin: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.logo = logo;
        this.urlProyecto = urlProyecto;
        this.anoFin = anoFin;

    }

}
