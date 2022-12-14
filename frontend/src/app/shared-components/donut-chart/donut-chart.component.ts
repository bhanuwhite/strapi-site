import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DonutChartComponent implements OnInit {

  title = 'Pie Chart';

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;

  POPULATION: any[] = [
    { age: '<5', population: 2704659 },
    { age: '5-13', population: 4499890 },
    { age: '14-17', population: 2159981 },
    { age: '18-24', population: 3853788 },
    { age: '25-44', population: 14106543 },
    { age: '45-64', population: 8819342 },
    { age: '≥65', population: 612463 }
  ];


  constructor() {
    this.width = 500 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
    this.initSvg();
    this.drawPie();
  }

  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);
    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.population);
    // this.svg = d3.select('svg')
    this.svg = d3.select('#donutChart').append('svg')
      .attr('width', 800)
      .attr('height', 400)
      .append('g')
      .attr('transform', 'translate(' + this.width + ',' + this.height / 2 + ')');
  }

  private drawPie() {
    let g = this.svg.selectAll('.arc')
      .data(this.pie(this.POPULATION))
      .enter().append('g')
      .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.age));
    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
      .attr('dy', '.35em')
      .text((d: any) => d.data.age);
  }

}
