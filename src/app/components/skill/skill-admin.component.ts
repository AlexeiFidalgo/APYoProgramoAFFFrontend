import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-admin',
  templateUrl: './skill-admin.component.html',
  styleUrls: ['./skill-admin.component.css']
})
export class SkillAdminComponent implements OnInit {
  skill :Skill[]=[];
  constructor(private skillService: SkillService, 
    ) { }

  ngOnInit(): void {
    this.skillService.verTodo().subscribe(data=>{this.skill=data})
  }
 

  delete(id?:number){
    if(id!=undefined){
      this.skillService.delete(id).subscribe(data=>{window.location.href="/porfolioAdmin"},err=>alert("no se borro"))
    }  
  }

}
