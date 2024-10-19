import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataOfUserService } from '../../Services/data-of-user.services';
import { DataOfAboutsService } from '../../Services/data-of-about.service';
import { DataOfServicesService } from '../../Services/data-of-services.service';
import Swal from 'sweetalert2';
import { DataOfPrintingService } from '../../Services/data-of-printing.service';
import { DataOfPrintersService } from '../../Services/data-of-printers.service';
import { DataOfContactsService } from '../../Services/data-of-contacts.service';
import { DataOfAboutHomesService } from '../../Services/data-of-aboutHome.service';
declare var $:any

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent implements OnInit , OnDestroy {
  @ViewChild('updateuser') form: NgForm |any;
  isload= true;

//  ********************* all ***********************
  AllAbout: any[] = [];
  AllServices: any[] = [];
  AllPrintings: any[] = [];
  AllUsers: any[] = [];
  AllPrinters: any[] = [];
  AllAboutHome: any[] = [];
  AllContacts: any[] = [];

// ******************* variables ***************
  // userID: any;
  // ServicesID: any;
  CurrentUser:any
  CurrentContact:any
  CurrentAbout:any
  CurrentAboutHome:any
  CurrentService:any
  CurrentPrinting:any
  CurrentPrinter:any
  // CurrentServices:any
  image:any;
  userID:any
  aboutID:any
  printerID:any
  printingID:any
  serviceID:any
  aboutHomeID:any
  contactID:any
  dataforedituser:any;



// ****************** constructor ***************
  constructor(
    private _dataOfAbout:DataOfAboutsService,
    private _dataOfServices:DataOfServicesService,
    private _dataOfPrintings:DataOfPrintingService,
    private _dataOfUsers: DataOfUserService,
    private _dataOfPrinters: DataOfPrintersService,
    private _dataOfContacts: DataOfContactsService,
    private _dataOfAboutHome: DataOfAboutHomesService,
  ) {
    this.getAbout();
    this.getAllServices();
    this.getAllPrinting();
    this.getAllUsers();
    this.getAllPrinters();
    this.getAllContacts();
    this.getAboutHome();
  }

//  ******************* id ******************
getIdForUser(id:any){
  this.userID= id;
  // console.log(id);
}

getIdForContact(id:any){
  this.contactID= id;
  console.log(id);
}

getIdForServices(id:any){
  this.serviceID= id;
  console.log(id);
}

getIdForPrinting(id:any){
  this.printingID= id;
  console.log(id);
}

getIdForPrinter(id:any){
  this.printerID= id;
  console.log(id);
}

getIdForAbout(id:any){
  this.aboutID= id;
  console.log(id);
}

getIdForAboutHome(id:any){
  this.aboutHomeID= id;
  console.log(id);
}



  // **************** images ***********************
//            ********* images URL ********
aboutUrl: string = 'http://localhost:4000/about/';  // المسار الثابت أو المطلق
servicesUrl: string = 'http://localhost:4000/services/';
PrintingUrl: string = 'http://localhost:4000/printing/';
PrinterUrl: string = 'http://localhost:4000/printers/';
AboutHomeUrl: string = 'http://localhost:4000/aboutHome/';


//            ********* images path ********
getImageAboutPath(image: string): string {
  return this.aboutUrl + image;
}

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


//            ********* images file ********
selectedFileServices: File | null = null;  // To store the selected file
selectedFilePrinting: File | null = null;
selectedFilePrinter: File | null = null;

//            ********* images changing file ********
changeFileServices(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.selectedFileServices = file;  // Store the file
  }
}

changeFilePrinting(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.selectedFilePrinting = file;  // Store the file
  }
}

changeFilePrinter(event:any){
  if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.selectedFilePrinter = file;  // Store the file
  }
}


// ******************** get ***********************
getAllUsers(){
  this._dataOfUsers.getusers().subscribe((res) => {
    this.AllUsers = res.result;
    // console.log(res.result);
  });
}

getAbout(){
  this._dataOfAbout.getAbout().subscribe((res) => {
    this.AllAbout = res.result;
  });
}

