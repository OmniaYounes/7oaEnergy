import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataOfAboutsService } from '../../Services/data-of-about.service';
import { DataOfServicesService } from '../../Services/data-of-services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit , OnDestroy {

  baseUrl: string = 'http://localhost:4000/about/';  // المسار الثابت أو المطلق

  getImagePath(image: string): string {
    return this.baseUrl + image;
  }
  serviceUrl: string = 'http://localhost:4000/services/';  // المسار الثابت أو المطلق

  getImageServicePath(image: string): string {
    return this.serviceUrl + image;
  }

  AllAbout: any[] = [];
  AllService: any[] = [];
  images:any;


  constructor(private _dataOfAbout:DataOfAboutsService , private _dataOfSrvice: DataOfServicesService) {
    this.getAbout();
    this.getAllServices();
  }

  onFileSelected(event:any){
    const file= event.target.files[0];
    this.images = file;
    console.log(this.images);
  }
  getAbout(){
    this._dataOfAbout.getAbout().subscribe((res) => {
      // this.isload= true
      this.AllAbout = res.result;
      // console.log(res.result);
    });
  }

  getAllServices(){
    this._dataOfSrvice.getServicess().subscribe((res) => {
      this.AllService = res.result;
    });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = (): void => {
    // Use querySelectorAll to select all elements with the class 'scroll-element'
    const elements = document.querySelectorAll<HTMLElement>('.scroll-element');
    const triggerBottom = window.innerHeight / 5 * 4;

    // Iterate through all the elements
    elements.forEach((box: any) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show'); // Add the class when in view
      } else {
        box.classList.remove('show'); // Optionally remove the class when out of view
      }
    });
  }

  // Clean up the event listener to prevent memory leaks
  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  }

}


