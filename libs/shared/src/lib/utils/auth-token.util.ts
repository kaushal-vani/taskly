export function getAuthToken(): string | null {
  return localStorage.getItem('taskly_token');
}