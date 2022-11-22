import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {

  constructor(private router: Router,private activatedRouter : ActivatedRoute, private skillService :SkillService) { }
  skill : Skill = new Skill("",0,"")
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.verPorId(id).subscribe(
      data =>{
        this.skill = data;
        
        console.log(this.skill)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.modificar(id, this.skill).subscribe(
      data => {
        this.router.navigate(['/porfolioAdmin']);
      }, err => {
        alert("hubo un error al modificar ");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
  }
  goBack(){
    this.router.navigate(['/porfolioAdmin'])
  }

} 
