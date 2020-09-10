import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'dashboard';
  isLoggedIn = false;
  darkMode = true;
  isSidebarCollapsed = true;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    // subscribe to login service
    this.loginService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
      this.isSidebarCollapsed = !status;
    });
    // redirect to login if unauthorized
    if (!this.isLoggedIn) {
      this.router.navigate(['login']);
    }
  }
}
