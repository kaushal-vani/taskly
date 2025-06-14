import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService, SignUpRequest } from '@taskly/shared';

@Component({
  selector: 'lib-sign-up',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @Output() switchView = new EventEmitter<'login'>();
  signupForm: FormGroup;
  showPassword = false;
  errorMessage = '';
  isLoading = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const payload: SignUpRequest = this.signupForm.value;

    this.authService.signUp(payload).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.signupForm.reset();
        this.switchView.emit('login');
        console.log(response)
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || 'Something went wrong!';
        console.error('Sign-up error:', err);
      },
    });
  }
}