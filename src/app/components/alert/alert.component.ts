import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() errorAlert: string | null;
  @Input() isSignup: boolean;
  @Output() alertClosed = new EventEmitter<Event>();
  @Output() loginButton = new EventEmitter<Event>();

  onCloseAlert() {
    this.alertClosed.emit();
  }

  onLogin() {
    this.loginButton.emit();
  }

  constructor() {
    this.errorAlert = null;
    this.isSignup = false;
  }
}
