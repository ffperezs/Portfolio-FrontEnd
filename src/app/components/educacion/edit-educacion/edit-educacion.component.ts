import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/model/educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  form: FormGroup;
  educacion: Educacion = null;

  constructor(private educacionService: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.educacionService.detail(id).subscribe(
        data =>{
          this.educacion = data;
        }, err =>{
          alert("Error al modificar Experiencia");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.educacionService.update(id, this.educacion).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Educación Actualizada.");
           this.router.navigate(['']);
        }
      )
    }
  }