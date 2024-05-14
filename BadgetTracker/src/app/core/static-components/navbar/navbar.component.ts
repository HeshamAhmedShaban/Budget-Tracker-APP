import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userLoged:boolean=false
  constructor(private router:Router,private _authService:AuthService) { }

  ngOnInit(): void {
    this._authService.getUserState().subscribe({
      next:(state)=>{
        this.userLoged=state
      }
    })
  }

  changeRoute(){
    if(this.userLoged){
      this._authService.logout()
    }
    if(!this.userLoged){
      this.router.navigate(['/register'])
    }
  }

}
