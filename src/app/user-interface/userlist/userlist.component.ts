import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service'; // Update the path if needed

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  items: any[] = []; // Variable to hold the user data

  constructor(private src: ServiceService) { }

  ngOnInit(): void {
    this.loadUsers(); // Load users when the component initializes
  }

  loadUsers() {
    this.items = this.src.getUsers(); // Fetch users from local storage
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.src.deleteUser(id); // Delete the user
      this.loadUsers(); // Reload users after deletion
    }
  }
}
