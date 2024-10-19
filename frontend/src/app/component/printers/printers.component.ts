import { Component, OnInit } from '@angular/core';
import { DataOfPrintersService } from '../../Services/data-of-printers.service';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrl: './printers.component.css'
})
export class PrintersComponent implements OnInit {

  AllPrinters:any[]=[];

  constructor(
    private _dataOfPrinters: DataOfPrintersService,
  ) {
    this.getAllPrinters();
  }

  PrinterUrl: string = 'http://localhost:4000/printers/';

  getImagePrinterPath(image: string): string {
    return this.PrinterUrl + image;
  }

  getAllPrinters(){
    this._dataOfPrinters.getPrinters().subscribe((res) => {
      this.AllPrinters = res.result;
    });
  }

  ngOnInit(): void {

  }
}
