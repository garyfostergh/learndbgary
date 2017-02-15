import { User } from './user';
import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  static NO_USER: User = new User();
  userSubject: BehaviorSubject<User> = new BehaviorSubject(UserService.NO_USER);
  public user$: Observable<User> = this.userSubject.asObservable();
  public user: User;

  constructor(private af: AngularFire) {
    af.auth.subscribe(login => {
      console.log("Got login update", login);
      
      if (login && login.uid) {
        this.user = new User();
        this.user.uid = login.uid;
        this.user.name = login.auth.displayName;
        this.user.email = login.auth.email;
        this.user.photoURL = login.auth.photoURL;
      } else {
        this.user = UserService.NO_USER;
      }

      this.userSubject.next(this.user);
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

}
