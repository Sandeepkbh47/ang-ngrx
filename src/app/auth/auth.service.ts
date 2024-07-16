import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true,
      // observe: 'response' as 'response',
    };
    return this.http.post(
      'http://localhost:3000/api/v1/auth/signup',
      {
        email,
        password,
      },
      httpOptions
    );
  }
}
