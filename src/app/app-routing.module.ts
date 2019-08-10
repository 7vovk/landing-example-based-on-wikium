import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './modules/auth/_guards';
import {AdminComponent} from './modules/auth/admin';
import {Role} from './modules/auth/_models';
import {LoginComponent} from './modules/auth/login';
import {MainComponent} from './modules/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  // otherwise redirect to auth
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
