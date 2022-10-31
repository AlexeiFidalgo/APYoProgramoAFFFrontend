import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User= new User("","");
  form:FormGroup;
  constructor(private formbuilder:FormBuilder, private ruta:Router,private loginService:LoginService) {
    this.form= this.formbuilder.group(
      {
        username:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]]
      }
    )

   } 

  ngOnInit(): void {
  }

  userLogin(){
 
    console.log(this.user);
    this.loginService.loginUser(this.user).subscribe(data=>{
      window.location.href="/porfolioAdmin"
    },error=>alert("por favor ingrese un usuario y contraseña correcto"));
    
  }
  get Username()
  {
    return this.form.get('username');
  }

  get Password()
  {
    return this.form.get('password')
  }

}
