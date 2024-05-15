import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { AddIncomeComponent } from '../../core/static-components/add-income/add-income.component';
import { TransactionsService } from '../../core/services/transactions.service';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule,AddIncomeComponent,ReactiveFormsModule,MatIconModule,MatDividerModule,MatButtonModule,MatToolbarModule,MatBadgeModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {

  transcationList: any[]=[];
  user!:{}
  constructor (private _dialog: MatDialog,private _transactionService:TransactionsService){ 
    const userLogged = localStorage.getItem('badgetUser');
    if(userLogged !=null){
      this.user = JSON.parse(userLogged)
    }
  }

  ngOnInit(): void {
    
  }
  public openAddIncomeForm() {
    this._dialog.open(AddIncomeComponent)
  }

  

}
