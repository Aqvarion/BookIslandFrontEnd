import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from './productPart/component/catalog/catalog.component';
import {BookDetailsComponent} from './productPart/component/book-details/book-details.component';
import {ShoppingCartComponent} from './productPart/component/shopping-cart/shopping-cart.component';
import {RegisterComponent} from './userPart/component/register/register.component';
import {LoginComponent} from './userPart/component/login/login.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'book-details/:id', component: BookDetailsComponent},
  { path: 'shop-cart', component: ShoppingCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
