import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { MediumIndexComponent } from '../mediums/medium-index/medium-index.component';
import { MediumCreateComponent } from '../mediums/medium-create/medium-create.component';
import { MediumEditComponent } from '../mediums/medium-edit/medium-edit.component';
import { ShiftIndexComponent } from '../shifts/shift-index/shift-index.component';
import { ShiftCreateComponent } from '../shifts/shift-create/shift-create.component';
import { ShiftEditComponent } from '../shifts/shift-edit/shift-edit.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard1', pathMatch: 'full' },
          { path: 'dashboard1', component: AdminDashboard1Component },
          { path: 'dashboard2', component: AdminDashboard2Component },
          { path: 'mediums', component: MediumIndexComponent },
          { path: 'mediums/create', component: MediumCreateComponent },
          { path: 'mediums/edit', component: MediumEditComponent },
          { path: 'shifts', component: ShiftIndexComponent },
          { path: 'shifts/create', component: ShiftCreateComponent },
          { path: 'shifts/edit', component: ShiftEditComponent },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
