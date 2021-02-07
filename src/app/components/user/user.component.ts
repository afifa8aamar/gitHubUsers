import { IOrgnization } from './../../models/IOrgnization';
import { IUser } from 'src/app/models/IUser';
import { IRepo } from './../../models/IRepo';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

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
    this.userService.getUserList().subscribe(data => {
      this.owner = data.find(user => user.login == username);
      this.userService.getUserRepos(this.owner).subscribe(repos => {
        this.repos = repos;
      })
      this.userService.getOrganization(this.owner).subscribe(orgs => this.orgnizations = orgs);
    });
  }

  goBack() {
    this.router.navigateByUrl('')
  }

}
