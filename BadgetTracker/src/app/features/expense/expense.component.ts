import { Component, Input, OnInit } from '@angular/core';
import { TransactionsService } from '../../core/services/transactions.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Itransaction } from '../../core/models/itransaction';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent implements OnInit {

  @Input() masterId: number = 0;

  public masterIdd:number=0

  constructor(private _transactionService:TransactionsService){}

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



  ngOnInit(): void {
    this.getAllTranscations();
  }

  getCategoryByUser() {
    this._transactionService.getCategoryByUserIdd(this.transcationObj.userId).subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }
  getAllTranscations() {
    this._transactionService.getTranscationByTypeId(this.masterId, this.transcationObj.userId).subscribe((res:any)=>{
      this.transcationList = res.data;
    })
  }
  onSave() {
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
