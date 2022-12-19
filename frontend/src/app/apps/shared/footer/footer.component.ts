import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showLogin: boolean = false;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void { }

  ngDoCheck(){
    if (window.location.pathname == '/login') {
      this.showLogin = true
    } else {
      this.showLogin = false
    }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data: any) => {
      console.log(JSON.stringify(data))
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