getAllServices(){
  this._dataOfServices.getServicess().subscribe((res) => {
    this.AllServices = res.result;
  });
}

getAllContacts(){
  this._dataOfContacts.getContacts().subscribe((res) => {
    this.AllContacts = res.result;
  });
}

getAllPrinters(){
  this._dataOfPrinters.getPrinters().subscribe((res) => {
    this.AllPrinters = res.result;
  });
}

getAboutHome(){
  this._dataOfAboutHome.getAboutHome().subscribe((res) => {
    this.AllAboutHome = res.result;
  });
}

getAllPrinting(){
  this._dataOfPrintings.getPrinting().subscribe((res) => {
    this.AllPrintings = res.result;
  });
}

// ******************** post **********************
//            ********* post forms ********
addUser: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
  role: new FormControl('', [Validators.required]),
  phone: new FormControl('', [Validators.required]),
});

addServices: FormGroup = new FormGroup({
  title: new FormControl('', [Validators.required ]),
  image: new FormControl('', [Validators.required ]),
  desc: new FormControl('', [Validators.required]),
});

addPrinting: FormGroup = new FormGroup({
  image: new FormControl('', [Validators.required ]),
  name: new FormControl('', [Validators.required]),
});

addPrinter: FormGroup = new FormGroup({
  image: new FormControl('', [Validators.required ]),
  name: new FormControl('', [Validators.required]),
  BuildVolume: new FormControl('', [Validators.required]),
  mainboard: new FormControl('', [Validators.required]),
  PrintPrecision: new FormControl('', [Validators.required]),
  NozzleDiameter: new FormControl('', [Validators.required]),
  SupportFilaments: new FormControl('', [Validators.required]),
  PrintSpeed: new FormControl('', [Validators.required]),
  NozzleTemperature: new FormControl('', [Validators.required]),
  HotBedTemperature: new FormControl('', [Validators.required]),
  SlicingSoftware: new FormControl('', [Validators.required]),
  fileFormats: new FormControl('', [Validators.required]),
  InputVoltage: new FormControl('', [Validators.required]),
  MachineSize: new FormControl('', [Validators.required]),
  MachineWeight: new FormControl('', [Validators.required]),
});

addAbout: FormGroup = new FormGroup({
  image: new FormControl(''),
  desc: new FormControl('', [Validators.required]),
});

addAboutHome: FormGroup = new FormGroup({
  image: new FormControl(''),
  desc: new FormControl('', [Validators.required]),
  headerSideLayer: new FormControl('', [Validators.required]),
  sideLayer: new FormControl(''),
});


//            ********* post coding ********
sendServicesData(){
  // console.log(this.addServices.value);
  let formData = new FormData();
  formData.append('title',this.addServices.get('title')?.value);
  if (this.selectedFileServices) {
    formData.append('image', this.selectedFileServices);  // Append the actual file
  }
  formData.append('desc',this.addServices.get('desc')?.value);
  // console.log(formData);

  this._dataOfServices.addNewServices(formData).subscribe(response => {
    if(response.message == "Addition succeeded"){
      this.alertWithSuccess();
      this.getAllServices();
      this.addServices.reset();
      $('#ServicesModal').modal('hide');  // Corrected typo from 'model' to 'modal'
    }else{
      // Show error alert
      this.alertWithError();
    }
    // console.log(response);
  }, err =>{
    console.log(err);
  });
}

sendPrintingData(){
  let formData = new FormData();
  if (this.selectedFilePrinting) {
    formData.append('image', this.selectedFilePrinting);
  }
  formData.append('name',this.addPrinting.get('name')?.value);

  this._dataOfPrintings.addNewPrinting(formData).subscribe(response => {
    if(response.message == "Addition succeeded"){
      this.alertWithSuccess();
      this.getAllPrinting();
      this.addPrinting.reset();
      $('#PrintingModal').modal('hide');
    }else{
      this.alertWithError();
    }
  }, err =>{
    console.log(err);
  });
}

