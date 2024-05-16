import { Component } from '@angular/core';
import { DashboardDataService } from '../../core/services/dashboard-data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  fromDate: string = '';
  toDate: string =  '';
  loggedUserId: number = 0;
  dashBoardData: any;


constructor(private _dashBoardService:DashboardDataService){}

  ngOnInit(): void {
    const loggedUser =  sessionStorage.getItem('budgetUser');
    if(loggedUser != null) {
      this.loggedUserId =  JSON.parse(loggedUser).userId;
    }
  }

  public getDashboardData() {
    this._dashBoardService.GetDashboardData(this.loggedUserId,this.fromDate,this.toDate).subscribe((res:any)=>{
      this.dashBoardData = res.data[0];
    })
  }
}
