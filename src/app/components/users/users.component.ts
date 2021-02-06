import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  style : 'list' | 'grid' = 'grid';
  users: IUser[];
  history: string[] = ['sdddddd','dsddddddddddd','fssssss','dfdsr'];

  constructor( 
    private userService : UserService,
    private router : Router
    ) { }

  ngOnInit(): void {
   this.getData(); 
   this.saveHistory()
  }

  getData() {
    this.userService.getUserList().subscribe(data => {
      this.users = data;
      this.users.map(user=>{
        this.userService.getUserRepos(user).subscribe(repos => {
          user.repos = repos;
        })
      })
    });

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
    if(text)
      this.history.push(text);
    this.history = this.history.slice(this.history.length-3, this.history.length)
    localStorage.setItem('search', JSON.stringify(this.history))
    console.log(this.getHistory());
    
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
