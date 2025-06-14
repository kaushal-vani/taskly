import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { AUTH_API } from '../constants';
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from '../models';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  signUp(payload: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(AUTH_API.SIGN_UP, payload);
  }

  logIn(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_API.LOG_IN, payload).pipe(
      tap((res) => {
        if (res.data?.token) {
          localStorage.setItem('taskly_token', res.data.token);
        }
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('taskly_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('taskly_token');
  }
}
