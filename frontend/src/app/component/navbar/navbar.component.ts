import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit , DoCheck {

  displayAdminPage= false;
  displayMenu= false;   //for testing
  currentrole:any;

    constructor(public _AuthService:AuthService , private _Router:Router) {}

  logOut(){
    localStorage.clear()
    this._Router.navigate(['/login'])
  }

  ngOnInit() {
    this._AuthService.updateMenu.subscribe(res=>{
      this.adminPageDisplay();
    })
    this.adminPageDisplay();

  }
  adminPageDisplay(){
    if(this._AuthService.getToken()!= ''){
      this.currentrole = this._AuthService.getRoleByToken(this._AuthService.getToken());
      this.displayAdminPage = this.currentrole =='admin';
    }
  }

  ngDoCheck(): void {
    if(this._Router.url == '/login'){
      this.displayMenu = false;
    }else{
      this.displayMenu = true;
    }
  }

}
