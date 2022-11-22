import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent implements OnInit {
  experience:Experience = new Experience("","","",0,0,"","");
  constructor(private experienceService: ExperienceService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.verPorId(id).subscribe(
      data =>{
        this.experience = data;
        console.log(this.experience)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }
  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienceService.modificar(id, this.experience).subscribe(
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
