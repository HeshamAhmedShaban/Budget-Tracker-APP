import { Component, OnInit } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {  MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { TransactionsService } from '../../services/transactions.service';
import { Itransaction } from '../../models/itransaction';
@Component({
  selector: 'app-add-income',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,MatDialogModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatSnackBarModule,MatInputModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent implements OnInit {

  
  transcationObj : any = {
    "transactionId": 0,
    "userId": 0,
    "categoryId": 0,
    "amount": 0,
    "date": new Date(),
    "purpose": "",
    "transactionTypeId": 0
  }

  categoryList : any = []
  incomeId:number=0

  constructor (private dialogRef:MatDialogRef<AddIncomeComponent>,private _transactionService:TransactionsService){
    const userLogged = localStorage.getItem('badgetUser');
    if(userLogged !=null){
      this.transcationObj.userId = JSON.parse(userLogged).userId
    }
  }

  ngOnInit(): void {
    this.getincomeId();
    this.getCategoryByUser();
    this.getAllTransactions()
  }

  public getincomeId(){
    this._transactionService.incomeMasterId$.subscribe((data:number)=>{
      // console.log(data);
      this.incomeId=data
    })
  }


  public getCategoryByUser(){
    this._transactionService.categoryList$.subscribe((data:any)=>{
      this.categoryList = data
    })
    
  }
  public addIncome(){
    this.transcationObj.transactionTypeId = this.incomeId
    this._transactionService.addNewTransaction(this.transcationObj).subscribe((res:Itransaction)=>{
      console.log(res);
      this.dialogRef.close(res)
    })
  }

  public getAllTransactions(){
    this._transactionService.getTransactionById(this.transcationObj.transactionId,this.transcationObj.userId).subscribe((data)=>{
      console.log(data);
    })
  }

}
