import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<{ isAuthenticated: boolean, userName: string }> {
    const loginData = {
      email: email,
      password: password
    };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      map(response => {
        return response;
      })
    );
  }
}
