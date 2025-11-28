import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../Reg/regComponent';
import { UserListComponent } from './user/user-list.component';
import { UserManagementComponent } from './management/user-management.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserListComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
