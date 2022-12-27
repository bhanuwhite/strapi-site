import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
import { PieCharComponent } from './pie-char/pie-char.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    PieCharComponent,
    BarChartComponent,
    MultiLineChartComponent,
    StackedChartComponent,
    DonutChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PieCharComponent,
    BarChartComponent,
    MultiLineChartComponent,
    StackedChartComponent,
    DonutChartComponent,
  ]
})
export class SharedModule { }
