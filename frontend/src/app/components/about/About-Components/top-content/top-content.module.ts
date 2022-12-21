import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TopContentComponent } from './top-content.component';

const routes: Route[] = [
  {path: '', component:TopContentComponent}
] 


@NgModule({
  declarations: [
    TopContentComponent,
  ],
  imports: [
    CommonModule,
    // LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [TopContentComponent]
})
export class TopContentModule { }
