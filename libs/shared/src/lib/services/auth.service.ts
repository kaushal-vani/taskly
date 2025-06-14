import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';

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
  token = '';

  // Track login state
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  signUp(payload: SignUpRequest): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(AUTH_API.SIGN_UP, payload);
  }

  logIn(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_API.LOG_IN, payload).pipe(
      tap((res) => {
        if (res.success && res.data?.token) {
          localStorage.setItem('taskly_token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          this.isLoggedInSubject.next(true); // ✅ update login state
        }
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('taskly_token');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(false); // ✅ update logout state
  }

  clearSession(): void {
    this.logOut();
  }

  isAuthenticated(): boolean {
    const user = this.getUser();
    const token = this.getToken();
    return !!user?._id && !!token;
  }

  getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (!userString) return null;

    try {
      return JSON.parse(userString) as User;
    } catch (e) {
      console.error('Invalid user data in localStorage:', e);
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('taskly_token');
  }

  // Optional: Call this on app load to sync observable with current state
  refreshLoginState(): void {
    this.isLoggedInSubject.next(this.isAuthenticated());
  }
}