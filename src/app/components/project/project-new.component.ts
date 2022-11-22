import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService) { }
  project: Project = new Project("", "", "", "", 0)
  ngOnInit(): void {
  }

  onCreate(): void {

    this.projectService.nuevo(this.project).subscribe(
      data => {
        alert("el proyecto se añadido correctamente");
        this.router.navigate(['/porfolioAdmin']);
      }, err => {
        alert("falló");
        this.router.navigate(['/porfolioAdmin']);
      }
    )
  }
  goBack(){
    this.router.navigate(['/porfolioAdmin'])
  }
}
