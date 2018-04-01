import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { CommonService } from './services/common.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
  ],
  providers: [CommonService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
