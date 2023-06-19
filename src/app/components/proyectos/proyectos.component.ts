import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { Proyecto } from 'src/model/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  isLogged: boolean = false;
  proyectos: Proyecto[] = []; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, 
              private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.proyectos = data });
  }


  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, data => {
          alert("Proyecto Eliminado");
        }
      )
    }
  }
}