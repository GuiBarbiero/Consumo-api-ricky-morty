import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.scss']
})
export class HomeRootComponent {

  // Using 'inject' to obtain an instance of BreakpointObserver
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private router: Router) {}

  // Function to navigate to the login page when the button is clicked
  onClick(): void {
    this.router.navigate(['/login']);
  }

  // Observable to track if the screen is in 'Handset' mode (small screens, e.g., mobile)
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
