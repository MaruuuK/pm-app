import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoading = false;
  public error: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(loginForm: FormGroup) {
    if (!this.loginForm.valid) {
      return;
    }
    this.error = '';

    const login = loginForm.value.login;
    const password = loginForm.value.password;

    this.isLoading = true;

    this.authService.login(login, password).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/main']);
        this.cdr.markForCheck();
      },
      error: (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }

  onAlertClosed() {
    this.error = null;
  }
}
