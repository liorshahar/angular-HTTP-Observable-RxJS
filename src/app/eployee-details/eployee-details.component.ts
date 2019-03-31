import { Component, OnInit } from "@angular/core";
import { EployeeServiceService } from "../eployee-service.service";

@Component({
  selector: "app-eployee-details",
  template: `
    <h2>Employee Details</h2>
    <h3>Error: {{ errorMsg.message }}</h3>
    <ul *ngFor="let employee of employees">
      <li>
        id: {{ employee.id }} | name: {{ employee.name }} | age:
        {{ employee.age }}
      </li>
    </ul>
  `,
  styleUrls: ["./eployee-details.component.css"]
})
export class EployeeDetailsComponent implements OnInit {
  public employees = [];
  public errorMsg = "";
  constructor(private _employeeService: EployeeServiceService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(
        data => (this.employees = data),
        error => (this.errorMsg = error)
      );
  }
}
