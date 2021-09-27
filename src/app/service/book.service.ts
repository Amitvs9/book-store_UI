import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl='http://localhost:7075/bookstore'

  constructor(private http: HttpClient) {}


  getBooks(){
    return this.http.get(`${this.baseUrl}/books`);
  }

  findBookIsbn(isbn:String){
    return this.http.get(`${this.baseUrl}/${isbn}`);
  }
}
