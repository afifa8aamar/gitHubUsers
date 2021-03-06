import { LoadingService } from './../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  host: {'[class.active]': 'loading'},
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  loading = false;
 
  constructor(private loadingService: LoadingService) { }
 
  ngOnInit() {
    
    this.loadingService.isLoading.pipe(distinctUntilChanged()).subscribe(res => {
      this.loading = res;
    });
  }
}
