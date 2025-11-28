import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './regSite.html',
  styleUrl: './regStyles.css'
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  successMessage = '';
  isLoading = false;
  registeredUsers: { username: string; password: string }[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Subscribe to user updates from service
    this.userService.getUsers().subscribe(users => {
      this.registeredUsers = users;
    });
  }

  onSignUp() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    // Allow weak passwords but show warning
    if (this.password.length < 6) {
      this.successMessage = 'Note: Your password is weak (less than 6 characters).';
    }

    this.errorMessage = '';
    this.isLoading = true;

    setTimeout(() => {
      const user = { 
        username: this.username, 
        password: this.password 
      };

      // Use service to add user (handles duplicate checking)
      if (this.userService.addUser(user)) {
        if (!this.successMessage) {
          this.successMessage = 'Registration successful!';
        } else {
          this.successMessage += ' User registered.';
        }
        this.username = '';
        this.password = '';
      } else {
        this.errorMessage = 'Username already exists. Please choose a different username.';
      }
      
      this.isLoading = false;
    }, 500);
  }

  goToManagement() {
    this.router.navigate(['/manage']);
  }
}
