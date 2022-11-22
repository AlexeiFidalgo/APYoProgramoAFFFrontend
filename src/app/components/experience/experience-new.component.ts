import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience-new',
  templateUrl: './experience-new.component.html',
  styleUrls: ['./experience-new.component.css']
})
export class ExperienceNewComponent implements OnInit {

  constructor( private router:Router,private experienceService:ExperienceService) { }
  experience:Experience = new Experience("","","",0,0,"","");
  
   
    ngOnInit(): void {
  }
  onCreate(): void{
    
    this.experienceService.nuevo(this.experience).subscribe(
      data =>{
        alert("experiencia se añadida correctamente");
        this.router.navigate(['/porfolioAdmin']);
      }, err =>{
        alert("falló");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
  }
  goBack(){
    this.router.navigate(['/porfolioAdmin'])
  }

}
