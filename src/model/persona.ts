export class Persona{
    id?: number;
    nombre: string;
    apellido: string;
    posicion: string;
    sobreMi: string;
    img:string;
    banner:string;
    linkW:string;
    linkE:string;

    constructor (nombre:string,apellido:string,posicion:string,sobreMi:string,img:string,banner:string,linkW:string,linkE:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.posicion = posicion;
        this.sobreMi = sobreMi;
        this.img = img;
        this.banner = banner;
        this.linkW = linkW;
        this.linkE = linkE;
    }
}