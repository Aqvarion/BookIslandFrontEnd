import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {element} from 'protractor';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  genres: any[];
  books: Observable<Book[]>;
  selectGenre = null;
  selectBook;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.bookService.getGenres().subscribe(res => this.genres = res);
  }
}
