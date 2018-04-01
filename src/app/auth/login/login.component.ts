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
  isLoginError: boolean = false;
  constructor(private commonService: CommonService, private router: Router) { }
  //constructor() { }

  ngOnInit() {
    //this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   form.reset();
  // }


  login(userName, password) {
    
    var url = "http://localhost:8000/oauth/token";
    var data = "username="+userName+"&password="+password+"&grant_type=password&client_id=3&client_secret=l4FxqDpIMgybHZuxQqfzbLrKevmrdIZNApbROZCp&scope=*";
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
