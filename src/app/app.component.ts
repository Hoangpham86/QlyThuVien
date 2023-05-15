
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})


export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // test API 
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    console.log('hello')
    this.api.getDataFromAPI().subscribe(data => console.log(data))
  }



}

