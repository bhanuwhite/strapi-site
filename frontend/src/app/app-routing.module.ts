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
      { path: 'blog', loadChildren:()=>import('./components/blog/blog.module').then((mod)=>mod.BlogModule) },
      { path: 'dashboard', canActivate: [AuthGuard], loadChildren:()=>import('./components/dashboard/dashboard.module').then((mod)=>mod.DashboardModule) },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'blogDetail/:id', loadChildren:()=>import('./components/blog/blog.module').then((mod)=>mod.BlogModule) },
      { path: 'partner',loadChildren:()=>import('./components/partners/partner.module').then((mod)=>mod.PartnerModule)},
      { path: 'about', loadChildren:()=>import('./components/about/about.module').then((mod)=>mod.AboutModule) },
      { path: 'contact', loadChildren:()=>import('./components/contact-us/contact-us.module').then((mod)=>mod.ContactUsModule) },
      { path: 'login', loadChildren:()=> import('./components/login/login.module').then ((mod)=>mod.LoginModule)},
      { path: 'signup', loadChildren:()=> import('./components/register/register.module').then ((mod)=>mod.RegisterModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppsRoutingModule { }
