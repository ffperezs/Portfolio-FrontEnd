import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  form: FormGroup;
  nombre: string= '';
  logo: string= '';
  porcentaje: number;

  constructor(private formBuilder: FormBuilder, 
              private skillService: SkillService,
              private router: Router ) {
                
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      logo: ['', [Validators.required]],
      porcentaje: ['', [Validators.required]],
    })
  }
  
  ngOnInit(): void {}

  get Nombre(){
    return this.form.get("nombre");
  }

  get Logo(){
    return this.form.get("logo");
  }

  get Porcentaje(){
    return this.form.get("porcentaje");
  }


  onCreate(): void {
    const skill = new Skill(this.nombre,
                            this.logo,
                            this.porcentaje);
                            
    this.skillService.save(this.form.value).subscribe(
      data => {
        alert("Skill Añadida");
        this.router.navigate(['']);
      }, err =>{
        alert ("Error al cargar Skill... Intente nuevamente!");
        this.router.navigate(['']);
      }
    )
  }  


  limpiar(): void{
    this.form.reset();
  }
}
