import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {CatalogComponent} from './productPart/component/catalog/catalog.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BookDetailsComponent} from './productPart/component/book-details/book-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatOptionModule, MatSelectModule} from '@angular/material';
import {BookService} from './productPart/service/book.service';
import {ShoppingCartComponent} from './productPart/component/shopping-cart/shopping-cart.component';
import {LocalStorageService, StorageService} from './productPart/service/storage.service';
import {RegisterComponent} from './userPart/component/register/register.component';
import {LoginComponent} from './userPart/component/login/login.component';
import { AlertComponent } from './userPart/component/alert/alert.component';
import {JwtInterceptor} from './userPart/helpers/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CatalogComponent,
    BookDetailsComponent,
    ShoppingCartComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
