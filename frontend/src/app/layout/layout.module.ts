import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BannerNavigationComponent } from './banner-navigation/banner-navigation.component';
import { BannerComponent } from './banner/banner.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { FullComponent } from './full/full.component';



@NgModule({
  declarations: [
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    MainFooterComponent,
    MainHeaderComponent,
    FullComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    MainFooterComponent,
    MainHeaderComponent,
    FullComponent
  ]
})
export class LayoutModule { }
