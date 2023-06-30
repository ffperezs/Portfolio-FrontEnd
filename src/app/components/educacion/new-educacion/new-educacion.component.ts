import { EducacionService } from 'src/app/services/educacion.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  form: FormGroup;
  nombreEdu: string= ''; 
  titulo: string= '';
  logo: string= '';
  linkWeb: string= '';
  inicio: string= '';
  fin: string= '';
  

  constructor(private formBuilder: FormBuilder, 
              private educacionService: EducacionService,
              private router: Router ) {
                
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      nombreEdu: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      logo: [''],
      linkWeb: [''],
      inicio: [''],
      fin: ['']
    })
  }
  
  ngOnInit(): void {}

  get NombreEdu(){
    return this.form.get("nombreEdu");
  }

  get Titulo(){
    return this.form.get("titulo");
  }


  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu,
                                    this.titulo,
                                    this.logo,
                                    this.linkWeb,
                                    this.inicio,
                                    this.fin);
                                                               
    this.educacionService.save(this.form.value).subscribe(
      data => {
        alert("Educación Añadida");
        window.location.reload();
      }, err =>{
        alert ("Error al cargar Educación... Intente nuevamente!");
        this.router.navigate(['']);
      }
    )
  } 


  limpiar(): void{
    this.form.reset();
  }
}
