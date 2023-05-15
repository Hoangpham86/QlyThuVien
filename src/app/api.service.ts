import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUsers() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  getDataFromAPI(): Observable<any> {
    const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=491b60f21bbb0b2b5b2bd61edc797e34';
    console.log('>>>>>check api', apiUrl); // Thay đổi đường dẫn API tại đây
    return this.http.get<any>(apiUrl);
  }
}