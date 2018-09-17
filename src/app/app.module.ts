import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '',             redirectTo: 'home',             pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'contactus',    redirectTo: 'contact' },
  { path: 'login',        component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
