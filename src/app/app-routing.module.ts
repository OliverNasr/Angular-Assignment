import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../Reg/regComponent';
import { UserManagementComponent } from './management/user-management.component';

const routes: Routes = [
  { path: 'Reg', component: RegisterComponent },
  { path: 'manage', component: UserManagementComponent },
  { path: '', redirectTo: '/Reg', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
