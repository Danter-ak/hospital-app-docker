import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {



  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate(['/' + path]);
  }
  logout() {

  this.router.navigate(['auth/login']);
}

}
