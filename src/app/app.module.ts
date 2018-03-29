import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AdminModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
