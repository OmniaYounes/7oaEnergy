import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfUserService {

  constructor(private _HttpClient:HttpClient) { }

  getusers():Observable<any>{
    return this._HttpClient.get(url+`user/`)
  }

  addNewuser(data :any):Observable<any>{
    return this._HttpClient.post(url+`user/` , data)
  }

  deleteuser(id:any):Observable<any>{
    // console.log(url+`user/${id.UserID}`);
    return this._HttpClient.delete(url+`user/${id.UserID}`)
  }
  updateUser(id:any ,data:object):Observable<any>{
    // console.log(url+`user/${id.UserID}` , data);
    return this._HttpClient.put(url+`user/${id.UserID}` , data)
  }



}
