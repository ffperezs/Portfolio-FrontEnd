export class Educacion {
    id?: number;
    nombreEdu: string;
    titulo: string;
    logo: string;
    linkWeb: string;
    inicio: string;
    fin: string;

    constructor(nombreEdu: string, titulo: string, logo: string, linkWeb: string, inicio: string, fin: string) {
        this.nombreEdu = nombreEdu;
        this.titulo = titulo;
        this.logo = logo;
        this.linkWeb = linkWeb;
        this.inicio = inicio;
        this.fin = fin;
    }
}