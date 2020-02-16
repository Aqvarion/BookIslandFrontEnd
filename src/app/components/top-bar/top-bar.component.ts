import { Component, OnInit } from '@angular/core';
import {BookService} from '../../productPart/service/book.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  genres;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getGenres()
      .subscribe(data => {
        this.genres = data;
      });
  }

}
