import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
 
  isLoading = new BehaviorSubject(false);
 
  constructor() { }
 
}