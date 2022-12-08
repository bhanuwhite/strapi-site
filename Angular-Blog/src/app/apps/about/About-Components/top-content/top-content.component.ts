import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from 'src/app/apps/blog/blog-service.service';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

  imagePath = '../assets/images/innerpage/about-us.jpg';

  aboutUsData: any = [];

  translate = [{ id: 'en', name: 'English (en)' }, { id: 'fr', name: 'French (fr)' }]

  constructor(public service: ServiceblogService) { }

  ngOnInit(): void {
    // this.getAboutUsData();
    this.switchLang('en')
  }

  // getAboutUsData() {
  //   this.service.get(`/api/about-uses?populate=*`).subscribe((res: any) => {
  //     this.aboutUsData = res['data'];
  //   })
  // }

  switchLang(lang: any) {
    this.service.get(`/api/about-uses?populate=*&locale=${lang}`).subscribe((res: any) => {
      this.aboutUsData = res['data'];
    })
    // console.log(lang)
  }
}
