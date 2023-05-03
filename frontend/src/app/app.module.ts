import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './guest/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './admin/book/book.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    ProfileComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
