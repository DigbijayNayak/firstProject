import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import studentData from '../student.json';

interface Student {
  id: number;
  name: string;
  email: string;
  gender: string;
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(){}



  ngOnInit(): void{}
  students: Student[] = studentData;
}
