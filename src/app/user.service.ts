import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserDetails } from "src/entity/userdetails.entity";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor( private http: HttpClient){

    }
    // public getuserdata(){
    //     let apiurl = "https://localhost:44322/weatherforecast";
    //     return this.http.get(apiurl);
    // }
    // users :Array<UserDetails>= [];
    users!: boolean;
    public postuserdata(obj: any){
        return this.http.post("https://localhost:44362/StudentDetails/LogInUser", obj).subscribe(
            (data:any) =>{
                this.users = data;
            }
        )
    }
    public postdata(obj: any){
        return this.http.post("https://localhost:44362/StudentDetails/SaveUser", obj).subscribe(  
      (data:any) => {  
       this.users = data; //as string [];  
      },
      error=>{})
    }
}