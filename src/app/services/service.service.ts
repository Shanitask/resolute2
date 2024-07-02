import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private storageKey = 'users';
  private idCounterKey = 'userIdCounter';

  constructor() {
    // Initialize ID counter if not already present
    if (localStorage.getItem(this.idCounterKey) === null) {
      localStorage.setItem(this.idCounterKey, '0');
    }
  }

  private getNextId(): string {
    let counter = Number(localStorage.getItem(this.idCounterKey) || '0');
    counter += 1;
    localStorage.setItem(this.idCounterKey, counter.toString());
    return counter.toString();
  }

  getUsers(): any[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (error) {
      console.error('Error retrieving from local storage', error);
      return [];
    }
  }

  getUserById(id: string): any {
    const users = this.getUsers();
    return users.find(user => user.id === id);
  }

  addUser(user: any): void {
    // Assign a new auto-incremented ID
    user.id = this.getNextId();

    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  }

  updateUser(id: string, updatedUser: any): void {
    const users = this.getUsers();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser }; // Merge updates with existing user
      this.saveUsers(users);
    }
  }

  private saveUsers(users: any[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  }
  deleteUser(id: string): void {
    let users = this.getUsers();
    users = users.filter(user => user.id !== id);
    this.saveUsers(users);
  }
}
