import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class navBarUrlGuard implements CanActivate {
  currentRole:any;
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    _router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLoggedIn()) {
        return true;
  }else{
    alert('you are not authorized to access this page');
    this._router.navigate(['/login'])
    return false;
  }
  }
}
