import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IEmployee } from "./emplyee";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EployeeServiceService {
  private URL: string = "assets/data/emloyees.json";

  // adding the http -> local variable
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    // cast the return Observeble to type employee array
    return this.http.get<IEmployee[]>(this.URL);
  }
}
