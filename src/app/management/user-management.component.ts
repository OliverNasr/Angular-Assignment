import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit {
  users: { username: string; password: string }[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Subscribe to user updates
    this.userService.getUsers().subscribe((users: { username: string; password: string }[]) => {
      this.users = users;
    });
  }

  deleteUser(username: string) {
    this.userService.rmUser(username);
  }

  isPasswordWeak(password: string): boolean {
    return password.length < 6;
  }

  getWeakPasswordCount(): number {
    return this.users.filter(user => this.isPasswordWeak(user.password)).length;
  }
}
