import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactProfileComponent } from './pages/contact-profile/contact-profile.component';
import { AddcontactComponent } from './pages/addcontact/addcontact.component';

//archivo que maneja el ruteo de toda la app o paginas
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path:"contactprofile",
    component: ContactProfileComponent
  },
  {
    path:"addcontact",
    component:AddcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
