import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from './../../../../model/proyecto';
import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})

export class NewProyectoComponent implements OnInit {

  form: FormGroup;
  nombrePro: string= '';
  linkGit: string= '';
  linkPro: string= '';
  img: string= '';

  constructor(private formBuilder: FormBuilder, 
              private proyectoService: ProyectoService,
              private router: Router ) {
                
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      nombrePro: ['', [Validators.required]],
      linkGit: ['', [Validators.required]],
      linkPro: [''],
      img: ['', [Validators.required]]
    })
  }
  
  ngOnInit(): void {}

  get NombrePro(){
    return this.form.get("nombrePro");
  }

  get LinkGit(){
    return this.form.get("linkGit");
  }

  get Img(){
    return this.form.get("img");
  }


  onCreate(): void {
    const proyecto = new Proyecto(this.nombrePro,
                                  this.linkGit,
                                  this.linkPro,
                                  this.img);
                            
    this.proyectoService.save(this.form.value).subscribe(
      data => {
        alert("Proyecto Añadido");
        window.location.reload();
      }, err =>{
        alert ("Error al cargar Proyecto... Intente nuevamente!");
        this.router.navigate(['']);
      }
    )
  }  


  limpiar(): void{
    this.form.reset();
  }
}
