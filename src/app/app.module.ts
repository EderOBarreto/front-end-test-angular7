import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-list/employee-item/employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegisterComponent,
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
