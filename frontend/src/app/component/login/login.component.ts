import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
declare var $:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  txt="password";

  // constructor(private _AuthService: AuthService , private _Router:Router) {}
  constructor(private _AuthService: AuthService , private _Router:Router){

  }

  isStyleValid = { 'background-color': 'gray', 'border-color': 'gray' };
  isStyleInValid = { 'background-color': '#17a2bB', 'border-color': '#17a2bB' };
  isClicked = false;
  isDone = false;
  error = null;

  logIn = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });



  logInDate(){
    if (this.logIn.valid) {
      this._AuthService.login(this.logIn.value).subscribe(
        (response) => {
          console.log(response);
          this.isClicked = true;
          if (response.message == 'Logged in successfully') {
            this._Router.navigate(['/dashboard'])
            // console.log('token' , response.token);

            localStorage.setItem('TOKEN', response.token);
            this._AuthService.updateMenu.next();
          }

          console.log(response);
        },
        (error) => {
          // console.log(error);
          this.error = error.error.msg;
          this.isClicked = false;
        }
      );
    }

  }


  ngOnInit(): void {  }

  hidePassword(){
    this.txt="password";
    $('.fa-eye-slash').css({
      'display': 'inline'
    });
    $('.fa-eye').css({
      'display': 'none'
    });
  }
  showPassword(){
    this.txt="text";
    $('.fa-eye').css({
      'display': 'inline'
    });
    $('.fa-eye-slash').css({
      'display': 'none'
    });
  }
}

