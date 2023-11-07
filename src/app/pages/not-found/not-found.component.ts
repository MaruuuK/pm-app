import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  onMainPage() {
    this.router.navigate(['/']);
  }
}
