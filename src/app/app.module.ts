import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FIN Servicios

import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { NewSkillComponent } from './components/skill/new-skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill/edit-skill.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercaDeComponent,
    EditAcercaDeComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    SkillComponent,
    NewSkillComponent,
    EditSkillComponent,
    ProyectosComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
