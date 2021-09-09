import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { RegisterComponent } from './Data/register.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListPageComponent } from './list-page/list-page.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  // {path: '', redirectTo: '/login'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignupComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'list', component:ListPageComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
