import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { MediumIndexComponent } from './mediums/medium-index/medium-index.component';
import { MediumCreateComponent } from './mediums/medium-create/medium-create.component';
import { MediumEditComponent } from './mediums/medium-edit/medium-edit.component';
import { ShiftIndexComponent } from './shifts/shift-index/shift-index.component';
import { ShiftCreateComponent } from './shifts/shift-create/shift-create.component';
import { ShiftEditComponent } from './shifts/shift-edit/shift-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    MediumIndexComponent, MediumCreateComponent, MediumEditComponent,
    ShiftIndexComponent, ShiftCreateComponent, ShiftEditComponent,
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
