import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$ = new BehaviorSubject<{ username: string; password: string }[]>([]);

  constructor() {
    // Load users
      const defaults = [
        { username: 'weakUser', password: '123' },
        { username: 'strongUser', password: 'strongPass123' }
      ];
      this.users$.next(defaults);
      localStorage.setItem('registeredUsers', JSON.stringify(defaults));
  }

  getUsers() {
    return this.users$.asObservable();
  }

  addUser(user: { username: string; password: string }) {
    const currentUsers = this.users$.value;
    // Check for duplicate
    if (!currentUsers.some(u => u.username.toLowerCase() === user.username.toLowerCase())) {
      currentUsers.push(user);
      this.users$.next(currentUsers);
      localStorage.setItem('registeredUsers', JSON.stringify(currentUsers));
      return true;
    }
    return false;
  }

  rmUser(username: string) {
    const currentUsers = this.users$.value.filter(u => u.username !== username);
    this.users$.next(currentUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(currentUsers));
  }

  get_all_Users() {
    return this.users$.value;
  }
}
