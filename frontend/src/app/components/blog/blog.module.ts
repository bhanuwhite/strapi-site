import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, ROUTES } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Route[] = [
  {path: '', component:BlogComponent}
] 


@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
