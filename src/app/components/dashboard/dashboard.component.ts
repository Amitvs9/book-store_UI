import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  getBooks(){
    this.bookService.getBooks().subscribe(
      books=>{
        console.log(books);

      },
     error=>{
       console.log(error);
       
       
     }
      
    )
  }

}
