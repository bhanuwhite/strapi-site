import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';


const routes: Route[] = [
  {path: '', component: AboutUsComponent}
] 

@NgModule({
  declarations: [
   AboutUsComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutusModule { }
