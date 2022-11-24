import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { SwiperModule } from "swiper/angular";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';
import { ExpensesChartComponentComponent } from './junior/expenses-chart-component/expenses-chart-component.component';
import { QrCodeComponentComponent } from './newbie/qr-code-component/qr-code-component.component';
import { NewComponentComponent } from './newbie/new-component/new-component.component';
import { HomeComponent } from './home/home.component';
import { BlogrLandingPageComponent } from './junior/blogr-landing-page/blogr-landing-page.component';
import { LoaderComponent } from './toolkit/loader/loader.component';
import { TasklistComponent } from './intermediate/tasklist/tasklist.component';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    InteractiveCardDetailsFormComponent,
    ExpensesChartComponentComponent,
    QrCodeComponentComponent,
    NewComponentComponent,
    HomeComponent,
    BlogrLandingPageComponent,
    LoaderComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
