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
  isLoginError = false;
  constructor(private commonService: CommonService, private router: Router) { }
  // constructor() { }

  ngOnInit() {
    // this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   form.reset();
  // }


  login(userName, password) {
    const url = 'http://localhost:8000/oauth/token';
    // tslint:disable-next-line:max-line-length
    const data = 'username=' + userName + '&password=' + password + '&grant_type=password&client_id=2&client_secret=RxaFIb6Fc6gIqPWOAwOA47tzDBrNRoalj1G4cP1Z&scope=*';
    this.commonService.login(url, data)
        .subscribe((res: any) => {
          console.log(userName);
          localStorage.setItem('access_token', res.access_token);
          this.router.navigate(['/admin']);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.isLoginError = true;
        }
      );
  }

}
