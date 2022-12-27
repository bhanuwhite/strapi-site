import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceblogService } from '../../services/blog-service.service';
// import { ServiceblogService } from '../blog/blog-service.service';
// import { ToastrService } from 'ngx-toastr';
// import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // loginForm: FormGroup
  loginsucces: boolean = false
  public loginError: boolean = false
  email: any;
  userName: any;
  password: any;
  cPassword: any;

  constructor(
    public service: ServiceblogService,
    private router: Router
  ) {
    // const token = localStorage.getItem('token');
    // if (token) {
    // this.router.navigateByUrl('/dashboard');
    // }
  }

  ngOnInit(): void {
    // this.loginForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // })
  }
  signup() {

    let payload = {
      "email": this.email,
      "password": this.password,
      "username": this.userName
    }

    if (this.password == this.cPassword) {

      this.service.post('/api/auth/local/register', payload).subscribe((res: any) => {
        alert("User Successfully Created")
        this.router.navigateByUrl('/login');
      })

    }


  }

  login(){
    this.router.navigateByUrl('/login');
  }

}
