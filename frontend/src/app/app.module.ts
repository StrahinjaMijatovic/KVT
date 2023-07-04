import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/form/login/login.component';
import { RegistrationComponent } from './components/form/registration/registration.component';
import { httpInterceptorProviders } from './service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AllGroupsComponent } from './components/group/all-groups/all-groups.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateGroupComponent } from './components/home-page/create-group/create-group.component';
import { CreatePostComponent } from './components/home-page/create-post/create-post.component';
import { AllPostsComponent } from './components/home-page/all-posts/all-posts.component';
import { ShowAllPostsComponent } from './components/home-page/show-all-posts/show-all-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    LoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    AllGroupsComponent,
    HomePageComponent,
    CreateGroupComponent,
    CreatePostComponent,
    AllPostsComponent,
    ShowAllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('jwt'),
        allowedDomains: ['example.com'], // replace with your domain(s)
        disallowedRoutes: ['example.com/exampleroute'], // replace with your route(s)
      },
    }),
  ],
  providers: [
    httpInterceptorProviders,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}