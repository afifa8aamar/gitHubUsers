import { IRepo } from './../models/IRepo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private httpClient: HttpClient
    ) { }
 
  getUserList(): Observable<IUser[]> {
    // const url = ` https://api.github.com/users`;
    const url = "assets/users.json"
    return this.httpClient.get<IUser[]>(url);
  }

  getUserRepos(user : IUser): Observable<IRepo[]> {
    // const url = ` https://api.github.com/users/${user.login}/repos`;
    const url = "assets/repos.json"
    return this.httpClient.get<IRepo[]>(url);
  }
}
