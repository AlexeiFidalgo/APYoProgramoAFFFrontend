import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/model/profile';
import { ImageService } from 'src/app/service/image.service';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profile:Profile = new Profile("","","","","","");
  constructor(private profileService: ProfileService,
    public imageService :ImageService,
    private activatedRouter : ActivatedRoute,
    private router: Router) {
     }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.profileService.verPorId(id).subscribe(
      data =>{
        this.profile = data;
        
        console.log(this.profile)
      }, err =>{
         alert("hubo un error");
         this.router.navigate(['']);
      }
    )
  }

  onEdit(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.profileService.modificar(id, this.profile).subscribe(
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
    const name = "perfil_" + id;
    this.imageService.uploadImage($event,name);
    console.log("uploadImage okay")
  }
}
