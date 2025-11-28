import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() users: { username: string; password: string }[] = [];

  deleteUser(username: string) {
    const index = this.users.findIndex(user => user.username === username);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  isPasswordWeak(password: string): boolean {
    return password.length < 6;
  }
}
