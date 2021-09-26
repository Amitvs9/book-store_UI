import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''

  }

  constructor(private http: HttpClient) { }

  doLogin(username:String, password:String){


  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form submited!!");
    
  }

}
