import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itransaction } from '../models/itransaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactionList:BehaviorSubject<any>=new BehaviorSubject<any>([]);
  public transactionList$:Observable<any>=this.transactionList.asObservable();

  private categoryList:BehaviorSubject<any>=new BehaviorSubject<any>([]);
  public categoryList$:Observable<any>=this.categoryList.asObservable();

  private expenseMasterId:BehaviorSubject<any>=new BehaviorSubject<any>(0);
  public expenseMasterId$:Observable<any>=this.expenseMasterId.asObservable();

  private incomeMasterId:BehaviorSubject<any>=new BehaviorSubject<any>(0);
  public incomeMasterId$:Observable<any>=this.incomeMasterId.asObservable();



  url:string='https://projectapi.gerasim.in/api/BudgetPlanner/'

  constructor(private http :HttpClient) { }



  public getAllTransactionsType(){
    return this.http.get<Itransaction>(`${this.url}GetAllTransactionType`).subscribe((data)=>{
      console.log(data);
      this.transactionList.next(data)
      this.transactionList.subscribe((data)=>{
        if(data.masterName == 'Income'){
          this.incomeMasterId.next(data.masterId)
        }
        if(data.masterName == 'Expense'){
          this.expenseMasterId.next(data.masterId)
        }
      })
    })
  }

  public getCategoryByUserId(id:number){
    return this.http.get<any>(`${this.url}GetCategoryByUserId?userId=${id}`).subscribe((data)=>{
      this.categoryList.next(data)
    })
  }

  public addNewTransaction(obj:Itransaction){
    return this.http.post<any>(`${this.url}AddNewTransaction`,obj)
  }

  public getTransactionById(transactionTd:number,userId:number){
    return this.http.get<any>(`${this.url}GetTransactionByTypeId?transactionId=${transactionTd}&userId=${userId}`)
  }
}
