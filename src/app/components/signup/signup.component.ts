import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from 'src/app/service/signup.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user={
    username:'',
    password:''

  }
  constructor(private signup:SignupService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public formSubmit(){
    

    if(this.user.username=='' || this.user.username== null){
      this.snack.open('Username is Required !!.', '',{
        duration: 2000,
        verticalPosition: 'top',
      });
    }
    if(this.user.password=='' || this.user.password== null){
      this.snack.open('Password is Required !!.', '',{
        duration: 3000,
        verticalPosition: 'top',
      });
     
    }
    this.signup.signUpUser(this.user).subscribe(
      (user:any)=>{
        console.log(user);
        Swal.fire('Success', 'User Registered !!. ' +user.username, 'success' )
        
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
        this.snack.open(error.error.errorMessage, '',{
            duration: 3000,
            verticalPosition: 'top',
          });
      }
    )  
  }

}
