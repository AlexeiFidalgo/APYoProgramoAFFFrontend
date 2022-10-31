import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.css']
})
export class ExperienceAdminComponent implements OnInit {
  experience :Experience[]=[];
  constructor(private experienceService: ExperienceService
    ) { }

  ngOnInit(): void {
    this.experienceService.verTodo().subscribe(data=>{this.experience=data})

  }
  delete(id?:number){
    if(id!=undefined){
      this.experienceService.delete(id).subscribe(data=>{window.location.href="/porfolioAdmin"},err=>alert("no se borro"))
    }  
  }

}
