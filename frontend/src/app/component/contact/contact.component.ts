import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataOfContactsService } from '../../Services/data-of-contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  constructor(private _DataOfContactsServices: DataOfContactsService){  }



  addContact: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  sendContact(){
    let contact = {
      name: this.addContact.value.name,
      email: this.addContact.value.email,
      message: this.addContact.value.message
    };
    // console.log(contact);


    this._DataOfContactsServices.addNewContact(contact).subscribe(response => {
      if(response.message == "Addition succeeded"){
        this.alertWithSuccess();
        this.addContact.reset();
      }
      else{
        this.alertWithError();
      }
      console.log(response);
    });

  }

  alertWithSuccess(){
    Swal.fire({
      title: ' Thank You......',
      text: 'I Will Contact You Soon',
      icon: 'success',
    })
  }
  alertWithError(){
    Swal.fire({
      title: 'warning!!',
      text: 'You Should Enter All Field',
      icon: 'warning',
    })
  }

  ngOnInit(): void {}



}
