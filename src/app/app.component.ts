import { Component } from '@angular/core';
import { StudentEntity } from 'src/entity/student.entity';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstproject';
  num: number=8;
  constructor(private http: HttpClient, private userservice: UserService) {
    let user = this.userservice.getuserdata().subscribe(data=>{
      console.log(data);
    });
  }
  menuItems: Array<string> = ["Home", "About", "login", "registration", "list", "Gallery"];
  boolv: boolean = true;
  recievingMenuName(eventmenuname:string){
    console.log("This is from parent component", eventmenuname);
  }

  resetButton(){
    this.boolv = !this.boolv;
    if(this.boolv){
      this.menuItems = ["Home", "About", "login", "registration", "list", "Gallery"];
    }
    else{
      this.menuItems = [];
    }
  }

  studentObj:Array<StudentEntity> = [{
    username: "Sunil",
    rollno: 102,
    isphysical: true,
    section: 'c'
  }];
  ngOnInit(){
    this.http.get("").subscribe((data:any)=>{
      this.studentObj = data;
      console.log("getcall");
    })
    console.log("after getcall");
  }
  

}






// export class AppComponent {
//   title: string = 'DigbijayProj';
//   studentObj: Array<StudentEntity>=[{
//     rollno: 1,
//     name: "Abc",
//     isphysical: true
//   },{
//     rollno: 2,
//     name: "Xyz",
//     isphysical: false
//   }];
  
//   showName: boolean = true;
//   showMyName(): void{
//     if(this.showName==true)
//      this.showName = false;
//     else
//      this.showName = true;
//   }
//}

