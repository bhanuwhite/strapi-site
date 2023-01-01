import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ServiceblogService } from './services/blog-service.service';



import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import {TextFieldModule} from '@angular/cdk/text-field';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
   AppComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    TextFieldModule,
    AppRoutingModule
  ],
  providers: [ServiceblogService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '544633603794-9mhp01p727himrp9ptgi1s40467us3se.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('815115143189208')
          }
        ],
        onError: (err) => {
          // console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
