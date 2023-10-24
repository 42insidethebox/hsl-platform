import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { GeneralComponent } from './general/general.component';
import { AccountComponent } from './account/account.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SecurityComponent } from './security/security.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { LanguageComponent } from './language/language.component';

const userProfileRoutes: Routes = [
  { path: 'profile', component: MyProfileComponent, children: [] },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'account', component: AccountComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'appearance', component: AppearanceComponent },
      { path: 'language', component: LanguageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userProfileRoutes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
