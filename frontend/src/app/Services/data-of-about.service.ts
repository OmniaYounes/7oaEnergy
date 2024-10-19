import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfAboutsService {

  constructor(private _HttpClient:HttpClient) { }

  getAbout():Observable<any>{
    return this._HttpClient.get(url+`about/`)
  }

  // addNewabout(data :any):Observable<any>{
  //   return this._HttpClient.post(url+`about/` , data)
  // }

  // deleteabout(id:any):Observable<any>{
  //   // console.log(url+`subjects/${id.id}`);
  //   return this._HttpClient.delete(url+`about/${id.id}`)
  // }

  // getOneabout(name:any):Observable<any>{
  //   // console.log(url+`subjects/${id.id}`);
  //   return this._HttpClient.delete(url+`about/${name.name}`)
  // }
  updateAbout( id:any , data:object):Observable<any>{
    // console.log(url+`about/${id.AboutID}` , data);
    return this._HttpClient.put(url+`about/${id.AboutID}`,data)
  }


}