sendPrinterData(){
  let formData = new FormData();
  if (this.selectedFilePrinter) {
    formData.append('image', this.selectedFilePrinter);
  }
  formData.append('name',this.addPrinter.get('name')?.value);
  formData.append('BuildVolume',this.addPrinter.get('BuildVolume')?.value);
  formData.append('mainboard',this.addPrinter.get('mainboard')?.value);
  formData.append('PrintPrecision',this.addPrinter.get('PrintPrecision')?.value);
  formData.append('NozzleDiameter',this.addPrinter.get('NozzleDiameter')?.value);
  formData.append('SupportFilaments',this.addPrinter.get('SupportFilaments')?.value);
  formData.append('PrintSpeed',this.addPrinter.get('PrintSpeed')?.value);
  formData.append('NozzleTemperature',this.addPrinter.get('NozzleTemperature')?.value);
  formData.append('HotBedTemperature',this.addPrinter.get('HotBedTemperature')?.value);
  formData.append('SlicingSoftware',this.addPrinter.get('SlicingSoftware')?.value);
  formData.append('fileFormats',this.addPrinter.get('fileFormats')?.value);
  formData.append('InputVoltage',this.addPrinter.get('InputVoltage')?.value);
  formData.append('MachineSize',this.addPrinter.get('MachineSize')?.value);
  formData.append('MachineWeight',this.addPrinter.get('MachineWeight')?.value);

  this._dataOfPrinters.addNewPrinter(formData).subscribe(response => {
    if(response.message == "Addition succeeded"){
      this.alertWithSuccess();
      this.getAllPrinters();
      this.addPrinter.reset();
      $('#PrinterModal').modal('hide');
    }else{
      this.alertWithError();
    }
  }, err =>{
    console.log(err);
  });
}

sendUserData(){
  let formData = {
    name: this.addUser.value.name,
    email: this.addUser.value.email,
    password: this.addUser.value.password,
    phone: this.addUser.value.phone,
    role: this.addUser.value.role
  };

  this._dataOfUsers.addNewuser(formData).subscribe(response => {
    if(response.message == "Addition succeeded"){
      this.alertWithSuccess();
      this.getAllUsers();
      this.addUser.reset();
      $('#UserModal').modal('hide');
    }else{
      this.alertWithError();
    }
  }, err =>{
    console.log(err);
  });
}


// ******************** put ***********************
//                     put setValue
setValueForUser(){
  for (let index = 0; index < this.AllUsers.length; index++) {
    if(this.AllUsers[index]._id==this.userID){
      // console.log(this.AllUsers[index]);
      this.CurrentUser = this.AllUsers[index];
      console.log(this.CurrentUser);

      this.addUser.patchValue({
        name: this.CurrentUser.name,
        email: this.CurrentUser.email,
        password: this.CurrentUser.password,
        phone: this.CurrentUser.phone,
        role: this.CurrentUser.role
      });
    }
  }
}

setValueForServices(){
  for (let index = 0; index < this.AllServices.length; index++) {
    if(this.AllServices[index]._id==this.serviceID){
      // console.log(this.AllServices[index]);
      this.CurrentService = this.AllServices[index];
      console.log(this.CurrentService);

      this.addServices.patchValue({
        title: this.CurrentService.title,
        image: this.CurrentService.image,
        desc: this.CurrentService.desc,
      });
    }
  }
}

setValueForPrinting(){
  for (let index = 0; index < this.AllPrintings.length; index++) {
    if(this.AllPrintings[index]._id==this.printingID){
      // console.log(this.AllPrintings[index]);
      this.CurrentPrinting = this.AllPrintings[index];
      console.log(this.CurrentPrinting);

      this.addUser.patchValue({
        name: this.CurrentPrinting.name,
        image: this.CurrentPrinting.image,
      });
    }
  }
}

