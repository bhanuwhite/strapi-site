import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, ROUTES } from '@angular/router';
import { BlogDetailComponent } from './blog-detail.component';

const routes: Route[] = [
  {path: '', component:BlogDetailComponent}
] 


@NgModule({
  declarations: [
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogDetailModule { }
