import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';



@NgModule({
  declarations: [
    UserManagementComponent,
    ServiceManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
