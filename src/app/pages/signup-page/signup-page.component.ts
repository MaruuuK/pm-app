import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pm-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent {}
