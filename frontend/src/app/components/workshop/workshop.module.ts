import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './workshop.component';
import { Route, RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';

const routes: Route[] = [
  {path: '', component:WorkshopComponent}
] 


@NgModule({
  declarations: [WorkshopComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkshopModule { }
