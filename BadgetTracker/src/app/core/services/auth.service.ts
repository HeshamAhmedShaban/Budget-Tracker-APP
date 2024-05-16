import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser_login, Iuser_register } from '../models/iuser';
import { BehaviorSubject, Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  userData:Iuser_register={} as Iuser_register;

  user:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(this.isUserLogged)

  constructor(private http:HttpClient) {}

  public createUser(obj:Iuser_register):Observable<Iuser_register>{
    return this.http.post<Iuser_register>(`${this._url}AddNewUser`,obj)
  }

  public loginUser(obj:Iuser_login){
    return this.http.post(`${this._url}login`,obj)
}

  public userDataProfile(): Observable<Iuser_register | undefined> {
      const userDataString = localStorage.getItem('badgetUser');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        return of(userData); // Using of() to create an Observable
      } else {
        return of(undefined); // Return undefined if user data is not found
      }
    }


  public logout(){
    localStorage.removeItem('badgetUser');
    this.user.next(false);
  }

  getUserState():Observable<boolean>{
    return this.user.asObservable();
  }

  public get isUserLogged() {
    return localStorage.getItem('badgetUser') ? true : false;
  }

  }
