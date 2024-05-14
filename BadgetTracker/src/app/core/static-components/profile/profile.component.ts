import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Iuser_register } from '../../models/iuser';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {


  // userDataProfile:any={}
  userDataProfile:Iuser_register={} as Iuser_register;

  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.userDataProfile().subscribe((res:any)=>{
      console.log(res);
      this.userDataProfile=res
    })
  }

}
