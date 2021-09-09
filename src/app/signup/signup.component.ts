import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/entity/userdetails.entity';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userid!: number;
  username!: string;
  emailid!: string;
  password!: string;
  alert!: boolean;
  userObj: UserDetails = new UserDetails();
  constructor(private http: HttpClient, private routers:Router, public service: UserService) { }
  ngOnInit(): void {
    
    
  }
  signUpUser(){
    this.userObj.User_id = this.userid;
    this.userObj.User_name = this.username;
    this.userObj.Email_id = this.emailid;
    this.userObj.Password = this.password;
    let res = this.service.postdata(this.userObj);
    if(res){
      this.alert = true;
    }
    else{
      this.alert = false;
    }
  }

}
