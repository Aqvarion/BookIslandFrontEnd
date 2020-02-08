import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {HttpClientModule} from '@angular/common/http';
import {BookDetailsComponent} from './components/book-details/book-details.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatOptionModule, MatSelectModule} from '@angular/material';
import {BookService} from './service/book.service';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {LocalStorageService, StorageService} from './service/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CatalogComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BookDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    BookService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
