import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { url } from './baseUrl';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

token:any;
decoded:any;
tokenForAdmin:any;

private _updateMenu = new Subject<void>();
get updateMenu(){
  return this._updateMenu;
}

  constructor(private _HttpClient: HttpClient) {}


  login(data: any): Observable<any> {
    return this._HttpClient.post(url + 'user/login', data);
  }


  isLoggedIn(): boolean {
    return !!localStorage.getItem('TOKEN');
  }

  // isloggedIn() {
  //   return !!localStorage.getItem('ToKen');
  // }

  getToken(){
    return localStorage.getItem('TOKEN') || '';
  }

  getRoleByToken(token:any){
    this.token = localStorage.getItem('TOKEN');
    this.decoded = jwtDecode(token);
    this.tokenForAdmin = this.decoded.role;
    // console.log(this.tokenForAdmin);
    return this.tokenForAdmin;
  }


}
