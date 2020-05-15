import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {AdminService} from '../../service/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: Observable<User[]>
  constructor(
    private userService: AdminService
  ) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
