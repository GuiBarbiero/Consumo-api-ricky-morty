import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // This method is called to determine if a route can be activated
  canActivate(): boolean {
    // Check if the user is authenticated using the AuthService
    if (this.authService.Authenticated()) {
      // If authenticated, allow access to the route
      return true;
    } else {
      // If not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      // Deny access to the route
      return false;
    }
  }
}
