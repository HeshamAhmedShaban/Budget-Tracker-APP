import { Component } from '@angular/core';
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
@Component({
  selector: 'app-add-income',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule,MatDialogModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatSelectModule,MatSnackBarModule,MatInputModule],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.css'
})
export class AddIncomeComponent {

  
  transcationObj : any = {
    "transactionId": 0,
    "userId": 0,
    "categoryId": 0,
    "amount": 0,
    "date": "2024-05-04T10:47:53.460Z",
    "purpose": "",
    "transactionTypeId": 0
  }

  categoryList : any = []

  constructor (private dialogRef:MatDialogRef<AddIncomeComponent>){}
}
