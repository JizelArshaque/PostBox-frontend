import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserResgisterComponent } from './user-resgister/user-resgister.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'register',component:UserResgisterComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'allmail',component:AllMailComponent},
  {path:'sendmail',component:SendmailComponent},
  {path:'sent',component:SentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
