import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './../auth.component';
import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'register',
            component: RegisterComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
