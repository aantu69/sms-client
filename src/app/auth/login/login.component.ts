import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private commonService: CommonService) { }
  constructor() { }

  ngOnInit() {
    //this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   form.reset();
  // }

}
