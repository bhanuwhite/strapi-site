import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { FullComponent } from './layout/full/full.component';
import { AuthGuard } from './auth/auth.guard';



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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
