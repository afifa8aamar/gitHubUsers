import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  constructor( private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(d => console.log(d));
  }
}
