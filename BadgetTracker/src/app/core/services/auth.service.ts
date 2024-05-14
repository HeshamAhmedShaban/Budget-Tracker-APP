import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser_login, Iuser_register } from '../models/iuser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private http:HttpClient) { }

  public createUser(obj:Iuser_register):Observable<Iuser_register>{
    return this.http.post<Iuser_register>(`${this.url}AddNewUser`,obj)
  } 

  public loginUser(obj:Iuser_login){ 
    return this.http.post(`${this.url}login`,obj)
  }

  get isUserLogged() {
    return localStorage.getItem('badgetUser') ? true : false;
  }

  }
