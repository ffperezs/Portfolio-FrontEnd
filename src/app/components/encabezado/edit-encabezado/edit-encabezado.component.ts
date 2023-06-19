import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/model/persona';

@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent implements OnInit {
  
  persona: Persona = null;
  

  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService,
    private router: Router ) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar los Datos");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar los Datos");
         this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){

  }

}
