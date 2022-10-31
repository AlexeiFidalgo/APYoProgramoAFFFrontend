import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationNewComponent } from './components/education/education-new.component';
import { LoginComponent } from './components/login/login.component';
import { PorfolioAdminComponent } from './components/porfolio/porfolio-admin.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';


const routes: Routes = [
  { path: 'porfolio', component: PorfolioComponent },
  { path: 'porfolioAdmin', component: PorfolioAdminComponent },
  { path: 'login', component:LoginComponent},
  { path: 'educationNew', component:EducationNewComponent},
  { path: 'educationEdit/:id', component:EducationNewComponent},
  { path: '', redirectTo:'porfolio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }