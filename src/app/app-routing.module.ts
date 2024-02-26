import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserResgisterComponent } from './user-resgister/user-resgister.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SentComponent } from './sent/sent.component';
import { VmailComponent } from './vmail/vmail.component';
import { TrashMailComponent } from './trash-mail/trash-mail.component';
import { ImportantMailComponent } from './important-mail/important-mail.component';
import { VImpmailComponent } from './v-impmail/v-impmail.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'register',component:UserResgisterComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'allmail',component:AllMailComponent},
  {path:'sendmail',component:SendmailComponent},
  {path:'sent',component:SentComponent},
  {path:'viewmail/:id',component:VmailComponent},
  {path:'trash',component:TrashMailComponent},
  {path:'important',component:ImportantMailComponent},
  {path:'important/single/:id',component:VImpmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
