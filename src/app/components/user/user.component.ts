import { IOrgnization } from './../../models/IOrgnization';
import { IUser } from 'src/app/models/IUser';
import { IRepo } from './../../models/IRepo';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  owner : IUser;
  repos: IRepo[];
  orgnizations: IOrgnization[];

  constructor( 
    private userService : UserService,
    private router : Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let username = this.activatedRoute.snapshot.paramMap.get('user');
    this.userService.getUserList()
    .pipe(
      mergeMap(users => { 
        this.owner = users.find(user => user.login == username);
        forkJoin({
          repos : this.userService.getUserRepos(this.owner),
          orgnizations : this.userService.getOrganization(this.owner)
        }).subscribe(data => {
          this.repos = data.repos;
          this.orgnizations = data.orgnizations
        })
        return users
      })
    ).subscribe();
  }

  goBack() {
    this.router.navigateByUrl('')
  }

}
