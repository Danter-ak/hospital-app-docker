import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(): void {
    const payload = { username: this.username, password: this.password };
      this.http.post<any>(`${environment.apiUrl}/api/auth/login`, payload).subscribe({
      next: (res) => {
        if (res.success) {
          this.router.navigate(['/']);
        } else {
          this.loginFailed = true;
        }
      },
      error: () => {
        this.loginFailed = true;
      }
    });
  }
}

