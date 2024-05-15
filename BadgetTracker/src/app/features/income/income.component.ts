import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { AddIncomeComponent } from '../../core/static-components/add-income/add-income.component';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule,AddIncomeComponent,ReactiveFormsModule,MatIconModule,MatDividerModule,MatButtonModule,MatToolbarModule,MatBadgeModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {

  // transcationObj : any = {
  //   "transactionId": 0,
  //   "userId": 0,
  //   "categoryId": 0,
  //   "amount": 0,
  //   "date": "2024-05-04T10:47:53.460Z",
  //   "purpose": "",
  //   "transactionTypeId": 0
  // }

  categoryList : any = []
  transcationList: any[]=[];
  @ViewChild(AddIncomeComponent)data!:AddIncomeComponent
  constructor (private _dialog: MatDialog){}

  public openAddIncomeForm() {
    this._dialog.open(AddIncomeComponent)
  }

}
