import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsService } from '../../core/services/transactions.service';
import { Itransaction } from '../../core/models/itransaction';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {

  @Input() masterId: number = 0;

  transcationObj : Itransaction = {
    "transactionId": 0,
    "userId": 0,
    "categoryId": 0,
    "amount": 0,
    "date": "2024-05-04T10:47:53.460Z",
    "purpose": "",
    "transactionTypeId": 0
  }
  categoryList: any[]=[];
  transcationList: any[]=[];
  constructor (private _transactionService:TransactionsService){
    const loggedUser =  sessionStorage.getItem('budgetUser');
    if(loggedUser != null) {
      this.transcationObj.userId =  JSON.parse(loggedUser).userId;
    }
  }

  ngOnInit(): void {
    this.getAllTranscations();
  }

  public getCategoryByUser() {
    this._transactionService.getCategoryByUserIdd(this.transcationObj.userId).subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }
  public getAllTranscations() {
    this._transactionService.getTranscationByTypeId(this.masterId, this.transcationObj.userId).subscribe((res:any)=>{
      this.transcationList = res.data;
    })
  }
  public onSave() {
    debugger;
    this.transcationObj.transactionTypeId = this.masterId;
    this._transactionService.addNewTranscation(this.transcationObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Item Addedd Succes');
        this.getAllTranscations();
        this.closeModel();
      } else {
        alert(res.message)
      }
    })
  }
  public openModel() {
    this.getCategoryByUser();
    const modal =  document.getElementById('myModal');
    if(modal != null) {
      modal.style.display = 'block'
    }
  }

  public closeModel() {
    const modal =  document.getElementById('myModal');
    if(modal != null) {
      modal.style.display = 'none'
    }
  }



}
