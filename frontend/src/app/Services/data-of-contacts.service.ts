import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfContactsService {

  constructor(private _HttpClient:HttpClient) { }

  getContacts():Observable<any>{
    return this._HttpClient.get(url+`contact/`)
  }

  addNewContact(data :any):Observable<any>{
    return this._HttpClient.post(url+`contact/` , data)
  }

  deleteContact(id:any):Observable<any>{
    console.log(url+`contact/${id.ContactID}`);
    return this._HttpClient.delete(url+`contact/${id.ContactID}`)
  }


}
