import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './services/blog-service.service';
import { RelayOnComponent } from './components/about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './components/about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './layout/banner/banner.component';
import { BannerNavigationComponent } from './layout/banner-navigation/banner-navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { PieCharComponent } from './shared-components/pie-char/pie-char.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarChartComponent } from './shared-components/bar-chart/bar-chart.component';
import { MultiLineChartComponent } from './shared-components/multi-line-chart/multi-line-chart.component';
import { StackedChartComponent } from './shared-components/stacked-chart/stacked-chart.component';
import { DonutChartComponent } from './shared-components/donut-chart/donut-chart.component';
import { MainFooterComponent } from './layout/main-footer/main-footer.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PartnerComponent } from './components/partners/partner/partner.component';
import {TextFieldModule} from '@angular/cdk/text-field';




@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PieCharComponent,
    BarChartComponent,
    MultiLineChartComponent,
    StackedChartComponent,
    DonutChartComponent,
    MainFooterComponent,
    MainHeaderComponent,
    ContactUsComponent,
    PartnerComponent,
  
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    DragDropModule,
    TextFieldModule
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
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AppsModule { }
