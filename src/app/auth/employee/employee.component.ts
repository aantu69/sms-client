import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees = {};
  private _url: string = "../../assets/data/employee.json";

  constructor(private commonService: CommonService) { }

  ngOnInit() {

  }



}
