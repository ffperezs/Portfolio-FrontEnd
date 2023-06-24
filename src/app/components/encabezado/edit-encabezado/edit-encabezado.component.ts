//import { ImageService } from './../../../services/image.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/model/persona';

@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent implements OnInit {
  
  form: FormGroup;
  persona: Persona = null;
  

  constructor(private activatedRouter: ActivatedRoute, 
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

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
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("Datos Actualizados.");
      this.router.navigate(['']);
      }, error =>{
         alert("Datos Actualizados.");
         this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id
    this.imageService.uploadImage($event,name)
  }
}
