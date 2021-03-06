import { mergeMap } from 'rxjs/operators';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  style : 'list' | 'grid' = 'grid';
  users: IUser[];
  history: string[];

  constructor( 
    private userService : UserService,
    private router : Router
    ) { }

  ngOnInit(): void {
   this.getData(); 
   this.saveHistory()
  }

  getData() {
    this.userService.getUserList().pipe(
      mergeMap(users=> {
        this.users = users;
        this.users.map(user=>{
          this.userService.getUserRepos(user).subscribe(repos => {
            user.repos = repos;
          })
        })
        return users;
      })
    ).subscribe()
  
  }

  search (text) {
    this.saveHistory(text)
    if(this.users.find(user=> user.login == text)) {
      this.router.navigateByUrl(text)
    }
    else 
      this.router.navigateByUrl('not-found')
  }

  saveHistory(text?) {
    this.history = JSON.parse(localStorage.getItem('search'));
    if(!this.history)
      this.history = [];
    if(this.history.length>3)
      this.history = this.history.slice(this.history.length-3, this.history.length)
    localStorage.setItem('search', JSON.stringify(this.history))
    
  }

  getHistory() : string[] {
    return JSON.parse(localStorage.getItem('search'))
  }

  navigate(user : IUser) {
    this.router.navigateByUrl(user.login)
  }

  setStyle(style : 'list' | 'grid') {
    this.style = style;
  }

}
