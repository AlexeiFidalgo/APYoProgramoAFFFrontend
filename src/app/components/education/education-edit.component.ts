import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit {
  education:Education = new Education("","","",0,5,"");

  constructor( private educationService: EducationService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educationService.verPorId(id).subscribe(
      data =>{
        this.education = data;
        alert("hola")
        console.log(this.education)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    alert(id);
    this.educationService.modificar(id, this.education).subscribe(
      data => {
        alert(id);
        this.router.navigate(['/porfolioAdmin']);
      }, err => {
        alert("hubo un error al modificar ");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
  }


  }


