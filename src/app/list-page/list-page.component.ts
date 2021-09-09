import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public data: any;

  constructor(private userservice: UserService) {
    
   }

  ngOnInit(): void {
    // this.getuserdata();
  }
  // getuserdata(){
  //   this.userservice.getuserdata().subscribe(posRes=>{
  //     this.data = posRes;
  //   });
  // }

}

