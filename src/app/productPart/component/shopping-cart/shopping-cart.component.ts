import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {CartProduct} from '../../model/cart-product';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: CartProduct[];
  totalCost: number;
  private jsUser: string;

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this.getCartProduct();
  }


  getCartProduct() {
    this.cartProducts = this.bookService.getLocalCartProducts();

    this.totalCost = 0;
    for (const i of this.cartProducts) {
      this.totalCost += i.book.price * i.quantity;
    }
  }

  addCartProduct(data: Book) {
    this.bookService.addToCart(data);
    this.getCartProduct();
  }

  removeCartProduct(data: Book) {
    this.bookService.removeCartProduct(data);
    this.getCartProduct();
  }

  reduceCartProduct(data: Book) {
    this.bookService.reduceCartProduct(data);
    this.getCartProduct();
  }

  clear() {
    this.bookService.clear();
    this.getCartProduct();
  }

  buyProducts() {
    this.bookService.buyProducts(this.cartProducts).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    alert('Покупка успешна!');
    window.location.reload();
  }
}


