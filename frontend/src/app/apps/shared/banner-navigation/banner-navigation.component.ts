import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  logoutStatus = false;

  // translate = [{ id: 'en', name: 'English (en)' }, { id: 'fr', name: 'French (fr)' }]
  // selectedLang: any = 'en'

  constructor() {

  }

  ngOnInit(): void {
  }

  // switchLang(lang: any) {
  //   console.log(lang)
  // }
}
