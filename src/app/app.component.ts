import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  isCollapsed = false;
  dark = true;
  displaySidebar=false;
  toggleDark(): void{
    this.dark=!this.dark
  }
  constructor(private data: DataService){}

  ngOnInit(): void{
    this.data.isLoggedIn.subscribe(status=>{this.displaySidebar=status})
  }
}
