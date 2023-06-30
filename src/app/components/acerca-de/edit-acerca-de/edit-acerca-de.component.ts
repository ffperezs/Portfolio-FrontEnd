import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from 'src/model/persona';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  form: FormGroup;
  persona: Persona = null;


  constructor(private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar los Datos");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        alert("Datos Actualizados.");
        this.router.navigate(['']);
      }, err => {
        alert("Datos Actualizados.");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }
}
