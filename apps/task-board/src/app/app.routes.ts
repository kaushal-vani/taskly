import { Route } from '@angular/router';
import { authGuard } from '@taskly/shared';

export const appRoutes: Route[] = [
    {path:'',loadComponent:()=>import('@taskly/authentication-ui').then((c)=> c.AuthenticationPageComponent)},
    {path:'authenticate',loadComponent:()=>import('@taskly/authentication-ui').then((c)=>c.AuthenticationPageComponent)},
    {path:'calendar',loadComponent:()=>import('@taskly/task-calendar-ui').then((c)=>c.CalenderComponent),canActivate: [authGuard]}
    
];
