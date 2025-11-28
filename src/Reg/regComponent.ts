import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './regSite.html',
  styleUrl: './regStyles.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';
  isLoading = false;
  registeredUsers: string[] = [];

  onSignUp() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters';
      return;
    }

    if (this.registeredUsers.includes(this.username)) {
      this.errorMessage = 'Username already exists';
      return;
    }

    this.errorMessage = '';
    this.successMessage = '';
    this.isLoading = true;

    setTimeout(() => {
      this.registeredUsers.push(this.username);
      this.successMessage = 'Registration successful!';
      this.username = '';
      this.password = '';
      this.isLoading = false;
    }, 500);
  }
}
