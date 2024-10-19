import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfPrintingService {

  constructor(private _HttpClient:HttpClient) { }

  getPrinting():Observable<any>{
    return this._HttpClient.get(url+`printing/`)
  }

  addNewPrinting(data :any):Observable<any>{
    return this._HttpClient.post(url+`printing/printing/` , data)
  }

  deletePrinting(id:any):Observable<any>{
    return this._HttpClient.delete(url+`printing/${id.PrintingID}`)
  }

  updatePrinting(id:any , data:object):Observable<any>{
    return this._HttpClient.put(url+`printing/${id.PrintingID}` , data)
  }



}
