import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './core/static-components/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ExpenseComponent } from './features/expense/expense.component';
import { IncomeComponent } from './features/income/income.component';
import { Routes as Route } from './core/enums/routes';
import { userAuthGuard } from './core/guards/user-auth.guard';



export const routeConfig: Routes = [
  {path:Route.HOME,component:HomeComponent,title:'Home',canActivate:[userAuthGuard]},
  {path:Route.PROFILE,component:ProfileComponent,title:'Profile',canActivate:[userAuthGuard]},
  {path:Route.DASHBOARD,component:DashboardComponent,title:'Dashboard',canActivate:[userAuthGuard]},
  {path:Route.EXPENSE,component:ExpenseComponent,title:'Espense',canActivate:[userAuthGuard]},
  {path:Route.INCOME,component:IncomeComponent,title:'Income',canActivate:[userAuthGuard]},
  {path:'',redirectTo:Route.REGISTER, pathMatch:'full'},
  {path:Route.REGISTER,component:RegisterComponent,title:'Register'},

];
