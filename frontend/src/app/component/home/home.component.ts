import { Component, OnInit } from '@angular/core';
import { DataOfPrintingService } from '../../Services/data-of-printing.service';
import { DataOfPrintersService } from '../../Services/data-of-printers.service';
import { DataOfAboutHomesService } from '../../Services/data-of-aboutHome.service';
import { DataOfServicesService } from '../../Services/data-of-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


AllServices: any[] = [];
AllPrintings: any[] = [];
AllPrinters: any[] = [];
AllAboutHome: any[] = [];

servicesUrl: string = 'http://localhost:4000/services/';
PrintingUrl: string = 'http://localhost:4000/printing/';
PrinterUrl: string = 'http://localhost:4000/printers/';
AboutHomeUrl: string = 'http://localhost:4000/aboutHome/';


getImageServicesPath(image: string): string {
  return this.servicesUrl + image;
}

getImagePrintingPath(image: string): string {
  return this.PrintingUrl + image;
}

getImagePrinterPath(image: string): string {
  return this.PrinterUrl + image;
}

getImageAboutHomePath(image: string): string {
  return this.AboutHomeUrl + image;
}

constructor(
  private _dataOfPrintings:DataOfPrintingService,
  private _dataOfPrinters:DataOfPrintersService,
  private _dataOfAboutHome:DataOfAboutHomesService,
  private _dataOfServices:DataOfServicesService,
){
  this.getAboutHome();
  this.getAllServices();
  this.getAllPrinting();
  this.getAllPrinters();
}
getAllPrinting(){
  this._dataOfPrintings.getPrinting().subscribe((res) => {
    this.AllPrintings = res.result;
  });
}

getAllPrinters(){
  this._dataOfPrinters.getPrinters().subscribe((res) => {
    this.AllPrinters = res.result;
  });
}

getAllServices(){
  this._dataOfServices.getServicess().subscribe((res) => {
    this.AllServices = res.result;
  });
}

getAboutHome(){
  this._dataOfAboutHome.getAboutHome().subscribe((res) => {
    this.AllAboutHome = res.result;
  });
}

  ngOnInit(): void {

  }
}
