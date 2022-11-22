import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  project: Project = new Project("", "", "", "", 0);
  constructor(private projectService: ProjectService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectService.verPorId(id).subscribe(
      data =>{
        this.project = data;
        
        console.log(this.project)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectService.modificar(id, this.project).subscribe(
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
