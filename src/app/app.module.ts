import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

import {
  ProductsModule,
  routes as productsRoutes
} from './products/products.module';

import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProtectedComponent } from './protected/protected.component';
import { SignedInGuard } from './guards/signed-in.guard';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: '',             redirectTo: 'home',             pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: productsRoutes
  },
  { path: 'about',        component: AboutComponent },
  { path: 'contact',      component: ContactComponent },
  { path: 'contactus',    redirectTo: 'contact' },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [SignedInGuard]
  },
  { path: 'sign-in',      component: SignInComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    ProtectedComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProductsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    AUTH_PROVIDERS,
    SignedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
