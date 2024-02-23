import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserResgisterComponent } from './user-resgister/user-resgister.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AllMailComponent } from './all-mail/all-mail.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SentComponent } from './sent/sent.component';


@NgModule({
  declarations: [
    AppComponent,
    UserResgisterComponent,
    UserLoginComponent,
    AllMailComponent,
    MyProfileComponent,
    HeaderComponent,
    SendmailComponent,
    SentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
