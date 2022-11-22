import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectComponent } from './components/project/project.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEditComponent } from './components/profile/profile-edit.component';
import { ProjectAdminComponent } from './components/project/project-admin.component';
import { ProjectNewComponent } from './components/project/project-new.component';
import { ProjectEditComponent } from './components/project/project-edit.component';
import { SkillAdminComponent } from './components/skill/skill-admin.component';
import { SkillNewComponent } from './components/skill/skill-new.component';
import { SkillEditComponent } from './components/skill/skill-edit.component';
import { PorfolioAdminComponent } from './components/porfolio/porfolio-admin.component';
import { ExperienceAdminComponent } from './components/experience/experience-admin.component';
import { ExperienceNewComponent } from './components/experience/experience-new.component';
import { EducationAdminComponent } from './components/education/education-admin.component';
import { EducationNewComponent } from './components/education/education-new.component';
import { HeaderAdminComponent } from './components/header/header-admin.component';
import { ProfileAdminComponent } from './components/profile/profile-admin.component';
import { EducationEditComponent } from './components/education/education-edit.component';
import { ExperienceEditComponent } from './components/experience/experience-edit.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileAdminComponent,
    EducationComponent,
    EducationEditComponent,
    EducationAdminComponent,
    EducationNewComponent,
    ExperienceComponent,
    ExperienceAdminComponent,
    ExperienceNewComponent,
    ExperienceEditComponent,
    SkillComponent,
    LoginComponent,
    FooterComponent,
    PorfolioComponent,
    PorfolioAdminComponent,
    ProjectComponent,
    ProjectAdminComponent,
    ProjectNewComponent,
    ProjectEditComponent,
    SkillAdminComponent,
    SkillNewComponent,
    SkillEditComponent,
    HeaderAdminComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
