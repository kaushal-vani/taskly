import { Route } from '@angular/router';
import { authGuard } from '@taskly/shared';

export const appRoutes: Route[] = [
    {path:'',loadComponent:()=>import('@taskly/task-todo-list-ui').then((c)=> c.GetStartedComponent)},
    {path:'authenticate',loadComponent:()=>import('@taskly/authentication-ui').then((c)=>c.AuthenticationPageComponent)},
    {path:'calendar',loadComponent:()=>import('@taskly/task-calendar-ui').then((c)=>c.CalendarPageComponent),canActivate: [authGuard]},
    {path:'create-task', loadComponent:()=> import('@taskly/task-todo-list-ui').then((c)=>c.AddTaskComponent),canActivate: [authGuard]}
    
];
