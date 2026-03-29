import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../types/users';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: User | null = null;

  constructor(private userService: UserServiceService, 
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['id'];


    this.userService.getSingleUser(userId).subscribe(user => {
      this.user = user;
      
    })
  }

}
