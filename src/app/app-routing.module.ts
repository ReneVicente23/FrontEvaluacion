import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent} from "./report/report.component";
import {SalesComponent} from "./sales/sales.component";
import {AdminReportComponent} from "./admin-report/admin-report.component";
import {PayTrabajadorComponent} from "./pay-trabajador/pay-trabajador.component";
import {DishComponent} from "./dish/dish.component";

const routes: Routes = [{path: 'report', component:ReportComponent },
                        {path: 'sales', component:SalesComponent},
  {path: 'adminrep', component:AdminReportComponent},
  {path: 'pay', component:PayTrabajadorComponent},
  {path: 'dish', component:DishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
