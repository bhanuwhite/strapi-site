import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { RelayOnComponent } from './relay-on.component';

const routes: Routes = [
  {path: '', component:RelayOnComponent}
] 


@NgModule({
  declarations: [
    RelayOnComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RelayOnComponent
  ]
})
export class RelayOnModule { }
