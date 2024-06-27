import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule} from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CardModule} from 'primeng/card';
import { SignupComponent } from './sign-up/sign-up.component';
import { DatePipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule} from 'primeng/menubar';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignupComponent,
    HeaderLayoutComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    MenubarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }