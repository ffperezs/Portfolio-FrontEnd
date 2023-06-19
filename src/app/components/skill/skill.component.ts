import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';
import { Skill } from 'src/model/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  isLogged: boolean = false;
  skills: Skill[] = []; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, 
              private skillService: SkillService) { }

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.skillService.lista().subscribe(data => { this.skills = data });
  }


  delete(id?: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, data => {
          alert("Skill Eliminada");
        }
      )
    }
  }
}
