import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/login']);
    this.loggedIn = !this.loggedIn;
  }

  signUp(){
    this.router.navigate(['/signup']);
    this.loggedIn = !this.loggedIn;
  }

// Fake logout button
  logOut() {
    this.router.navigate(['/']);
    this.loggedIn = !this.loggedIn;
  }


  ngOnInit(): void {

  }

}
