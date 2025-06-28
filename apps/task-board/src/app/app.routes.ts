import { Route } from '@angular/router';
import { authGuard } from '@taskly/shared';

export const appRoutes: Route[] = [
    {path:'',loadComponent:()=>import('@taskly/task-todo-list-ui').then((c)=> c.GetStartedComponent)},
    {path:'authenticate',loadComponent:()=>import('@taskly/authentication-ui').then((c)=>c.AuthenticationPageComponent)},
    {path:'calendar',loadComponent:()=>import('@taskly/task-calendar-ui').then((c)=>c.CalendarPageComponent),canActivate: [authGuard]},
    {path:'create-task', loadComponent:()=> import('@taskly/task-todo-list-ui').then((c)=>c.AddTaskComponent),canActivate: [authGuard]},
    {path:'timer', loadComponent:()=> import('@taskly/user-profile-settings-ui').then((c)=>c.PomodoroTimerComponent),canActivate: [authGuard]},
    {path:'kanban', loadComponent:()=> import('@taskly/task-todo-list-ui').then((c)=>c.TaskListPageComponent)},
    {
  path: 'preferences',
  loadChildren: () =>
    import('@taskly/user-profile-preferences-ui').then(
      (m) => m.routes
    ),
  data: { preload: true }, // for selective preload
}
    
];
