import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-new',
  templateUrl: './education-new.component.html',
  styleUrls: ['./education-new.component.css']
})
export class EducationNewComponent implements OnInit {
 
  constructor( private router:Router,
    private activatedRouter : ActivatedRoute,
    private educationService:EducationService) { }
  education:Education = new Education("","","",0,0,"");
  
   
    ngOnInit(): void {
  }
  onCreate(): void{
    this.educationService.nuevo(this.education).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
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
 