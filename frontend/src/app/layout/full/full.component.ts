import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  currentUrl:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.currentUrl=this.router.url
  }

}
