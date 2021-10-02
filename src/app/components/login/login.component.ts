import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''

  }

  constructor(private loginService: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.credentials.username == '' || this.credentials.username == null) {
      this.snack.open('Username is Required !!.', '', {
        duration: 2000,
        verticalPosition: 'top',
      });
    }
    if (this.credentials.password == '' || this.credentials.password == null) {
      this.snack.open('Password is Required !!.', '', {
        duration: 2000,
        verticalPosition: 'top',
      });
    }
    if (this.credentials.username != null && this.credentials.password != null) {
      console.log("form submited!!");
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          
          this.loginService.loginUser(response.token);
          this.loginService.setUser(response.userDetails);

          if (this.loginService.getUserRole() == 'ADMIN') {
            window.location.href = "/dashboard";

          } else {
            window.location.href = "/lougout";
          }

        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.snack.open(error.error.errorMessage, '', {
            duration: 3000,
            verticalPosition: 'top',
          });
        }
      )

    }
    
  }

}
