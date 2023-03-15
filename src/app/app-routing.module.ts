import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent }  from './home/home.component'

const routes: Routes = [
  {
    path: "", component:LoginComponent,
  },
  {
    path: "sign-up", component:SignupComponent,
  },
  {
    path: "home" , component:HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
