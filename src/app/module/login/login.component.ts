import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UrlService } from 'src/app/common/url.service';
import { ApiCallService } from 'src/app/shared/services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonFunction } from 'src/app/common/common-function.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private api: ApiCallService,
    private url: UrlService,
    private cookieService: CookieService,
    private commonFunction: CommonFunction
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // const loginData = {
    //   email: this.loginForm.value.email,
    //   password: this.loginForm.value.password,
    // };
    // const loginResp: any = await this.api.postCall(this.url.login, loginData);
    // if (loginResp && loginResp.success === true) {
    //   const encode: any = await this.commonFunction.encode(
    //     JSON.stringify({
    //       name: loginResp.data[0].name,
    //       email: loginResp.data[0].email,
    //     })
    //   );
    //   localStorage.setItem('userData', encode);
    //   this.toastr.success(loginResp.message, 'Success');
    //   this.router.navigate(['./home/project']);
    // }
    if(this.loginForm.value.email === 'admin@abc.com' && this.loginForm.value.password ==='admin@123'){
        const encode: any = await this.commonFunction.encode(
        JSON.stringify({
          name: 'admin',
          email: 'admin@abc.com',
        })
      );
        localStorage.setItem('userData', encode);
      this.toastr.success('User verify.', 'Success');
      this.router.navigate(['./home/general-ledger-balance']);
    }
  }
}
