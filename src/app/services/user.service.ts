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
    const url = ` https://api.github.com/user`;
    return this.httpClient.get<IUser[]>(url);
  }
}
