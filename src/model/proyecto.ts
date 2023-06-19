export class Proyecto {
    id?: number;
    nombrePro: string;
    linkGit: string;
    linkPro: string;
    img: string;

    constructor(nombrePro: string, linkGit: string, linkPro: string, img: string) {
        this.nombrePro = nombrePro;
        this.linkGit = linkGit;
        this.linkPro = linkPro;
        this.img = img;
    }
}
