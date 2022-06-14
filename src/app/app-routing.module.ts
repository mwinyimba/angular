import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { Room4Component } from './room4/room4.component';
import { Room5Component } from './room5/room5.component';

const routes: Routes = [

  {path:'',component:HeaderComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'room1',component:Room1Component},
  {path:'room2',component:Room2Component},
  {path:'room3',component:Room3Component},
  {path:'room4',component:Room4Component},
  {path:'room5',component:Room5Component},
  {path:'contact',component:ContactComponent},
  {path:'form',component:FormComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
