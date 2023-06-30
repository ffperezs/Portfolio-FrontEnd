import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})

export class NewExperienciaComponent implements OnInit {
  
  form: FormGroup;
  nombreExp: string= '';
  puesto: string= '';
  logo: string= '';
  linkWeb: string= '';
  inicio: string= '';
  fin: string= '';
  tarea1: string= '';
  tarea2: string= '';
  tarea3: string= '';

  constructor(private formBuilder: FormBuilder, 
              private experienciaService: ExperienciaService,
              private router: Router ) {
                
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      nombreExp: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      logo: [''],
      linkWeb: [''],
      inicio: [''],
      fin: [''],
      tarea1: ['', [Validators.required]],
      tarea2: ['', [Validators.required]],
      tarea3: ['', [Validators.required]],
    })
  }
  
  ngOnInit(): void {}

  get NombreExp(){
    return this.form.get("nombreExp");
  }

  get Puesto(){
    return this.form.get("puesto");
  }

 get Tarea1(){
    return this.form.get("tarea1");
  }

 get Tarea2(){
    return this.form.get("tarea2");
  }

 get Tarea3(){
    return this.form.get("tarea3");
  }


  onCreate(): void {
    const experiencia = new Experiencia(this.nombreExp,
                                        this.puesto,
                                        this.logo,
                                        this.linkWeb,
                                        this.inicio,
                                        this.fin,
                                        this.tarea1,
                                        this.tarea2,
                                        this.tarea3);
                            
    this.experienciaService.save(this.form.value).subscribe(
      data => {
        alert("Experiencia Añadida");
        window.location.reload();
      }, err =>{
        alert ("Error al cargar Experiencia... Intente nuevamente!");
        this.router.navigate(['']);
      }
    )
  }  


  limpiar(): void{
    this.form.reset();
  }
}