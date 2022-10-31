import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {
  project :Project[]=[];
  constructor(private projectService: ProjectService,
    ) { }

  ngOnInit(): void {
    this.projectService.verTodo().subscribe(data=>{this.project=data})
  }
 

  delete(id?:number){
    if(id!=undefined){
      this.projectService.delete(id).subscribe(data=>{window.location.href="/porfolioAdmin"},err=>alert("no se borro"))
    }  
  }

}
