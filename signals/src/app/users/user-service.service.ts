import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/users';



@Injectable({
  providedIn: 'root'

  
})
export class UserServiceService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl)
  }

  getSingleUser(userId: number | string){
    return this.http.get<User>(`${this.apiUrl}/${userId}`)
  }
}
