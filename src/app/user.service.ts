import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: any;
  constructor() { }

  setUser(data: any) {
    this.userData = data;
  }

  getUser() {
    return this.userData;
  }
}
