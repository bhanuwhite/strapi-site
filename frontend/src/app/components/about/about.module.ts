import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, Route } from '@angular/router';
import { AboutComponent } from './about.component';
import { RelayOnModule } from './About-Components/relay-on/relay-on.module';
import { TopContentModule } from './About-Components/top-content/top-content.module';

const routes: Routes = [
  {path: '', component:AboutComponent}
] 


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RelayOnModule,
    TopContentModule
  ]
})
export class AboutModule { }
