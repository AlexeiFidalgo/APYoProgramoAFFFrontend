import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.css']
})
export class EducationAdminComponent implements OnInit {
education :Education[]=[];
  constructor(private educationService: EducationService,
    ) { }

  ngOnInit(): void {
    this.list();
  }
 
list(){
  this.educationService.verTodo().subscribe(data=>{this.education=data})
}

  delete(id?:number){
    if(id!=undefined){
      console.log(id)
      this.educationService.delete(id).subscribe(data=>{window.location.href="/porfolioAdmin"},err=>alert("no se borro"))
    }  
  }

}
