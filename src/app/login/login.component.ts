import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string= ''
  password:string = ''


  constructor(private userSer: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){

    
    this.userSer.userLogin(this.email, this.password).then(res=>{
      console.log(res)
      if(res.hasOwnProperty('token')){
        this.router.navigateByUrl("home")
        localStorage.setItem("token", res['token'])
      }

    })

  }

}
