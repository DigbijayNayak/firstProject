import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../Data/register.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!:string;
  password!: string;
  constructor(private http: HttpClient, private routers:Router) { }

  logInUser(){
    // this.http.get("").subscribe(posts=>{
    //   console.log(posts);
    // })
    if(this.username == "Admin" && this.password == "Password"){
      this.routers.navigate(['registration']);
      console.log("Welcome");
    }
    else{
      console.log("User Unauthorized");
    }
  }
  ngOnInit(): void {
  }
  
}
