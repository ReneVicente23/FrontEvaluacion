import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { SalesComponent } from './sales/sales.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { PayTrabajadorComponent } from './pay-trabajador/pay-trabajador.component';
import { DishComponent } from './dish/dish.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    SalesComponent,
    AdminReportComponent,
    PayTrabajadorComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
