export class Skill {
    id?: number;
    nombre: string;
    logo: string;
    porcentaje: number;


    constructor(nombre: string, logo: string, porcentaje: number) {
        this.nombre = nombre;
        this.logo = logo;
        this.porcentaje = porcentaje;
    }
}

