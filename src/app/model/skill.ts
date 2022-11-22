export class Skill {
    id?: number;
    nombre?: string;
    porcentaje?: number;
    tipoHabilidad?: string;


    constructor(
        nombre: string,
        porcentaje: number,
        tipoHabilidad: string) {

        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.tipoHabilidad = tipoHabilidad;
    }
}
