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
}
