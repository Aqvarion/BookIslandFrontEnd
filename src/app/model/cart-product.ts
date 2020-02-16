import {Book} from './book';

export class CartProduct {
  book: Book;
  quantity: number;
  productCost: number;

  constructor(book: Book, quantity: number, productCost: number ) {
    this.book = book;
    this.quantity = quantity;
    this.productCost = productCost;
  }
}
