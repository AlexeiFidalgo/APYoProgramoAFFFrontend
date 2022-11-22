import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {

  constructor(private router: Router, private skillService :SkillService) { }
  skill : Skill = new Skill("",0,"")
  ngOnInit(): void {
  }
  onCreate(): void {

    this.skillService.nuevo(this.skill).subscribe(
      data => {
        alert("la habilidad se creo correctamente");
        this.router.navigate(['/porfolioAdmin']);
      }, err => {
        alert("falló");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
    }
    goBack(){
      this.router.navigate(['/porfolioAdmin'])
    }
}
