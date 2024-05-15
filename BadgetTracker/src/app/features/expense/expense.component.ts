import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../core/services/transactions.service';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {


  public masterId:number=0

  constructor(private _transactionService:TransactionsService){}

  ngOnInit(): void {
    this._transactionService.expenseMasterId$.subscribe((data:number)=>{
      // console.log(data);
      this.masterId=data
    })
  }
} 