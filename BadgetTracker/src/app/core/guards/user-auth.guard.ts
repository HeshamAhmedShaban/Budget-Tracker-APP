import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Routes } from '../enums/routes';

export const userAuthGuard: CanActivateFn = (route, state) => {
  

    const router=inject(Router)
    const _authService=inject(AuthService)


    if((_authService as any).isUserLogged){
      return true
    }else{
      alert('you must login first')
      router.navigate([Routes.REGISTER])
      return false
    }

};
