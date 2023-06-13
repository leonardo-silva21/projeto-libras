import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lesson } from 'src/app/models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName!: string;

  private url = 'http://localhost:3000/tarefas';

  private apiUrl = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  setUserName(name: string){
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  getTask(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(this.url);
  }
}
