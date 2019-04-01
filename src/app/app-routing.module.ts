import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmployeeRegisterComponent } from "./employee-register/employee-register.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  {
    path: "list",
    component: EmployeeListComponent
  },
  {
    // maybe this is not a good name
    path: "register",
    component: EmployeeRegisterComponent
  },
  {
    path: "edit/:id",
    component: EmployeeRegisterComponent
  },
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
