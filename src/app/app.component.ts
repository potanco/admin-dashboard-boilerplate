import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dashboard';
  isCollapsed = false;
  dark = true;
  displaySidebar = false;

  constructor(private data: LoginService) {
  }

  ngOnInit(): void {
    this.data.isLoggedIn.subscribe(status => this.displaySidebar = status);
  }
}
