import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../employeeService.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employee-register",
  templateUrl: "./employee-register.component.html",
  styleUrls: ["./employee-register.component.scss"]
})
export class EmployeeRegisterComponent implements OnInit {
  form: FormGroup;
  editMode = false;
  selectedEmployee: number;

  constructor(private emplService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.formInitialize();
  }

  formInitialize() {
    this.form = new FormGroup({
      employee: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        age: new FormControl(null, Validators.required),
        dateNasc: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required),
        rg: new FormControl(null, Validators.required),
        cpf: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        addressNumber: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
        notes: new FormControl(null, Validators.required)
      })
    });
  }

  onSave() {
    const employee = this.form.get("employee").value;
    if (!this.editMode) {
      this.emplService.addEmployee(employee);
      this.router.navigate(["list"]);
    } else {
      this.emplService.editEmployee(this.selectedEmployee, employee);
      this.router.navigate(['list']);
    }
  }

  onCancel() {
    this.form.reset();
    this.form.patchValue({});
  }

}
