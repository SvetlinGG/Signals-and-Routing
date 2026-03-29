import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { User } from '../types/users';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] =[];
  constructor(private userService: UserServiceService ){}

 ngOnInit(): void {
   this.fetchUsers();
 }

 fetchUsers(): void {
  this.userService.getUsers().subscribe( users => {
    console.log(users);
    
    this.users = users;
  })
 }
}
