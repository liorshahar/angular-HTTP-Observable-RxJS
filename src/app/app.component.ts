import { Component } from "@angular/core";

// Observable return by the http
// The service need to cast the returned observable to array
// The steps to fatch data
// * import HttpClientModule in app.module.ts and import it to imports array
// * add the HttpClient as dependency in the constructor of the service
// 1) Http GET request from the service
// 2) Receive the observable and cast it into an employee array
// 3) Subscribe to the observable from employee list and employee detail
// 4) Assign the employee array to a local variable

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {}