setValueForPrinter(){
  for (let index = 0; index < this.AllPrinters.length; index++) {
    if(this.AllPrinters[index]._id==this.printerID){
      // console.log(this.AllPrinters[index]);
      this.CurrentPrinter = this.AllPrinters[index];
      console.log(this.CurrentPrinter);

      this.addPrinter.patchValue({
      name : this.CurrentPrinter.name,
      image : this.CurrentPrinter.image,
      BuildVolume : this.CurrentPrinter.BuildVolume,
      mainboard : this.CurrentPrinter.mainboard,
      PrintPrecision : this.CurrentPrinter.PrintPrecision,
      NozzleDiameter : this.CurrentPrinter.NozzleDiameter,
      SupportFilaments : this.CurrentPrinter.SupportFilaments,
      PrintSpeed : this.CurrentPrinter.PrintSpeed,
      NozzleTemperature : this.CurrentPrinter.NozzleTemperature,
      HotBedTemperature : this.CurrentPrinter.HotBedTemperature,
      SlicingSoftware : this.CurrentPrinter.SlicingSoftware,
      fileFormats : this.CurrentPrinter.fileFormats,
      InputVoltage : this.CurrentPrinter.InputVoltage,
      MachineSize : this.CurrentPrinter.MachineSize,
      MachineWeight : this.CurrentPrinter.MachineWeight
      })
    }
  }
}

setValueForAbout(){
  for (let index = 0; index < this.AllAbout.length; index++) {
    if(this.AllAbout[index]._id==this.aboutID){
      // console.log(this.AllAbout[index]);
      this.CurrentAbout = this.AllAbout[index];
      console.log(this.CurrentAbout);

      this.addAbout.patchValue({
        desc: this.CurrentAbout.desc,
      });

      console.log(this.addAbout.value.desc);

    }
  }
}

setValueForAboutHome(){
  for (let index = 0; index < this.AllAboutHome.length; index++) {
    if(this.AllAboutHome[index]._id==this.aboutHomeID){
      // console.log(this.AllAboutHome[index]);
      this.CurrentAboutHome = this.AllAboutHome[index];
      console.log(this.CurrentAboutHome);

      this.addAboutHome.patchValue({
        desc: this.CurrentAboutHome.desc,
        sideLayer: this.CurrentAboutHome.sideLayer,
        headerSideLayer: this.CurrentAboutHome.headerSideLayer,
      });
    }
  }
}


