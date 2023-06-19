
import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from 'src/model/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  isLogged: boolean = false;
  estudios: Educacion[] = []; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, 
              private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(
      data => { 
        this.estudios = data 
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, data => {
          alert("Educación Eliminada");
        }
      )
    }
  }
}