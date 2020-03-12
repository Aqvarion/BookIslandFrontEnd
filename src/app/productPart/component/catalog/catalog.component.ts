import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  genres: Observable<any[]>;
  books: Observable<Book[]>;
  selectGenre = null;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.genres = this.bookService.getGenres();
  }

}
