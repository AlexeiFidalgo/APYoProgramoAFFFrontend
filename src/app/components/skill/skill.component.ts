import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill :Skill[]=[];
  constructor(private skillService: SkillService,
    ) { }

  ngOnInit(): void {
    this.skillService.verTodo().subscribe(data=>{this.skill=data})
  }
}
