import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExpenseComponent } from '../expense/expense.component';
import { IncomeComponent } from '../income/income.component';
import { TransactionsService } from '../../core/services/transactions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent,ExpenseComponent,IncomeComponent,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  selectedTab: string = 'Dashboard';
  transacationList: any[]=[];
  incomeMasterId: number = 0;
  expenseMasterId: number = 0;


constructor(private _transactionService:TransactionsService ) { }

ngOnInit(): void {
  this.getTranscationType()
}

public changeTab(tab:string) {
  this.selectedTab = tab;
}

public getTranscationType(){
  this._transactionService.getAllTransactionType().subscribe((res:any)=>{
  this.transacationList=res.data
  })

  const income = this.transacationList.find((item:any) => item.masterName === 'Income');
    if(income) {
        this.incomeMasterId = income.masterId;
  }
  const expense = this.transacationList.find(m=>m.masterName =='Expense');
    if(income) {
        this.expenseMasterId = expense.masterId;
}
}

}
