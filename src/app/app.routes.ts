import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { authorizedGuard } from './_guard/authorized.guard';
import { RegisterComponent } from './authentication/register/register.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
