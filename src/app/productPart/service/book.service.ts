import { Injectable } from '@angular/core';
import {Book} from '../../model/book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CartProduct} from '../../model/cart-product';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';




@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly booksUrl: string;
  constructor(private http: HttpClient) {
    this.booksUrl = 'http://localhost:8080';
  }

  private books: Observable<Book[]>;

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl + '/books');
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + '/get' + '/' + id);
  }

  getGenres() {
    return this.http.get(this.booksUrl + '/genres');
  }


  addToCart(data: Book): void {
    let a: CartProduct[];
    a = JSON.parse(localStorage.getItem('basket')) || [];

    let mark;

    if (a.length !== 0) {
      for (const ai of a) {
        if (ai.book.id === data.id ) {
          mark = 'found';
          ai.quantity += 1;
          console.log(typeof Number(ai.productCost));
          console.log(typeof data.price);
          ai.productCost = Number(ai.productCost) + Number(data.price);
          break;
        }
      }

      if (mark !== 'found') {
        a.push(new CartProduct(data, 1, data.price));
      }

    } else {
      a.push(new CartProduct(data, 1, data.price));
    }

    localStorage.setItem('basket', JSON.stringify(a));
  }

  removeCartProduct(data: Book) {
    let a: CartProduct[];
    a = JSON.parse(localStorage.getItem('basket')) || [];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < a.length; i++) {
        if (a[i].book.id === data.id) {
          a.splice(i, 1);
          break;
        }
    }

    localStorage.setItem('basket', JSON.stringify(a));
  }

  reduceCartProduct(data: Book) {
    let a: CartProduct[];
    a = JSON.parse(localStorage.getItem('basket')) || [];

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < a.length; i++) {
      if (a[i].book.id === data.id) {
        a[i].quantity -= 1;

        if (a[i].quantity < 1) {
          console.log('remove');
          this.removeCartProduct(a[i].book);
        } else {
          localStorage.setItem('basket', JSON.stringify(a));
        }
        break;
      }
    }
  }

  clear() {
    localStorage.clear();
  }


  getLocalCartProducts(): CartProduct[] {
    const products: CartProduct[] = JSON.parse(localStorage.getItem('basket')) || [];
    return products;
  }
}
