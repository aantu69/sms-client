import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  errMsg: any;
  username: any;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.getUserInfo();
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/auth']);
  }

  getUserInfo() {
    this.commonService.getDatas('api/user')
      .subscribe(
        res => {
          console.log(res);
          this.username = res.name;
        },
        err => {
          console.log(err);
          this.errMsg = err;
        }
      );
  }

}
