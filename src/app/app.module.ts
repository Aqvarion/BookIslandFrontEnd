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
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BookService} from './productPart/service/book.service';
import {ShoppingCartComponent} from './productPart/component/shopping-cart/shopping-cart.component';
import {RegisterComponent} from './userPart/component/register/register.component';
import {LoginComponent} from './userPart/component/login/login.component';
import {UserListComponent} from './userPart/component/user-list/user-list.component';
import {AuthInterceptor} from './userPart/helpers/auth-interceptor';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CatalogComponent,
    BookDetailsComponent,
    ShoppingCartComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent
  ],
    imports: [
        JwtModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatOptionModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule
    ],
  providers: [
    BookService,
    JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
