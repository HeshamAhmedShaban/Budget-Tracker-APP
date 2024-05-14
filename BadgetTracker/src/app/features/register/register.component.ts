import { AuthService } from './../../core/services/auth.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Iuser_register } from '../../core/models/iuser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
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

constructor(private _authService:AuthService, private router:Router) { }


createUser(){
  this._authService.createUser(this.register).subscribe((res:any)=>{
  // console.log(res);
  if(res.result){
  }else{
    alert(res.message);
  }
  })
}

onLogin(){
  this._authService.loginUser(this.loginObj).subscribe((res:any)=>{
    // console.log(res);
    if(res.result){
      this._authService.userData=res.data
      console.log(this._authService.userData);
      localStorage.setItem('badgetUser',JSON.stringify(res.data));
      this.router.navigate(['/home'])
    }
    else{
      alert(res.message);
    }
  })
}
  
}
