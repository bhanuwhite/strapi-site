import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, ROUTES } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

const routes: Route[] = [
  {path: '', component:ContactUsComponent}
] 


@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsModule { }
