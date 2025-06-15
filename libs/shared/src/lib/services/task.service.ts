import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AUTH_API } from '../constants';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { getAuthToken } from '../utils';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);
  authservice = inject(AuthService);

  fetchUserTasks(): Observable<any> {
    const token = getAuthToken();
    const user = this.authservice.getUser();

    if (!token || !user?._id) {
      throw new Error('Token or User ID is missing');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${AUTH_API.GET_TASKS}/${user._id}`, {
      headers,
    });
  }

  createTask(task: Partial<Task>): Observable<any> {
    const token = getAuthToken();

    if (!token) {
      throw new Error('Token is missing');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(AUTH_API.CREATE_TASK, task, {
      headers,
    });
  }
}
