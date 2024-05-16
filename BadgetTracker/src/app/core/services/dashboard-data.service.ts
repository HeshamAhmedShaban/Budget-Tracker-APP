import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  _url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private http :HttpClient) { }


public GetDashboardData(userId:number,fromDate: string,toDate: string) {
  return this.http.get(`${this._url}GetDashboardData?userId=${userId}&fromDate=${fromDate}&toDate=${toDate}`)
}
}
