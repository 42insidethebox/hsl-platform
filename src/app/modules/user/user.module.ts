import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { GeneralComponent } from './profile/general/general.component';
import { AccountComponent } from './profile/account/account.component';
import { PrivacyComponent } from './profile/privacy/privacy.component';
import { NotificationsComponent } from './profile/notifications/notifications.component';
import { SecurityComponent } from './profile/security/security.component';
import { AppearanceComponent } from './profile/appearance/appearance.component';
import { LanguageComponent } from './profile/language/language.component';
import { PersonalDetailsComponent } from './profile/personal-details/personal-details.component';
import { ContactInformationComponent } from './profile/contact-information/contact-information.component';
import { PreferencesComponent } from './profile/preferences/preferences.component';
import { TransactionHistoryComponent } from './profile/transaction-history/transaction-history.component';
import { ProviderProfileComponent } from './profile/provider-profile/provider-profile.component';
import { BookingsTransactionsComponent } from './profile/bookings-transactions/bookings-transactions.component';
import { SocialCommunityComponent } from './profile/social-community/social-community.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyProfileComponent,
    SettingsComponent,
    GeneralComponent,
    AccountComponent,
    PrivacyComponent,
    NotificationsComponent,
    SecurityComponent,
    AppearanceComponent,
    LanguageComponent,
    PersonalDetailsComponent,
    ContactInformationComponent,
    PreferencesComponent,
    TransactionHistoryComponent,
    ProviderProfileComponent,
    BookingsTransactionsComponent,
    SocialCommunityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
