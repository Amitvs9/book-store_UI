import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './property';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  public signUpUser(user: any){

    return this.http.post(`${baseUrl}/signup`, user)

  }
}