//                     put coding
updateUser(){
    // Ensure form is valid before proceeding
    if (this.addUser.valid) {
      let data = {
        name: this.addUser.value.name,
        email: this.addUser.value.email,
        password: this.addUser.value.password,
        phone: this.addUser.value.phone,
        role: this.addUser.value.role,
      };
      let id = {
        UserID: this.userID  // Assuming userID is set earlier
      }

    this._dataOfUsers.updateUser(id , data).subscribe(response => {
      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAllUsers();
        $('#updateUser').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

updateAbout(){
  console.log(this.addAbout.value.desc);

  // Ensure form is valid before proceeding
    if (this.addAbout.valid) {
      let data = {
        desc: this.addAbout.value.desc,
      };
      let id = {
        AboutID: this.aboutID  // Assuming userID is set earlier
      }

    this._dataOfAbout.updateAbout(id , data).subscribe(response => {
      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAbout();
        $('#updateAbout').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

updateAboutHome(){
  console.log(this.addAboutHome.value.desc);

  // Ensure form is valid before proceeding
    if (this.addAboutHome.valid) {
      let data = {
        desc: this.addAboutHome.value.desc,
        sideLayer: this.addAboutHome.value.sideLayer,
        headerSideLayer: this.addAboutHome.value.headerSideLayer,
      };
      let id = {
        AboutHomeID: this.aboutHomeID  // Assuming userID is set earlier
      }

      console.log(data , id);


    this._dataOfAboutHome.updateAboutHome(id , data).subscribe(response => {
      response
      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAboutHome();
        $('#updateAboutHome').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

updateServices(){
  console.log(this.addServices.value);
  // Ensure form is valid before proceeding
    if (this.addServices.valid) {
      let data = {
        title: this.addServices.value.title,
        image: this.addServices.value.image,
        desc: this.addServices.value.desc,
      };
      let id = {
        ServiceID: this.serviceID  // Assuming userID is set earlier
      }

    this._dataOfServices.updateServices(id , data).subscribe(response => {
      console.log(response);

      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAllServices();
        $('#updateServices').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

updatePrinting(){
  console.log(this.addPrinting.value);
  // Ensure form is valid before proceeding
    if (this.addPrinting.valid) {
      let data = {
        name: this.addPrinting.value.name,
        image: this.addPrinting.value.image,
      };
      let id = {
        PrintingID: this.printingID  // Assuming userID is set earlier
      }

    this._dataOfPrintings.updatePrinting(id , data).subscribe(response => {
      console.log(response);
      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAllPrinting();
        $('#updatePrinting').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

updateprinter(){
  // console.log(this.addPrinter.value);
  // Ensure form is valid before proceeding
    if (this.addPrinter.valid) {
      let data = {
        image:this.addPrinter.value.image,
        name: this.addPrinter.value.name,
        BuildVolume: this.addPrinter.value.BuildVolume,
        mainboard: this.addPrinter.value.mainboard,
        PrintPrecision: this.addPrinter.value.PrintPrecision,
        NozzleDiameter: this.addPrinter.value.NozzleDiameter,
        SupportFilaments: this.addPrinter.value.SupportFilaments,
        PrintSpeed: this.addPrinter.value.PrintSpeed,
        NozzleTemperature: this.addPrinter.value.NozzleTemperature,
        HotBedTemperature: this.addPrinter.value.HotBedTemperature,
        SlicingSoftware: this.addPrinter.value.SlicingSoftware,
        fileFormats: this.addPrinter.value.fileFormats,
        InputVoltage: this.addPrinter.value.InputVoltage,
        MachineSize: this.addPrinter.value.MachineSize,
        MachineWeight: this.addPrinter.value.MachineWeight,
      };
      let id = {
        PrinterID: this.printerID  // Assuming userID is set earlier
      }

    this._dataOfPrinters.updatePrinter(id , data).subscribe(response => {
      if(response.result=="Updated"){
        this.alertWithSuccess();
        this.getAllPrinters();
        $('#updatePrinter').modal('hide');
      }else{
        this.alertWithError();
      }
    });
    } else {
      console.error('Form is invalid');
    }
}

// ******************** delete ********************
  deleteUser(){
    let data ={
      UserID:this.userID
    }

    this._dataOfUsers.deleteuser(data).subscribe(res=>{
      // console.log(res);
      if(res.result=="Deleted"){
        this.alertWithSuccess();
        this.getAllUsers();
        $('#deleteUser').modal('hide');
      }else{
        this.alertWithError();
      }
    })
  }

  deleteContact(){
    let data ={
      ContactID:this.contactID
    }

    this._dataOfContacts.deleteContact(data).subscribe(res=>{
      if(res.result=="Deleted"){
        this.alertWithSuccess();
        this.getAllContacts();
        $('#deleteContact').modal('hide');
      }else{
        this.alertWithError();
      }
    })
  }

  deleteServices(){
    let data ={
      ServicesID:this.serviceID
    }

    this._dataOfServices.deleteServices(data).subscribe(res=>{
      if(res.result=="Deleted"){
        this.alertWithSuccess();
        this.getAllServices();
        $('#deleteService').modal('hide');
      }else{
        this.alertWithError();
      }
    })
  }

  deletePrinting(){
    let data ={
      PrintingID:this.printingID
    }

    this._dataOfPrintings.deletePrinting(data).subscribe(res=>{
      if(res.result=="Deleted"){
        this.alertWithSuccess();
        this.getAllPrinting();
        $('#deletePrinting').modal('hide');
      }else{
        this.alertWithError();
      }
    })
  }

  deletePrinter(){
    let data ={
      PrinterID:this.printerID
    }

    this._dataOfPrinters.deletePrinter(data).subscribe(res=>{
      if(res.result=="Deleted"){
        this.alertWithSuccess();
        this.getAllPrinters();
        $('#deletePrinter').modal('hide');
      }else{
        this.alertWithError();
      }
    })
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

ngOnInit(): void {
window.addEventListener('scroll', this.onScroll);
}

//////////////*  alert for success message for adding *////////////////
alertWithSuccess(){
  Swal.fire({
    text: 'successful',
    icon: 'success',
  })
}
alertWithError(){
  Swal.fire({
    title: 'error!!',
    text: 'ERROR',
    icon: 'warning',
  })
}



}
