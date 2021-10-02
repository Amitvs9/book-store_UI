import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn =false;
  public user:any = ''; 

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isUserLoggedIn();
    this.user= this.loginService.getUser();
   
  }

  logout(){
    this.loginService.logoutUser();
    this.loggedIn= false;
    this.user='';
    location.reload();
  }

  public logedInUser(){
    return this.loginService.getUser();
  }

  
}
