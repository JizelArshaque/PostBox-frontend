import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserResgisterComponent } from './user-resgister/user-resgister.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AllMailComponent } from './all-mail/all-mail.component';

const routes: Routes = [
  {path:'',component:UserLoginComponent},
  {path:'register',component:UserResgisterComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'allmail',component:AllMailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
