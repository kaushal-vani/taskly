import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AUTH_API } from '../constants';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { getAuthToken } from '../utils';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);
  authservice = inject(AuthService);


fetchUserTasks(): Observable<any> {
    const token = getAuthToken();
    if (!token || !this.authservice.user._id) {
      throw new Error('Token or User ID is missing');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${AUTH_API.GET_TASKS}/${this.authservice.user._id}`, {
      headers,
    });
  }
}

