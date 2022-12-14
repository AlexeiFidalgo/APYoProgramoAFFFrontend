import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile[] = [];
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.verTodo().subscribe(
      data =>{
        this.profile = data;
      })
  }

}
