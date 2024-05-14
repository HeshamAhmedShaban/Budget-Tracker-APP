import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser_login, Iuser_register } from '../models/iuser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private http:HttpClient) { }

  public createUser(obj:Iuser_register){
    return this.http.post(`${this.url}AddNewUser`,obj)
  } 

  public loginUser(obj:Iuser_login){ 
    return this.http.post(`${this.url}login`,obj)
  }

  }
