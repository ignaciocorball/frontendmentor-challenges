import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'interactive-card-details-form', pathMatch: 'full' },

      {path: 'home', component: AppComponent},
      {path: 'interactive-card-details-form', component: InteractiveCardDetailsFormComponent},
      {path: '**', component: AppComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
