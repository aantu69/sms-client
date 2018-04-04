import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMsg: any;
  isLoginError = false;
  loginUserData: any = {};
  constructor(private commonService: CommonService, private router: Router) { }
  // constructor() { }

  ngOnInit() {
    // this.resetForm();
  }

  login() {
    const url = 'oauth/token';
    this.loginUserData.grant_type = 'password';
    this.loginUserData.client_id = 2;
    this.loginUserData.client_secret = 'RxaFIb6Fc6gIqPWOAwOA47tzDBrNRoalj1G4cP1Z';
    this.loginUserData.scope = '*';
    this.commonService.login(url, this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('access_token', res.access_token);
          this.router.navigate(['/admin']);
        },
        err => {
          console.log(err);
          this.errMsg = err;
        }
      );

  }
}
