import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pm-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input() errorAlert: string | null;
  @Output() alertClosed = new EventEmitter<Event>();

  onCloseAlert() {
    this.alertClosed.emit();
  }

  constructor() {
    this.errorAlert = null;
  }
}
