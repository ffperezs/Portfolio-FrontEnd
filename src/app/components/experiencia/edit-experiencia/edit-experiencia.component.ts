import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {

  form:FormGroup;
  experiencia: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, 
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data =>{
        this.experiencia = data;
      }, err =>{
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Experiencia Actualizada.");
         this.router.navigate(['']);
      }
    )
  }
}