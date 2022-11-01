import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experience :Experience[]=[];
    constructor(private experienceService: ExperienceService
      ) { }
  
    ngOnInit(): void {
      this.experienceService.verTodo().subscribe(data=>{this.experience=data})
  
    }

}