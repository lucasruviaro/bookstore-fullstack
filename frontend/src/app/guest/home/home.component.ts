import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/model/book.model';
import { Purchase } from 'src/app/model/purchase.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { BookService } from 'src/app/service/book.service';
import { PurchaseService } from 'src/app/service/purchase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookList: Array<Book> = [];
  faBook = faBook;
  errorMessage: string = "";
  infoMessage: string = "";

  constructor(private authenticationService: AuthenticationService,
              private bookService: BookService,
              private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getBooks();
    }

    getBooks(): any{
      this.bookService.getAllBooks().subscribe(
        {
          next: response => {
          this.bookList = response;
        },
        error: HttpErrorResponse => {
          alert(this.errorMessage);
        }
    });

  }

  purchase(item: Book) {
    if (!this.authenticationService.currentUserValue?.id) {
      this.errorMessage = 'You should log in to buy a book';
      return;
    }

    const purchase = new Purchase(this.authenticationService.currentUserValue.id, item.id, item.price);

    this.purchaseService.savePurchase(purchase).subscribe(data => {
      this.infoMessage = 'Mission is completed';
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    });
  }

}
