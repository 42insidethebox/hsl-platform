import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SecurityComponent } from './security/security.component';

const userProfileRoutes: Routes = [
  { path: 'profile', component: MyProfileComponent, children: [] },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    children: [
      { path: 'privacy', component: PrivacyComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'security', component: SecurityComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userProfileRoutes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
