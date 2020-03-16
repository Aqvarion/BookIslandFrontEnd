import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: any = {};
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.bookService.get(id).subscribe((book: any) => {
        if (!book) {
          window.alert('Don`t found');
        } else {
          this.book = book;
        }
      });
    });
  }

  addToCart(book: Book) {
    this.bookService.addToCart(book);
  }
}
