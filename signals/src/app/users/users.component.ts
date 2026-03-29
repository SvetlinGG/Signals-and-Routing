import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { User } from '../types/users';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] =[];
  constructor(private userService: UserServiceService, private router: Router ){}

 ngOnInit(): void {
   this.fetchUsers();
 }

 fetchUsers(): void {
  this.userService.getUsers().subscribe( users => {
    console.log(users);
    
    this.users = users;
  })
 }

 loadUser(id: number): void {
  this.router.navigate(['/users', 'details', id])
 }
}
