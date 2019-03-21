import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/User';

@Injectable({
    providedIn: 'root'
  })
export class UserService{
  private usersSubject = new BehaviorSubject([]);
  private users=[];
  constructor() { }
  getUsers(): Observable<UserModel[]> {
    return this.usersSubject.asObservable();
  }
  private refresh() {   
    this.usersSubject.next(this.users);
  }

  createNewUser(user: UserModel) { 
    this.users.push(user);
    this.refresh();
  }
}