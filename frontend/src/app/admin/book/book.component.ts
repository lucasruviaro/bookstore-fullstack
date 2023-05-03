import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model/book.model';
import { BookService } from 'src/app/service/book.service';
import * as bootstrap from "bootstrap";


declare var $: any;


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent{

  errorMessage: string = "";

  @Input() book: Book = new Book();
  @Output() save = new EventEmitter<any>();
  constructor(private bookService: BookService) { }

  saveBook() {
    this.bookService.saveBook(this.book).subscribe(data => {
      this.save.emit(data);
      $('#bookModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  showBookModal() {
    $('#bookModal').modal('show');
  }

}
