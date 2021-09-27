import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any
  book:any
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      books=>{
        console.log(books);
        this.books = books;
      },
     error=>{
       console.log(error);
       
     }
      
    )
  }

  findBookByIsbn(isbn:String){
    this.bookService.findBookIsbn(isbn).subscribe(
      book=>{
        console.log(book);
        this.book = book;
      },
     error=>{
       console.log(error);
              
     }
      
    )
  }

}
