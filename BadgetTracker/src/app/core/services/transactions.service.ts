import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private router:Router,private http :HttpClient) { }



  public getAllTransactionsType(){

    return this.http.get<any>(`${this.url}GetAllTransactionType`)
  }
}
