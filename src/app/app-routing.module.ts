import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationEditComponent } from './components/education/education-edit.component';
import { EducationNewComponent } from './components/education/education-new.component';
import { ExperienceEditComponent } from './components/experience/experience-edit.component';
import { ExperienceNewComponent } from './components/experience/experience-new.component';
import { LoginComponent } from './components/login/login.component';
import { PorfolioAdminComponent } from './components/porfolio/porfolio-admin.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { ProfileEditComponent } from './components/profile/profile-edit.component';
import { ProjectEditComponent } from './components/project/project-edit.component';
import { ProjectNewComponent } from './components/project/project-new.component';
import { SkillEditComponent } from './components/skill/skill-edit.component';
import { SkillNewComponent } from './components/skill/skill-new.component';


const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'porfolioAdmin', component: PorfolioAdminComponent },
  { path: 'login', component:LoginComponent},
  { path: 'educationNew', component:EducationNewComponent},
  { path: 'educationEdit/:id', component:EducationEditComponent},
  { path: 'experienceNew', component:ExperienceNewComponent},
  { path: 'experienceEdit/:id', component:ExperienceEditComponent},
  { path: 'projectNew', component:ProjectNewComponent},
  { path: 'projectEdit/:id', component:ProjectEditComponent},
  { path: 'skillNew', component:SkillNewComponent},
  { path: 'skillEdit/:id', component:SkillEditComponent},
  { path: 'profileEdit/:id', component:ProfileEditComponent},
  { path: '', redirectTo:'porfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }