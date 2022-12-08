import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceblogService } from '../blog/blog-service.service';
// import { ToastrService } from 'ngx-toastr';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup
  loginsucces: boolean = false
  public loginError: boolean = false
  loginText: any;
  passwordText: any;
  param1: any;
  locationVal: any;

  constructor(
    public service: ServiceblogService,
    private router: Router,
    private qRoute: ActivatedRoute,
    private location: Location
  ) {
    // const token = localStorage.getItem('token');
    // if (token) {
    // this.router.navigateByUrl('/dashboard');
    // }
  }

  ngOnInit(): void {
    this.locationVal = this.location
    this.qRoute.queryParams.subscribe(params => {
      this.param1 = params.id_token;
      this.service.get(`/api/auth/google/callback${this.locationVal['_platformLocation']['search']}`).subscribe((res) => {
        // console.log(res)
        localStorage.setItem('token', res.jwt);
        this.router.navigateByUrl('/blog');
      })

    });
  }
  login() {
    let payLoad = {
      "identifier": this.loginText,
      "password": this.passwordText
    }
    this.service.post('/api/auth/local', payLoad).subscribe((res: any) => {
      localStorage.setItem('token', res.jwt);
      this.router.navigateByUrl('/blog');
    })

  }

  Signup() {
    this.router.navigateByUrl('/signup');
  }

  googleLogin() {
    window.open('/api/connect/google', '_blank');
  }

}
