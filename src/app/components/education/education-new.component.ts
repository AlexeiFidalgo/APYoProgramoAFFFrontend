import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-education-new',
  templateUrl: './education-new.component.html',
  styleUrls: ['./education-new.component.css']
})
export class EducationNewComponent implements OnInit {
 
  constructor( private router:Router,public imageService :ImageService,
    private activatedRouter : ActivatedRoute,
    private educationService:EducationService) { }
  education:Education = new Education("","","",0,0,"");
  
   
    ngOnInit(): void {
  }
  onCreate(): void{
    this.education.logo = this.imageService.url;
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

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event,name);
  }

  goBack(){
    this.router.navigate(['/porfolioAdmin'])
  }
}
 