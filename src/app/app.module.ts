import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from "swiper/angular";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';
import { ExpensesChartComponentComponent } from './junior/expenses-chart-component/expenses-chart-component.component';
import { QrCodeComponentComponent } from './newbie/qr-code-component/qr-code-component.component';
import { NewComponentComponent } from './newbie/new-component/new-component.component';
import { HomeComponent } from './home/home.component';
import { BlogrLandingPageComponent } from './junior/blogr-landing-page/blogr-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveCardDetailsFormComponent,
    ExpensesChartComponentComponent,
    QrCodeComponentComponent,
    NewComponentComponent,
    HomeComponent,
    BlogrLandingPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
