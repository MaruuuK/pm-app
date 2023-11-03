import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoading = false;
  public error: string | null = null;

  // constructor(private authService: AuthService, private router: Router) {}

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

    // const login = loginForm.value.login;
    // const password = loginForm.value.password;

    // this.isLoading = true;

    // this.authService.login(login, password).subscribe({
    //   next: () => {
    //     this.isLoading = false;
    //     this.router.navigate(['/main']);
    //   },
    //   error: (errorMessage) => {
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   },
    // });
  }
}

