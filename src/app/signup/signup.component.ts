import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userid!: string;
  username!: string;
  emailid!: string;
  password!: string;


  constructor(private http: HttpClient, private routers:Router) { }
  ngOnInit(): void {
    
    
  }
  signUpUser(){
    // this.http.post()
  }

}
