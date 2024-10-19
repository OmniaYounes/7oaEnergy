import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from './baseUrl';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DataOfPrintersService {

  constructor(private _HttpClient:HttpClient) { }

  getPrinters():Observable<any>{
    return this._HttpClient.get(url+`printer/`)
  }

  addNewPrinter(data :any):Observable<any>{
    return this._HttpClient.post(url+`printer/printer/` , data)
  }

  deletePrinter(id:any):Observable<any>{
    console.log(url+`printer/${id.PrinterID}`);

    return this._HttpClient.delete(url+`printer/${id.PrinterID}`)
  }

  updatePrinter(id:any , data:object):Observable<any>{
    return this._HttpClient.put(url+`printer/${id.PrinterID}` , data)
  }



}
