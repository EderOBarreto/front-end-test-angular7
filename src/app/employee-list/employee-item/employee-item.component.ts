import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "./employee.model";
import { Router } from "@angular/router";
import { EmployeeService } from 'src/app/employeeService.service';

@Component({
  selector: "app-employee-item",
  templateUrl: "./employee-item.component.html",
  styleUrls: ["./employee-item.component.scss"]
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Input() index: number;

  constructor(private router: Router,
              private emplService: EmployeeService) {}

  ngOnInit() {}

  onEdit(index: number) {
    this.router.navigate(['edit', index]);
  }

  onDelete(index: number) {
    this.emplService.delEmployee(index);
    this.router.navigate(['']);
  }

}
