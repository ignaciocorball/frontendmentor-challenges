// Angular System imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Challenges Levels

// Newbie (Level 1)

// Junior (Lavel 2)
import { InteractiveCardDetailsFormComponent } from './junior/interactive-card-details-form/interactive-card-details-form.component';

// Intermediate (Level 3)


const routes: Routes = [
  
  {path: '', redirectTo: 'challenges/level-2/interactive-card-details-form', pathMatch: 'full' },

  {
      path: 'challenges', component: AppComponent, children: [
        {path: 'home', component: AppComponent},

        {path: 'level-1', children: [

        ]},
        {path: 'level-2', children: [
          {path: 'interactive-card-details-form', component: InteractiveCardDetailsFormComponent},
        ]},
        {path: 'level-3', children: [

        ]},

      ]
    },
      
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
