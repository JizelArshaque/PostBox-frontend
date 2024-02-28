import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authStatus = inject(AuthService)
  const router = inject(Router)
  if(authStatus.isLogged()){
    return true
  }else{
    router.navigateByUrl('')
    return false
    
  }
};
