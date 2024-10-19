import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { LoginComponent } from './component/login/login.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { PrintsComponent } from './component/prints/prints.component';
import { PrintersComponent } from './component/printers/printers.component';
import { navBarUrlGuard } from './Guards/nav-bar-url.guard';
import { AuthGuardGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path : '' ,redirectTo:'home' , pathMatch:"full"},
  {path : 'home' ,component:HomeComponent},
  {path : 'contact' ,component:ContactComponent},
  {path : 'about' ,component:AboutComponent},
  {path : 'login' ,component:LoginComponent},
  {path : 'dashboard' ,component:DashBoardComponent,canActivate:[AuthGuardGuard]},
  // {path : 'dashboard' ,component:DashBoardComponent},
  {path : 'printers' ,component:PrintersComponent},
  {path : 'prints' ,component:PrintsComponent},
  {path : '**' ,component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
