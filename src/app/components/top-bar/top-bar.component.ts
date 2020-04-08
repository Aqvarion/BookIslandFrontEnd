import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../userPart/service/token-storage.service';
import {map} from 'rxjs/operators';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;
  private roles: string[];
  username: string;
  adminRights = false;
  books: number[];

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.adminRights = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  consoleLog() {
    console.log(localStorage.getItem('basket'));
    const items = JSON.parse(localStorage.getItem('basket'));
    for (const key in items) {
        console.log(items[key].book.id);
        console.log(items[key].quantity);
    }

    console.log(JSON.parse(localStorage.getItem('basket')));
    console.log(sessionStorage.getItem('auth-user'));
    console.log(JSON.parse(sessionStorage.getItem('auth-user')).id);
  }
}
