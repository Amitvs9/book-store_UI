import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    userName:'',
    password:''

  }

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.credentials.userName!=null && this.credentials.password!=null){
      console.log("form submited!!");
    this.loginService.generateToken(this.credentials).subscribe(
      (response:any)=>{
      console.log(response.token);
      this.loginService.loginUser(response.token);
      window.location.href="/dashboard"
      },
      error=>{
        console.log(error);
        
      }
    )

    }
    else{
      console.log("Error");
      
    }
    
    
  }

}
