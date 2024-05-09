import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Flag to track the authentication state
  private isAuthenticated: boolean = false;

  // Inject the Angular Router service for navigation
  constructor(private router: Router) {}

  // Method to handle user login
  login(email: string, password: string): void {
    // Check if provided credentials are valid
    const isValidCredentials = email === 'teste@teste.com' && password === 'abcd';

    // If valid, set isAuthenticated to true and navigate to the '/home/list-characters' route
    // If not valid, set isAuthenticated to false
    if (isValidCredentials) {
      this.isAuthenticated = true;
      this.router.navigate(['/home/list-characters']);
    } else {
      this.isAuthenticated = false;
    }
  }

  // Method to handle user logout
  logout(): void {
    // Set isAuthenticated to false and navigate to the '/login' route
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  // Method to check the current authentication status
  // Returns true if authenticated, false otherwise
  Authenticated(): boolean {
    return this.isAuthenticated;
  }
}
