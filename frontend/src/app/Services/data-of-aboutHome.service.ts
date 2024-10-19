import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfAboutHomesService {

  constructor(private _HttpClient:HttpClient) { }

  getAboutHome():Observable<any>{
    return this._HttpClient.get(url+`aboutHome/`)
  }

  addNewAboutHome(data :any):Observable<any>{
    return this._HttpClient.post(url+`aboutHome/aboutHome/` , data)
  }

  deleteAboutHome(id:any):Observable<any>{
    // console.log(url+`subjects/${id.id}`);
    return this._HttpClient.delete(url+`aboutHome/${id.id}`)
  }

  updateAboutHome(id:any , data:object):Observable<any>{
    console.log(url,`aboutHome/${id.AboutHomeID}` , data);
    return this._HttpClient.put(url+`aboutHome/${id.AboutHomeID}` , data)
  }



}
