import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-medium-index',
  templateUrl: './medium-index.component.html',
  styleUrls: ['./medium-index.component.css']
})
export class MediumIndexComponent implements OnInit {

  errMsg: any;
  mediums: any = []

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getMediums();
  }

  getMediums() {
    this.commonService.getDatas('api/mediums')
      .subscribe(
        res => {
          this.mediums = res.data
        },
        err => {
          console.log(err)
          this.errMsg = err;
        }
      )
  }

}
