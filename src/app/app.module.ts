import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';
import { ExpensesChartComponentComponent } from './junior/expenses-chart-component/expenses-chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveCardDetailsFormComponent,
    ExpensesChartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
