import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  isLogged: boolean = false;
  experiencias: Experiencia[] = []; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, 
              private experienciaService: ExperienciaService,
              private router: Router ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }


  delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, data => {
          alert("Experiencia Eliminada");
        }
      )
    }
  }
}
