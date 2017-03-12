import { UserService } from './shared/user.service';
import { User } from './shared/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title = 'LearnDB-Gary  fred';
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
