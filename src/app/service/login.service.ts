import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl=  "http://localhost:7075/bookstore";
  constructor(private http:HttpClient) { }

  headers = { 'content-type': 'application/json'}  


  generateToken(credentials:any){
    headers: {
      "Content-Type: application/json"
    }
    return this.http.post(`${this.baseUrl}/authenticate`, credentials);
   
  }

  getToken(){
    return localStorage.getItem('token');
  }


  loginUser(token: string){

    localStorage.setItem("token", token)
    return true;
  }

  isUserLoggedIn(){
    let token= localStorage.getItem('token')
    console.log(token);
    
    if(token===undefined || token==='' || token===null){
      console.log("false");
      return false;
    }
    console.log("true");
    return true;
  }

  logoutUser(){
    localStorage.removeItem('token');
    return true;
  }
}
