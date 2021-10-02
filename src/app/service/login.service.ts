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


  public getCurrentLoggedInUser(){
    return this.http.get(`${this.baseUrl}/logedinuser`)
  }


  public generateToken(credentials:any){
   
    return this.http.post(`${this.baseUrl}/authenticate`, credentials);
   
  }

  public getToken(){
    return localStorage.getItem('token');
  }


  public loginUser(token: string){

    localStorage.setItem("token", token)
    return true;
  }

  public isUserLoggedIn(){
    let token= localStorage.getItem('token')
    console.log(token);
    
    if(token===undefined || token==='' || token===null){
      console.log("false");
      return false;
    }
    console.log("true");
    return true;
  }

  public logoutUser(){
    localStorage.removeItem('token');
    return true;
  }

  public setUser(userDetails:any){
    localStorage.setItem("user", JSON.stringify(userDetails));
  }

  public getUser(){

    let userStr = localStorage.getItem("user")
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logoutUser();
      return null;
    }
  }

  public getUserRole(){

    let userData = this.getUser()
    console.log("roles:" , userData.authorities[0].authority);
    
    return userData.authorities[0].authority; 
  }
}
