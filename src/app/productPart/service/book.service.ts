import {Injectable} from '@angular/core';
import {Book} from '../model/book';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartProduct} from '../model/cart-product';

const BOOK_API = 'http://localhost:8080/api/book';
const ORDER_API = 'http://localhost:8080/api/order';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly booksUrl: string;
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOK_API + '/books');
  }

  get(id: number): Observable<Book> {
    return this.http.get<Book>(BOOK_API + '/get' + '/' + id);
  }

  // getGenres(): Observable<any[]> {
  //   return this.http.get<any[]>(BOOK_API + '/genres');
  // }

  getGenres(): Observable<any[]> {
    return this.http.get<any[]>(BOOK_API + '/genres');
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

  public buyProducts(cart): Observable<any> {
    const map = new Map();
    for (const item in cart) {
      console.log(cart[item]);
      map.set(cart[item].book.id, cart[item].quantity);
    }

    const obj = [...map].reduce((o, [key, value]) => (o[key] = value, o), {});
    console.log(obj);
    return this.http.post(ORDER_API + '/buyItems', {
      userId: JSON.parse(sessionStorage.getItem('auth-user')).id,
      purchasedBooks: obj
    }, httpOptions);
  }

}
