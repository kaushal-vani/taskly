import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AUTH_API } from '../constants';
import {
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse,
  User,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  user: User = {} as User;
  token  = ''

  signUp(payload: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(AUTH_API.SIGN_UP, payload);
  }

  logIn(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_API.LOG_IN, payload).pipe(
      tap((res) => {
        if (res.success) {
          if (res.data?.token) {
            localStorage.setItem('taskly_token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        }
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('taskly_token');
  }

  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
     const token = localStorage.getItem('taskly_token')
    if (user && token) {
      this.user = JSON.parse(user);
    }
    if (this.user) {
      return this.user?._id ? true : false;
    }
    return false;
  }
}
