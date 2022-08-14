import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';
import { ExpensesChartComponentComponent } from './junior/expenses-chart-component/expenses-chart-component.component';
import { QrCodeComponentComponent } from './newbie/qr-code-component/qr-code-component.component';
import { NewComponentComponent } from './newbie/new-component/new-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveCardDetailsFormComponent,
    ExpensesChartComponentComponent,
    QrCodeComponentComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
