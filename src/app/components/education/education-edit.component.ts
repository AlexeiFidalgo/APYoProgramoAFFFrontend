import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ImageService } from 'src/app/service/image.service';
 
@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  
  education:Education = new Education("","","",0,0,"");
  constructor( private educationService: EducationService,
    public imageService :ImageService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.verPorId(id).subscribe(
      data =>{
        this.education = data;
        
        console.log(this.education)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }
 
  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.education.logo = this.imageService.url;
    this.educationService.modificar(id, this.education).subscribe(
      data => {
        this.router.navigate(['/porfolioAdmin']);
      }, err => {
        alert("hubo un error al modificar ");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
  }
  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event,name);
    console.log("uploadImage okay")
  }

  goBack(){
    this.router.navigate(['/porfolioAdmin'])
  }

  }


