import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PartnerComponent } from './components/partners/partner/partner.component';



const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'blog', component: BlogComponent },
      { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'partner',component:PartnerComponent},
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppsRoutingModule { }
