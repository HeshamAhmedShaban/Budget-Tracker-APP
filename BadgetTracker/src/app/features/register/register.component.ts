import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  isLogin:boolean= false;

  register: any = { 
    "userId": 0,
    "userName":"",
    "emailId":"",
    "fullName":"",
    "role":"",
    "createdDate": new Date(),
    "password":"" 
}

loginObj: any = {
  "userName": "",
  "password": ""
}

constructor(private authService:AuthService, private router:Router) { }


createUser(){

}

onLogin(){}

}
