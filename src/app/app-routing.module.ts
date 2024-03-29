import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component'; 
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';

//Definimos nuestras rutas
const routes: Routes =[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'Home', component: HomeComponent},
  {path: 'editExperiencia/:id', component: EditExperienciaComponent},
  {path: 'editEducacion/:id', component: EditEducacionComponent},
  {path: 'editSkill/:id', component: EditSkillComponent},
  {path: 'editProyecto/:id', component: EditProyectoComponent},
  {path: 'editPersona/:id', component: EditAcercaDeComponent},
  /*{path: '**', component: Pagina404Component}*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
