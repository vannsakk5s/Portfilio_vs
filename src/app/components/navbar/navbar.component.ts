import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { NgClass } from '@angular/common';
declare const AOS: any; // Declare AOS from the global window object

@Component({
  selector: 'app-navbar',
  imports: [HomeComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  ngAfterViewInit() {
    AOS.init({
      // You can add options here, e.g.
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  phbar() {
    this.isNavbarOpen = false; // close menu after clicking a link
  }

  lang(){
    alert("comming soon !!!")
  }

}
