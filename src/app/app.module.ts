import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { EployeeListComponent } from "./eployee-list/eployee-list.component";
import { EployeeDetailsComponent } from "./eployee-details/eployee-details.component";
import { HttpClientModule } from "@angular/common/http";
import { EployeeServiceService } from "./eployee-service.service";
import { EployeeTestComponent } from './eployee-test/eployee-test.component';

@NgModule({
  declarations: [AppComponent, EployeeListComponent, EployeeDetailsComponent, EployeeTestComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [EployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
