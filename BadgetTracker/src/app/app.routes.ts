import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './core/static-components/profile/profile.component';
import { RegisterComponent } from './features/register/register.component';



export const routeConfig: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'profile',component:ProfileComponent,title:'Profile'},
  {path:'register',component:RegisterComponent,title:'Register'},

];
