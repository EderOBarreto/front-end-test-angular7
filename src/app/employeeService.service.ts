import { Injectable, OnInit } from "@angular/core";
import { Employee } from "./employee-list/employee-item/employee.model";

// talvez eu esteja utilizando Angular 6
@Injectable({ providedIn: "root" })
export class EmployeeService {
  private listEmployees: Employee[] = [
    {name: 'asda',
    age: 12,
    dateNasc: new Date(),
    phone: '1233',
    rg: '123312',
    cpf: '1233',
    address: 'rua x',
    addressNumber: 123,
    city: 'Monte Siao',
    state: 'Minas',
    notes: 'algo'
    }
  ];

  constructor() {}

  getEmployees() {
    return this.listEmployees.slice();
  }

  addEmployee(employee: Employee) {
    this.listEmployees = [...this.listEmployees, employee];
  }

  delEmployee(index: number) {
    this.listEmployees.splice(index, 1);
  }

  editEmployee(index: number, employee: Employee) {
    this.listEmployees[index] = employee;
  }
}
