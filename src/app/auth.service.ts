import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private readonly username = 'pachu';
  private readonly password = 'sarovaram890@';

  login(user: string, pass: string): boolean {
    if (user === this.username && pass === this.password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
