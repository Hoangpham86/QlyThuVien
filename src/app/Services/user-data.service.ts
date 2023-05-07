import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
