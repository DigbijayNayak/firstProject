import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentEntity } from 'src/entity/student.entity';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  username!: string;
  password!: string;
  email!: string;
  rollno!: number;
  section!: string;

  stdEntity: StudentEntity = new StudentEntity();
  constructor(private router: Router, private http: HttpClient) { }
  // 
  ngOnInit(): void {
  }
  registerStudent(){
    this.http.post("https://localhost:44362/StudentDetails/SaveRecord",this.stdEntity).subscribe(
      posts=>{},
      error=>{}
    )
    this.router.navigate(["list"]);
  }

}
