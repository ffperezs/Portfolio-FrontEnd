export class Experiencia {
    id?: number;
    nombreExp: string;
    puesto: string;
    logo: string;
    linkWeb: string;
    inicio: string;
    fin: string;
    tarea1: string;
    tarea2: string;
    tarea3: string;

    constructor(nombreExp: string, puesto: string, logo: string, linkWeb: string, inicio: string, fin: string, tarea1: string, tarea2: string, tarea3: string) {
        this.nombreExp = nombreExp;
        this.puesto = puesto;
        this.logo = logo;
        this.linkWeb = linkWeb;
        this.inicio = inicio;
        this.fin = fin;
        this.tarea1 = tarea1;
        this.tarea2 = tarea2;
        this.tarea3 = tarea3;
    }
}
