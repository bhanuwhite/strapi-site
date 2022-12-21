import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared-components/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    DragDropModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
