import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public isAuthoService = false
  constructor() { }
  login() {
    this.isAuthoService = true
  }
  logout() {
    this.isAuthoService = false
  }
}
