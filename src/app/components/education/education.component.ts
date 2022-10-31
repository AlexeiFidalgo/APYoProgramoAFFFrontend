import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
education:Education = new Education("","","",0,0,"");
  constructor(public educationService:EducationService) { }

  ngOnInit(): void {
   // this.educationService.verTodo().subscribe(data=>{this.persona=data});
  }

}
