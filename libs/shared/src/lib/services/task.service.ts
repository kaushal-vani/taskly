import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AUTH_API } from '../constants';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { getAuthToken } from '../utils';
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private getHeaders(): HttpHeaders {
    const token = getAuthToken();
    if (!token) {
      throw new Error('Missing auth token');
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  fetchUserTasks(): Observable<Task[]> {
    const user = this.authService.getUser();
    if (!user?._id) throw new Error('User ID missing');

    return this.http
      .get<{ data: { tasks: Task[] } }>(`${AUTH_API.GET_TASKS}/${user._id}`, {
        headers: this.getHeaders(),
      })
      .pipe(map((response) => response?.data?.tasks || []));
  }

  createTask(payload: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(AUTH_API.CREATE_TASK, payload, {
      headers: this.getHeaders(),
    });
  }

  updateTask(taskId: string, payload: Partial<Task>): Observable<Task> {
    return this.http.patch<Task>(`${AUTH_API.UPDATE_TASK}/${taskId}`, payload, {
      headers: this.getHeaders(),
    });
  }

  deleteTask(taskId: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(
      `${AUTH_API.DELETE_TASK}/${taskId}`,
      {
        headers: this.getHeaders(),
      }
    );
  }
}