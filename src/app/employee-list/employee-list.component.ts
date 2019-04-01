import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeService.service';
import { Employee } from './employee-item/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.empService.getEmployees();
  }

}
