import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../Data/register.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/entity/userdetails.entity';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid!:number;
  password!: string;
  userobj: UserDetails = new UserDetails();
  alert: boolean = false;
  constructor(private http: HttpClient, private routers:Router, public service: UserService) { }
  ngOnInit(): void {
    
  }
  logInUser(){
    this.userobj.User_id = this.userid;
    this.userobj.Email_id = '';
    this.userobj.User_name = '';
    this.userobj.Password = this.password;
    let res = this.service.postuserdata(this.userobj);    
    if(res){
      this.alert = true;
    }
    else{
      this.alert = false;
    }   
  }  
}
