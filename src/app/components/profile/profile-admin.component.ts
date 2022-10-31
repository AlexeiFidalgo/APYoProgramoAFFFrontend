import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  profile: Profile[] = [];
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.verTodo().subscribe(
      data =>{
        this.profile = data;
      })
  }

}
