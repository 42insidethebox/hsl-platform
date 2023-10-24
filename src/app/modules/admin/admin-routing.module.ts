import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';

const adminPanelRoutes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'service-management', component: ServiceManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminPanelRoutes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
