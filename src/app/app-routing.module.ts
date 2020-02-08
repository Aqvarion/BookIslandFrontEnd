import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent},
  { path: 'registration', component: UserRegistrationComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'book-details/:id', component: BookDetailsComponent},
  { path: 'shop-cart', component: ShoppingCartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
