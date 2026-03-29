import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
