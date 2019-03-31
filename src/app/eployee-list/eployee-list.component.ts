import { Component, OnInit } from "@angular/core";
import { EployeeServiceService } from "../eployee-service.service";
@Component({
  selector: "app-eployee-list",
  template: `
    <h2>Employee List</h2>
    <h3>Error: {{ errorMsg.message }}</h3>
    <ul *ngFor="let employee of employees">
      <li>
        id: {{ employee.id }} | name: {{ employee.name }} | age:
        {{ employee.age }}
      </li>
    </ul>
  `,
  styleUrls: ["./eployee-list.component.css"]
})
export class EployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg = "";
  constructor(private _employeeService: EployeeServiceService) {}

  // subscribe to the observable that return by getEmployee()
  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(
        data => (this.employees = data),
        error => (this.errorMsg = error)
      );
  }
}
