import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from 'src/app/apps/blog/blog-service.service';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  membersData: any = [];

  relayOn = [
    {
      icon: 'sl-icon-target text-info-gradiant',
      field: 'Retargeting Market',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    },
    {
      icon: 'sl-icon-mouse text-info-gradiant',
      field: 'Fruitful Results',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    },
    {
      icon: 'sl-icon-earphones-alt text-info-gradiant',
      field: 'Instant Solutions',
      fieldText: 'You can relay on our amazing features list and also our customer services will be great experience.'
    }
  ];

  constructor(public service: ServiceblogService) { }

  ngOnInit(): void {
    this.getAboutUsData();
  }

  getAboutUsData() {
    this.service.get(`/api/members?populate=*`).subscribe((res: any) => {
      this.membersData = res['data'];
    })
  }
}
