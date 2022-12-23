import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path: 'personal-info', 
        loadChildren: () => 
          import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule) 
      }, 
      { 
        path: 'application-info', 
        loadChildren: () => 
          import('./application-info/application-info.module').then(m => m.ApplicationInfoModule)
      }
    ]
  },
  { path: 'onboarding', loadChildren: () => import('../forms/onboarding/onboarding.module').then(m => m.OnboardingModule) }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
