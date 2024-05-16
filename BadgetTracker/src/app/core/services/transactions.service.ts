import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itransaction } from '../models/itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {;

  _url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private http :HttpClient) { }

  public getAllTransactionType () {
    return this.http.get(`${this._url}GetAllTransactionType`)
  }

  public getCategoryByUserIdd(id: number) {
    return this.http.get(`${this._url}GetCategoryByUserId?userId=${id}`)
  }

  public addNewTranscation(obj:Itransaction) {
    return this.http.post(`${this._url}AddNewTransaction`,obj)
  }

  public getTranscationByTypeId(transactionTypeId: number, userId: number) {
    return this.http.get(`${this._url}GetTranscationByTypeId?transactionTypeId=${transactionTypeId}&userId=${userId}`)
  }

}
