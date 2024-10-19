import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfServicesService {

  constructor(private _HttpClient:HttpClient) { }

  getServicess():Observable<any>{
    return this._HttpClient.get(url+`services/`)
  }

  addNewServices(data :any):Observable<any>{
    return this._HttpClient.post(url+`services/services/` , data)
  }

  deleteServices(id:any):Observable<any>{
    // console.log(url+`subjects/${id.id}`);
    return this._HttpClient.delete(url+`services/${id.ServicesID}`)
  }

  updateServices(id:any , data:object):Observable<any>{
    console.log(url+`services/${id.ServicesID}` , data);
    console.log(id.ServiceID);
    return this._HttpClient.put(url+`services/${id.ServiceID}` , data)
  }


}
