import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmployee } from "../emplyee";
import { Observable } from "rxjs";

@Component({
  selector: "app-eployee-test",
  template: `
    <h2>Employee Test</h2>
    <h3>Error: {{ errorMsg.message }}</h3>
    <ul *ngFor="let employee of employees">
      <li>
        id: {{ employee.id }} | name: {{ employee.name }} | age:
        {{ employee.age }}
      </li>
    </ul>
  `,
  styleUrls: ["./eployee-test.component.css"]
})
export class EployeeTestComponent implements OnInit {
  private URL: string = "assets/data/emloyees.json";
  public employees = [];
  public errorMsg = "";
  ngOnInit() {
    this.getEmployees().subscribe(
      data => (this.employees = data),
      error => (this.errorMsg = error)
    );
  }

  // adding the http -> local variable
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    // cast the return Observeble to type employee array
    return this.http.get<IEmployee[]>(this.URL);
  }
}
