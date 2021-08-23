import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor( private http: HttpClient){

    }
    public getuserdata(){
        let apiurl = "https://localhost:44362/StudentDetails/SaveRecord";
        return this.http.get(apiurl);
    }
}